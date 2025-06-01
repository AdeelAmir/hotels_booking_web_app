import { Request, Response } from 'express';
import {
    BookingReferencePattern,
    CheckEmpty,
    DBDateFormatModule,
    GenerateBadRequestResponse,
    GenerateErrorResponse, GenerateForbiddenErrorResponse, GetBookingArr,
    GetBookingObject,
    SettingObject
} from "../modules/common.modules";
import { StatusCodes } from 'http-status-codes';
import { CheckRequiredValidation } from "../modules/validator.modules";
import '../database/connection'
import { error } from 'console';
import { bookingCancelledEmail, bookingConfirmEmail } from './email.controller';
import { SearchClient, AzureKeyCredential } from '@azure/search-documents';
import { convertToGBP, RoomTypeProcess } from '../modules/roomTypes.modules';
import { json } from 'body-parser';
import { Setting, PRHotels, IVHotelUnified, Bookings, Role, container } from '../database/tableConnection';

// Models
require('dotenv').config({ path: './.env' });
const connectToCosmosDB = require('../database/connection');
const axios = require('axios');
const moment = require("moment");

// ========== Connection Of Tables ==============//
// let Setting: any;
// let PRHotels: any;
// let IVHotelUnified: any;
// let Bookings: any;
// let container: any;
// let Role: any;
// (async () => {
//     const connectionResult = await connectToCosmosDB();

//     Setting = connectionResult.Setting;
//     PRHotels = connectionResult.PRHotels;
//     IVHotelUnified = connectionResult.IVHotelUnified;
//     Bookings = connectionResult.Bookings;
//     container = connectionResult.container
//     Role = connectionResult.Role
//     console.log("Connection SuccessFull 😍");
// })();

// ========== Connection Of Tables END ==============//


export const GetHotelDetails = async (req: Request, res: Response): Promise<any> => {
    // const { Setting, PRHotels } = await connectToCosmosDB();
    let PropertyID: any = req.query.hotel_id;
    const currencyCode = req.query.currency_code;
    PropertyID = parseInt(PropertyID);

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Hotel id', value: PropertyID, type: 'Empty' },
            { field: 'Currency code', value: currencyCode, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchDataCosmosDB();
    };

    let FetchDataCosmosDB = async (): Promise<any> => {
        const querySpec = {
            query: "SELECT * FROM c WHERE c.PropertyID = @PropertyID",
            parameters: [
                { name: "@PropertyID", value: PropertyID }
            ]
        };
        try {
            const { resources: hotels } = await PRHotels.items.query(querySpec).fetchAll();
            Response(hotels)
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Property details',
            data: Data,
        });
    };
    // Start
    ValidationStep1();
};

export const FetchIVectorHotelDetails = async (req: Request, res: Response): Promise<any> => {
    // const { Setting, PRHotels } = await connectToCosmosDB();
    let PropertyID: any = req.query.hotel_id;
    const arrivalDate = req.query.arrival_date;
    const endDate = req.query.end_date;
    const currencyCode = req.query.currency_code;
    const roomRequests: any = req.query.room_requests;
    let updateRoomType: any = {}
    PropertyID = parseInt(PropertyID);
    let IVectorOneData: any = []
    console.log(req.query);


    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Hotel id', value: PropertyID, type: 'Empty' },
            { field: 'Currency code', value: currencyCode, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async () => {
        const arrivalDateMoment = moment(arrivalDate, 'YYYY-MM-DD');
        const endDateMoment = moment(endDate, 'YYYY-MM-DD');
        const differenceInDays = endDateMoment.diff(arrivalDateMoment, 'days');
        const parseRoomRequests = JSON.parse(roomRequests)
        let data = JSON.stringify({
            "ArrivalDate": arrivalDateMoment,
            "EndDate": endDateMoment,
            "Duration": parseInt(differenceInDays),
            "Properties": [PropertyID],
            "RoomRequests": parseRoomRequests,
            "NationalityID": "0",
            "CurrencyCode": "1",
            "OpaqueRates": false,
            "SellingCountry": "1"
        });
        const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ivectorone.com/v2/properties/search',
            headers: headers,
            data: data
        };
        axios.request(config)
            .then((response: any) => {
                IVectorOneData = response.data;
                // return res.json(IVectorOneData);
                updateIVectorPrices()
            }).catch((error: any) => {
                return GenerateErrorResponse(res, error.message);
            });
    }

    let updateIVectorPrices = async (): Promise<any> => {
        try {
            let findCurrencyData: any = {};
            let settingName = process.env.SETTING_CURRENCY_NAME;
            let settingCommision = process.env.SETTING_COMISSION_NAME;

            let sql = 'SELECT * FROM c WHERE c.name = @name';
            let parameter = [{ name: '@name', value: settingName }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await Setting.items.query(querySpec).fetchAll();
            const { resources: setting } = await Setting.items.readAll().fetchAll();
            let filterSetting = setting.filter((item:any)=> item.name == settingCommision)


            if (results.length > 0) {
                let existingSettingData = results[0].currency_data;
                existingSettingData = JSON.parse(existingSettingData)
                findCurrencyData = existingSettingData.find((item: any) => item.currency_code === currencyCode);
                updateRoomType = await RoomTypeProcess(filterSetting, findCurrencyData, IVectorOneData);
                if (updateRoomType) {
                    updateRoomType = JSON.parse(updateRoomType)
                    // return res.json(updateRoomType);
                }
            } else {
                Response();
            }
            if (IVectorOneData.PropertyResults.length > 0) {
                IVectorOneData.PropertyResults[0].RoomTypes = updateRoomType.rooms;
            } else {
                IVectorOneData.PropertyResults[0].RoomTypes = [];
            }

            Response();
        } catch (error: any) {
            console.log(error);
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (): any => {
        console.log("SucessFully!");
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Property details',
            data: IVectorOneData
        });
    };
    // Start
    ValidationStep1();
};

export const GetAllHotels = async (req: Request, res: Response): Promise<any> => {
    // const { IVHotelUnified } = await connectToCosmosDB();

    let FetchData = async (): Promise<any> => {
        const querySpec = {
            query: 'SELECT TOP 1 * FROM c'
        };
        try {
            const { resources: hotels } = await IVHotelUnified.items.query(querySpec).fetchAll();
            // const firstHotel = hotels[0];
            Response(hotels);
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'All properties',
            data: Data
        });
    };
    // Start
    FetchData();
};

export const PropertySearch = async (req: Request, res: Response): Promise<any> => {
    // const { Setting } = await connectToCosmosDB();
    const ArrivalDate = req.body.arrivalDate;
    const Duration = req.body.duration;
    const Properties = JSON.parse(req.body.properties);
    const RoomRequests = JSON.parse(req.body.roomRequests);
    const NationalityID = req.body.nationalityID;
    const CurrencyCode = req.body.currencyCode;
    const OpaqueRates = req.body.opaqueRates === 'true';
    const SellingCountry = req.body.sellingCountry;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Arrival Date', value: ArrivalDate, type: 'Empty' },
            { field: 'Duration', value: Duration, type: 'Empty' },
            { field: 'Properties', value: Properties, type: 'Empty' },
            { field: 'Room Requests', value: RoomRequests, type: 'Empty' },
            { field: 'Nationality ID', value: NationalityID, type: 'Empty' },
            { field: 'Currency Code', value: CurrencyCode, type: 'Empty' },
            { field: 'Selling Country', value: SellingCountry, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async (): Promise<any> => {
        let data = JSON.stringify({
            "ArrivalDate": ArrivalDate,
            "Duration": Number(Duration),
            "Properties": Properties,
            "RoomRequests": RoomRequests,
            "NationalityID": NationalityID,
            "CurrencyCode": CurrencyCode,
            "OpaqueRates": OpaqueRates,
            "SellingCountry": SellingCountry
        });

        const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ivectorone.com/v2/properties/search',
            headers: headers,
            data: data
        };

        const { resources: setting } = await Setting.items.readAll().fetchAll();
        let adminCommission = setting.length > 0 ? setting[0].admin_commission : 0;
        axios.request(config)
            .then((response: any) => {
                let result = response.data;
                result.PropertyResults.forEach((item: any) => {
                    item.RoomTypes = item.RoomTypes.map((room: any) => {
                        let commission: any = room.TotalCost * (adminCommission / 100);
                        room.TotalCost = room.TotalCost + commission;
                        return room;
                    });
                });
                Response(response.data);
            })
            .catch((error: any) => {
                return GenerateErrorResponse(res, error.message);
            });
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Properties',
            data: Data
        });
    };
    // Start
    ValidationStep1();
};

export const PropertyBook = async (req: Request, res: Response): Promise<any> => {
    const BookingReference = req.body.bookingReference;
    const BookingToken = req.body.bookingToken;
    const SupplierReference1 = req.body.supplierReference1;
    const SupplierReference2 = req.body.supplierReference2;
    const RoomBookings = JSON.parse(req.body.roomBookings);
    const LeadCustomer = JSON.parse(req.body.leadCustomer);


    let mainProcess = async (): Promise<any> => {
        const axios = require('axios');
        const bookingData = {
            "BookingReference": `${BookingReference}`,
            "BookingToken": `${BookingToken}`,
            "SupplierReference1": "",
            "SupplierReference2": "",
            "RoomBookings": RoomBookings,
            "LeadCustomer": LeadCustomer
        };

        /* Never ever hit the api */
        const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ivectorone.com/v2/properties/book',
            headers: headers,
            data: bookingData
        };

        axios.request(config)
            .then((response: any) => {
                Response(response.data);
            })
            .catch((error: any) => {
                return GenerateErrorResponse(res, error.message);
            });
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Property are booked!',
            data: Data
        });
    };

    // Start
    mainProcess();
};

export const PropertyPreBook = async (req: Request, res: Response): Promise<any> => {
    const BookingToken = req.body.bookingToken;
    const RoomBookings = JSON.parse(req.body.roomBookings);

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Booking Token', value: BookingToken, type: 'Empty' },
            { field: 'Room Bookings', value: RoomBookings, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async (): Promise<any> => {
        const axios = require('axios');
        let data = JSON.stringify({
            "BookingToken": BookingToken,
            "RoomBookings": RoomBookings
        });
        /* Never ever hit the api */
        const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ivectorone.com/v2/properties/prebook',
            headers: headers,
            data: data
        };

        axios.request(config)
            .then((response: any) => {
                Response(response.data);
            })
            .catch((error: any) => {
                return GenerateErrorResponse(res, error.message);
            });
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Room prebooked successfully',
            data: Data
        });
    };

    // Start
    ValidationStep1();
};

export const PropertyCheckout = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings } = await connectToCosmosDB();
    const title = req.body.title;
    const mainGuestEmail = req.body.email;
    let leadCustomer: any = req.body.lead_customer;
    const totalGuest = req.body.total_guest ? parseInt(req.body.total_guest) : req.body.total_guest;
    const totalRooms = req.body.total_rooms ? parseInt(req.body.total_rooms) : req.body.total_rooms;
    let roomDetails: any = req.body.room_details;
    const roomCharges = req.body.room_charges ? parseFloat(req.body.room_charges) : req.body.room_charges;
    const totalDiscount = req.body.total_discount ? parseFloat(req.body.total_discount) : req.body.total_discount;
    const priceAfterDiscount = req.body.price_after_discount ? parseFloat(req.body.price_after_discount) : req.body.price_after_discount;
    const taxFees = req.body.tax_fees ? parseFloat(req.body.tax_fees) : req.body.tax_fees;
    const payableAmount = req.body.payable_amount ? parseFloat(req.body.payable_amount) : req.body.payable_amount;
    const currencySymbol = req.body.currency_symbol;
    const checkIn = req.body.check_in;
    const checkOut = req.body.check_out;
    const extraDetails = req.body.extra_details;
    let specialRequest: any = req.body.special_request ? req.body.special_request.split(',').map((item: any) => item.trim()) : '';
    const userData = req.body.user; // replace this with  req.body.user;
    let bookingReference: any = null
    let bookingDetailArr: any = [];
    // return res.json({ status: true, data: req.body });


    let validationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Title', value: title, type: 'Empty' },
            { field: 'Total guest', value: totalGuest, type: 'Empty' },
            { field: 'Total room', value: totalRooms, type: 'Empty' },
            { field: 'Room details', value: roomDetails, type: 'Empty' },
            { field: 'Special request', value: specialRequest, type: 'Empty' },
            { field: 'Room charges', value: roomCharges, type: 'Empty' },
            { field: 'Price after discount', value: priceAfterDiscount, type: 'Empty' },
            { field: 'Payable amount', value: payableAmount, type: 'Empty' },
            { field: 'Check in', value: checkIn, type: 'Empty' },
            { field: 'Check out', value: checkOut, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        maintainData();
    };

    const maintainData = async (): Promise<any> => {
        roomDetails = JSON.parse(roomDetails);
        leadCustomer = JSON.parse(leadCustomer);
        const uniqueSupplierReferences = new Set(roomDetails.map((room: any) => room.SupplierReference));
        const uniqueSupplierReferencesArray = Array.from(uniqueSupplierReferences);
        for (const supplierReference of uniqueSupplierReferencesArray) {
            const matchingRooms = roomDetails.filter((room: any) => room.SupplierReference === supplierReference);
            const booking = await createBooking(matchingRooms, leadCustomer);
            bookingDetailArr.push(booking);
        }
        storeData();
    };

    let createBooking = async (matchSupplier: any, leadCustomer: any): Promise<any> => {

        const { resources: bookingsIncrementNumber } = await Bookings.items.readAll().fetchAll();
        bookingReference = await BookingReferencePattern('WB', bookingsIncrementNumber.length);
        const bookingToken = matchSupplier[0].BookingToken;
        const supplierReference1 = matchSupplier[0].SupplierReference;
        const supplierReference2 = '';
        return {
            SupplierBookingReference: bookingReference,
            BookToken: bookingToken,
            BookingToken: bookingToken,
            SupplierReference1: supplierReference1,
            SupplierReference2: supplierReference2,
        }
        let filterRoomBookingsArr = matchSupplier.filter((item: any) => delete item.BookingToken);
        // try {
        //     const bookingData = {
        //         "BookingReference": `${bookingReference}`,
        //         "BookingToken": `${bookingToken}`,
        //         "SupplierReference1": "",
        //         "SupplierReference2": "",
        //         "RoomBookings": filterRoomBookingsArr,
        //         "LeadCustomer" : leadCustomer
        //     };
        //     /* Never ever hit the api */
        //     const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);
        //     const headers = {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Basic ${encodedCredentials}`
        //     };
        //     let config = {
        //         method: 'post',
        //         maxBodyLength: Infinity,
        //         url: 'https://api.ivectorone.com/v2/properties/book',
        //         headers: headers,
        //         data: bookingData
        //     };
        //     let response = await axios.request(config);
        //     return response.data;
        // } catch (error: any) {
        //     return GenerateErrorResponse(res, error.message);
        // }
        response('code commented')
    }

    let storeData = async (): Promise<any> => {
        try {
            let data: any = {
                user_id: userData.user_id,
                email: mainGuestEmail,
                title: title,
                lead_customer: leadCustomer,
                total_rooms: totalRooms,
                room_details: roomDetails,
                total_guest: totalGuest,
                special_request: specialRequest,
                room_charges: Math.round(roomCharges),
                total_discount: totalDiscount,
                price_after_discount: Math.round(priceAfterDiscount),
                tax_fees: taxFees,
                payable_amount: Math.round(payableAmount),
                currency_symbol: currencySymbol,
                check_in: checkIn,
                check_out: checkOut,
                status: 'completed',
                ref_no: bookingReference,
                booking_details: bookingDetailArr,
                extra_details: extraDetails,
                cancellation_fee: null,
                cancellation_date: null,
                created_at: DBDateFormatModule(),
                updated_at: null,
                deleted_at: null
            };
            let newBooking: any = await Bookings.items.create(data);
            newBooking = newBooking.resource;
            const querySpec = {
                query: 'SELECT * FROM c WHERE c.id = @id',
                parameters: [{ name: '@id', value: newBooking.id }],
            };
            const { resources: booking } = await Bookings.items.query(querySpec).fetchAll();
            let responseStatus = await bookingConfirmEmail(booking[0], res);

            if (responseStatus) {
                // Send response
                response(booking[0])
            }
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);

        }
    };

    let response = (booking: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Checkout completed successfully.',
            data: booking
            // data: GetBookingObject(booking)
        });
    };

    // Start
    validationStep1();
};

export const PropertyCheckoutWithoutToken = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings } = await connectToCosmosDB();
    const title = req.body.title;
    const mainGuestEmail = req.body.email;
    let leadCustomer: any = req.body.lead_customer;
    const totalGuest = req.body.total_guest ? parseInt(req.body.total_guest) : req.body.total_guest;
    const totalRooms = req.body.total_rooms ? parseInt(req.body.total_rooms) : req.body.total_rooms;
    let roomDetails: any = req.body.room_details;
    const roomCharges = req.body.room_charges ? parseFloat(req.body.room_charges) : req.body.room_charges;
    const totalDiscount = req.body.total_discount ? parseFloat(req.body.total_discount) : req.body.total_discount;
    const priceAfterDiscount = req.body.price_after_discount ? parseFloat(req.body.price_after_discount) : req.body.price_after_discount;
    const taxFees = req.body.tax_fees ? parseFloat(req.body.tax_fees) : req.body.tax_fees;
    const payableAmount = req.body.payable_amount ? parseFloat(req.body.payable_amount) : req.body.payable_amount;
    const checkIn = req.body.check_in;
    const currencySymbol = req.body.currency_symbol;
    const checkOut = req.body.check_out;
    const extraDetails = req.body.extra_details;
    let specialRequest: any = req.body.special_request ? req.body.special_request.split(',').map((item: any) => item.trim()) : '';
    let bookingReference: any = null
    let bookingDetailArr: any = [];
    // return res.json({ status: true, data: req.body });


    let validationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Title', value: title, type: 'Empty' },
            { field: 'Total guest', value: totalGuest, type: 'Empty' },
            { field: 'Total room', value: totalRooms, type: 'Empty' },
            { field: 'Room details', value: roomDetails, type: 'Empty' },
            { field: 'Special request', value: specialRequest, type: 'Empty' },
            { field: 'Room charges', value: roomCharges, type: 'Empty' },
            { field: 'Price after discount', value: priceAfterDiscount, type: 'Empty' },
            { field: 'Payable amount', value: payableAmount, type: 'Empty' },
            { field: 'Check in', value: checkIn, type: 'Empty' },
            { field: 'Check out', value: checkOut, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        maintainData();
    };

    const maintainData = async (): Promise<any> => {
        roomDetails = JSON.parse(roomDetails);
        leadCustomer = JSON.parse(leadCustomer);
        const uniqueSupplierReferences = new Set(roomDetails.map((room: any) => room.SupplierReference));
        const uniqueSupplierReferencesArray = Array.from(uniqueSupplierReferences);
        for (const supplierReference of uniqueSupplierReferencesArray) {
            const matchingRooms = roomDetails.filter((room: any) => room.SupplierReference === supplierReference);
            const booking = await createBooking(matchingRooms, leadCustomer);
            bookingDetailArr.push(booking);
        }
        storeData();
    };

    let createBooking = async (matchSupplier: any, leadCustomer: any): Promise<any> => {

        const { resources: bookingsIncrementNumber } = await Bookings.items.readAll().fetchAll();
        bookingReference = await BookingReferencePattern('WB', bookingsIncrementNumber.length);
        const bookingToken = matchSupplier[0].BookingToken;
        const supplierReference1 = matchSupplier[0].SupplierReference;
        const supplierReference2 = '';
        return {
            SupplierBookingReference: bookingReference,
            BookToken: bookingToken,
            BookingToken: bookingToken,
            SupplierReference1: supplierReference1,
            SupplierReference2: supplierReference2,
        }
        let filterRoomBookingsArr = matchSupplier.filter((item: any) => delete item.BookingToken);
        // try {
        //     const bookingData = {
        //         "BookingReference": `${bookingReference}`,
        //         "BookingToken": `${bookingToken}`,
        //         "SupplierReference1": "",
        //         "SupplierReference2": "",
        //         "RoomBookings": filterRoomBookingsArr,
        //         "LeadCustomer" : leadCustomer
        //     };
        //     /* Never ever hit the api */
        //     const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);
        //     const headers = {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Basic ${encodedCredentials}`
        //     };
        //     let config = {
        //         method: 'post',
        //         maxBodyLength: Infinity,
        //         url: 'https://api.ivectorone.com/v2/properties/book',
        //         headers: headers,
        //         data: bookingData
        //     };
        //     let response = await axios.request(config);
        //     return response.data;
        // } catch (error: any) {
        //     return GenerateErrorResponse(res, error.message);
        // }
        response('code commented')
    }

    let storeData = async (): Promise<any> => {
        try {
            let data: any = {
                user_id: '',
                email: mainGuestEmail,
                title: title,
                lead_customer: leadCustomer,
                total_rooms: totalRooms,
                room_details: roomDetails,
                total_guest: totalGuest,
                special_request: specialRequest,
                room_charges: Math.round(roomCharges),
                total_discount: totalDiscount,
                price_after_discount: Math.round(priceAfterDiscount),
                tax_fees: taxFees,
                payable_amount: Math.round(payableAmount),
                currency_symbol: currencySymbol,
                check_in: checkIn,
                check_out: checkOut,
                status: 'completed',
                ref_no: bookingReference,
                booking_details: bookingDetailArr,
                extra_details: extraDetails,
                cancellation_fee: null,
                cancellation_date: null,
                created_at: DBDateFormatModule(),
                updated_at: null,
                deleted_at: null
            };
            let newBooking: any = await Bookings.items.create(data);
            newBooking = newBooking.resource;
            const querySpec = {
                query: 'SELECT * FROM c WHERE c.id = @id',
                parameters: [{ name: '@id', value: newBooking.id }],
            };
            const { resources: booking } = await Bookings.items.query(querySpec).fetchAll();
            let responseStatus = await bookingConfirmEmail(booking[0], res);

            if (responseStatus) {
                // Send response
                response(booking[0])
            }
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);

        }
    };

    let response = (booking: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Checkout completed successfully.',
            data: booking
            // data: GetBookingObject(booking)
        });
    };

    // Start
    validationStep1();
};

export const PropertyGetCancelFees = async (req: Request, res: Response): Promise<any> => {
    const SupplierBookingReference = req.body.supplierBookingReference;
    const BookingToken = req.body.bookingToken;
    const SupplierReference1 = req.body.supplierReference1;
    const SupplierReference2 = req.body.supplierReference2;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Supplier booking reference', value: SupplierBookingReference, type: 'Empty' },
            { field: 'Booking token', value: BookingToken, type: 'Empty' },
            { field: 'Supplier reference 1', value: SupplierReference1, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async (): Promise<any> => {
        const axios = require('axios');
        let data = JSON.stringify({
            "SupplierBookingReference": SupplierBookingReference,
            "BookingToken": BookingToken,
            "SupplierReference1": SupplierReference1,
            "SupplierReference2": SupplierReference2
        });
        const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.ivectorone.com/v2/properties/precancel',
            headers: headers,
            data: data
        };

        axios.request(config)
            .then((response: any) => {
                Response(response.data);
            })
            .catch((error: any) => {
                return GenerateErrorResponse(res, error.message);
            });
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Property cancel fees',
            data: Data
        });
    };

    // Start
    ValidationStep1();
};

export const PropertyCancel = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings } = await connectToCosmosDB();
    const bookingId = req.body.booking_id;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Booking id', value: bookingId, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        // MainProcess();
        cancelBooking()
    };

    let MainProcess = async (): Promise<any> => {
        let status = 'completed';
        let query = "SELECT * FROM c WHERE c.id = @id AND c.status = @status";
        let parameters = [{ name: "@id", value: bookingId }, { name: "@status", value: status }];
        const querySpec = { query, parameters };
        const { resources: userBookings } = await Bookings.items.query(querySpec).fetchAll();
        if (userBookings.length > 0) {
            const currentDate = new Date();
            const user = userBookings.filter((result: any) => {
                const checkOutDate = new Date(result.check_out);
                return result.deleted_at == null && checkOutDate > currentDate;
            });
            if (user.length > 0) {
                FetchData(user[0]);
            } else {
                return GenerateBadRequestResponse(res, 'Invalid booking id.');
            }

        } else {
            return GenerateBadRequestResponse(res, 'Invalid booking id.');
        }
    };

    let FetchData = async (userBookings: any): Promise<any> => {
        try {
            for (const booking of userBookings.booking_details) {
                let data = {
                    "SupplierBookingReference": booking.SupplierBookingReference,
                    "BookingToken": booking.BookingToken,
                    "SupplierReference1": booking.SupplierReference1,
                    "SupplierReference2": booking.SupplierReference2
                };
                const encodedCredentials = Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`).toString('base64');
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${encodedCredentials}`
                };
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'https://api.ivectorone.com/v2/properties/cancel',
                    headers: headers,
                    data: data
                };
                await axios.request(config);
            }
            await cancelBooking();
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let cancelBooking = async (): Promise<any> => {
        try {
            const { resource: userBookings } = await Bookings.item(bookingId).read();
            userBookings.status = 'cancelled';
            userBookings.updated_at = DBDateFormatModule();
            const { resource: updatedBookingStatus } = await Bookings.item(userBookings.id).replace(userBookings);
            let responseStatus = await bookingCancelledEmail(updatedBookingStatus, res);
            Response(updatedBookingStatus);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    }

    let Response = (booking: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Booking cancelled successfully',
            data: booking
        });
    };

    // Start
    ValidationStep1();
};

export const getUserBookings = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings } = await connectToCosmosDB();
    const userData = req.body.user;
    const status = req.query.status;
    const pageNumber: any = req.query.page;
    const noOfRecords: any = req.query.no_of_records;
    let userOrders = []

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Page no', value: pageNumber, type: 'Empty' },
            { field: 'No of records', value: noOfRecords, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        await FetchData();
    };

    let FetchData = async (): Promise<any> => {
        try {
            console.log(userData.email);

            let query = "SELECT * FROM c WHERE c.email = @email ORDER BY c.created_at DESC";
            let parameters = [{ name: "@email", value: userData.email }];

            // if (CheckEmpty(status)) {
            //     query = "SELECT * FROM c WHERE c.email = @email AND c.status = @status ORDER BY c.created_at DESC";
            //     parameters.push({ name: "@status", value: status });
            // }
            const querySpec = { query, parameters };
            const { resources: userBookings } = await Bookings.items.query(querySpec).fetchAll();
            if(status == "pending"){
                userOrders = userBookings.filter((item: any) => item.status == 'completed' && moment(item.check_in).format("YYYY-MM-DD") > moment().format("YYYY-MM-DD"));
            }else if(status == "completed"){
                userOrders = userBookings.filter((item: any) => item.status == 'completed' && moment(item.check_in).format("YYYY-MM-DD") <= moment().format("YYYY-MM-DD"));
            }else if(status == "cancelled"){
                userOrders = userBookings.filter((item: any) => item.status == 'cancelled');
            }else{
                userOrders = userBookings
            }

            const startIndex = (pageNumber - 1) * noOfRecords;
            const endIndex = startIndex + noOfRecords;
            const paginatedArr = userOrders.slice(startIndex, endIndex);
            Response(userOrders, paginatedArr);
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (userBookings: any, paginatedArr: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: `User ${status} Bookings`,
            data: GetBookingArr(paginatedArr),
            currentPage: parseInt(pageNumber),
            totalPages: Math.ceil(userBookings.length / noOfRecords),
            perPageRecords: parseInt(noOfRecords),
            totalRecords: userBookings.length
        });
    };

    // Start
    ValidationStep1();
}

export const getBookingDetail = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings } = await connectToCosmosDB();
    const bookingId = req.query.booking_id;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Booking id', value: bookingId, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        try {
            let query = "SELECT * FROM c WHERE c.id = @id";
            let parameters = [{ name: "@id", value: bookingId }];
            const querySpec = { query, parameters };
            const { resources: booking } = await Bookings.items.query(querySpec).fetchAll();
            if (booking.length > 0) {
                Response(booking);
                // FetchData();
            } else {
                return GenerateBadRequestResponse(res, 'Invalid booking id');
            }
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    // let FetchData = async (booking:any): Promise<any> => {
    //     try {
    //         const querySpec = {
    //             query: "SELECT * FROM c WHERE c.id = @id",
    //             parameters: [
    //                 { name: "@id", value: bookingId }
    //             ]
    //         };
    //         const { resources: userBookings } = await Bookings.items.query(querySpec).fetchAll();
    //         Response(booking);
    //     } catch (error: any) {
    //         return GenerateErrorResponse(res, error.message);
    //     }
    // };

    let Response = (bookingDetail: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Booking details.',
            data: GetBookingObject(bookingDetail[0])
        });
    };
    // Start
    ValidationStep1();
}

export const getAllBookings = async (req: Request, res: Response): Promise<any> => {
    // return res.json(req.body.user)
    // const { Bookings, container } = await connectToCosmosDB();
    const userData = req.body.user;
    const pageNumber: any = req.query.page;
    const noOfRecords: any = req.query.no_of_records;
    let completedOrders: any = null;
    let pendingOrders: any = null;
    let upcomingOrders: any = null;
    let cancelledOrders: any = null;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Page no', value: pageNumber, type: 'Empty' },
            { field: 'No of records', value: noOfRecords, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        await FetchData();
    };

    let FetchData = async (): Promise<any> => {
        try {
            // check permission
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Unauthorized user');
            } else if (user.role_id != 1) {
                return GenerateForbiddenErrorResponse(res, 'Permission denied');
            }
            const querySpec = {
                query: 'SELECT * FROM Bookings b ORDER BY b.created_at DESC',
            };
            const { resources: bookings } = await Bookings.items.query(querySpec).fetchAll();
            pendingOrders = bookings.filter((item: any) => item.status == 'completed' && item.checkIn <= moment().format("YYYY-MM-DD"));
            console.log(pendingOrders);
            
            completedOrders = bookings.filter((item: any) => item.status == 'completed');
            let todayCompletedOrders = completedOrders.filter((item: any) => moment(item.created_at, "YYYY-MM-DD").isSame(moment(), "day"));
            upcomingOrders = bookings.filter((item: any) => item.status == 'upcoming');
            let todayUpcomingOrders = upcomingOrders.filter((item: any) => moment(item.created_at, "YYYY-MM-DD").isSame(moment(), "day"));
            cancelledOrders = bookings.filter((item: any) => item.status == 'cancelled');
            let todayCancelledOrders = cancelledOrders.filter((item: any) => moment(item.created_at, "YYYY-MM-DD").isSame(moment(), "day"));
            let cardsData = {
                pendingOrders: pendingOrders.length > 0 ? pendingOrders.length : 0,
                upcomingOrders: upcomingOrders.length > 0 ? upcomingOrders.length : 0,
                completedOrders: completedOrders.length > 0 ? completedOrders.length : 0,
                cancelledOrders: cancelledOrders.length > 0 ? cancelledOrders.length : 0,
                todayCompletedOrders: todayCompletedOrders.length > 0 ? todayCompletedOrders.length : 0,
                todayUpcomingOrders: todayUpcomingOrders.length > 0 ? todayUpcomingOrders.length : 0,
                todayCancelledOrders: todayCancelledOrders.length > 0 ? todayCancelledOrders.length : 0,
            }
            const startIndex = (pageNumber - 1) * noOfRecords;
            const endIndex = startIndex + noOfRecords;
            const paginatedArr = bookings.slice(startIndex, endIndex);
            Response(bookings, paginatedArr, cardsData)
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (bookings: any, paginatedArr: any, cardsData: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'All bookings',
            data: GetBookingArr(paginatedArr),
            cardsData: cardsData,
            currentPage: parseInt(pageNumber),
            totalPages: Math.ceil(bookings.length / noOfRecords),
            perPageRecords: parseInt(noOfRecords),
            totalRecords: bookings.length
        });
    };
    // Start
    ValidationStep1();
}

export const GetUnifiedFilterHotels = async (req: Request, res: Response): Promise<any> => {
    console.log(req.body);
    const propertyName = req.body.property_name;
    const arrivalDate = req.body.arrival_date;
    const endDate = req.body.end_date;
    const duration = req.body.duration;
    const roomRequests: any = req.body.room_requests;
    const nationalityID = req.body.nationality_id;
    const currencyCode = req.body.currency_code;
    const sellingCountry = req.body.selling_country;
    const address: any = req.body.location;
    const radius: any = req.body.radius;
    let propertyIds: any = [];
    let iVectorData: any = null;
    let latitude: any = null;
    let longitude: any = null;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Arrival Date', value: arrivalDate, type: 'Empty' },
            { field: 'End Date', value: endDate, type: 'Empty' },
            { field: 'Duration', value: duration, type: 'Empty' },
            { field: 'Room Requests', value: roomRequests, type: 'Empty' },
            { field: 'Nationality ID', value: nationalityID, type: 'Empty' },
            { field: 'Currency Code', value: currencyCode, type: 'Empty' },
            { field: 'Selling Country', value: sellingCountry, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        if (!CheckEmpty(propertyName) && !CheckEmpty(address)) {
            return GenerateBadRequestResponse(res, 'Property name or location atleast one of is required!');
        }
        if (CheckEmpty(address)) {
            if (!CheckEmpty(radius)) {
                return GenerateBadRequestResponse(res, 'Radius is required');
            }
        }
        FilterByDistanceName();
    };

    let FilterByDistanceName = async (): Promise<any> => {
        try {
            if (CheckEmpty(propertyName)) {
                console.log('Property name based Search');

                let results = await searchHotelData(propertyName, '', '', '');

                if (!results.status) {
                    return GenerateErrorResponse(res, results.message);
                }

                const findData = results.data.results;
                propertyIds = findData.map((item: any) => item.PropertyID);
                iVectorData = findData;
                let data = {
                    PropertyResults: findData,
                    propertyIds: propertyIds
                }
                Response(data);

            } else {
                console.log('Location based Search');

                const subscriptionKey = process.env.AZURE_MAP_API_KEY;
                const url = `https://atlas.microsoft.com/search/address/json?api-version=1.0&subscription-key=${subscriptionKey}&query=${encodeURIComponent(address)}`;

                const response = await axios.get(url);
                if (response.data && response.data.results && response.data.results.length > 0) {
                    const coordinates = response.data.results[0].position;
                    latitude = coordinates.lat;
                    longitude = coordinates.lon;
                } else {
                    return GenerateBadRequestResponse(res, 'Address not found');
                }

                let results = await searchHotelData('', latitude, longitude, radius);
                if (!results.status) {
                    return GenerateErrorResponse(res, results.message);
                }

                // return res.json(results)
                const findData = results.data.results;
                iVectorData = findData;
                propertyIds = findData.map((item: any) => item.PropertyID);
                let data = {
                    PropertyResults: findData,
                    propertyIds: propertyIds
                }
                Response(data);
            }
        } catch (error: any) {
            console.log('Cannt Get that data');
            return GenerateErrorResponse(res, error.message);
        }
    }

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Filtered hotels.',
            data: Data,
            // propertyIds : Data.propertyIds
        });
    };
    // Start
    ValidationStep1();
};

// ===========================IVector Fetch Api========================= // 
export const FetchIVectorData = async (req: Request, res: Response): Promise<any> => {
    console.log("Fetch Data Call ");
    
    // const { Setting } = await connectToCosmosDB();
    const arrivalDate = req.body.arrival_date;
    const endDate = req.body.end_date;
    const roomRequests: any = req.body.room_requests;
    const currencyCode = req.body.currency_code;
    console.log(req.body.propertyIds);
    let propertyIds: any = JSON.parse(req.body.propertyIds);
    let iVectorData: any = JSON.parse(req.body.IndexData);

    propertyIds = propertyIds.length > 0 ? propertyIds : [0];
    propertyIds = propertyIds.length > 100 ? propertyIds.slice(0, 100) : propertyIds;

    const arrivalDateMoment = moment(arrivalDate, 'YYYY-MM-DD');
    const endDateMoment = moment(endDate, 'YYYY-MM-DD');
    const differenceInDays = endDateMoment.diff(arrivalDateMoment, 'days');
    const parseRoomRequests = JSON.parse(roomRequests)
    const data = JSON.stringify({
        "ArrivalDate": arrivalDateMoment,
        "EndDate": endDateMoment,
        "Duration": differenceInDays,
        "Properties": propertyIds,
        "RoomRequests": parseRoomRequests,
        "NationalityID": "0",
        "CurrencyCode": "1",
        "OpaqueRates": false,
        "SellingCountry": "1",
    });

    const encodedCredentials = btoa(`${process.env.USER_NAME}:${process.env.PASSWORD}`);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
    };

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.ivectorone.com/v2/properties/search',
        headers: headers,
        timeout: 120000,
        data: data,
    };

    try {
        // ========== .Env Veriable =====//
        let settingName = process.env.SETTING_CURRENCY_NAME;
        let settingCommision = process.env.SETTING_COMISSION_NAME;
        // ========== Fetch Setting Table Data =====//
        const { resources: setting } = await Setting.items.readAll().fetchAll();
        const Results = setting.find((item:any)=> item.name == settingCommision)
        let adminCommission = Results.length > 0 ? Results[0].admin_commission : 0;
        let stripeFee = Results.length > 0 ? Results[0].stripe_fee : 0;
        let iVectorFee = Results.length > 0 ? Results[0].ivector_fee : 0;
        // ========== Get Currency Data =====//
        let findCurrencyObject = setting.find((item: any) => item.name == settingName)
        let existingSettingData = findCurrencyObject.currency_data;
        existingSettingData = JSON.parse(existingSettingData);
        const findCurrencyData = existingSettingData.find((item: any) => item.currency_code === currencyCode);
        // ========== API Call =====//
        const response = await axios.request(config);
        const result = response.data;

        if (result.PropertyResults.length > 0) {
            result.PropertyResults.forEach((item: any) => {
                let itemID = item.PropertyID || item.id;
                const matchingIdObject = iVectorData.find((hotel: any) =>
                    (hotel.PropertyID === itemID || hotel.id === itemID)
                );
                if (matchingIdObject) {
                    const lowestPriceObject = item.RoomTypes.reduce((lowest: any, room: any) => {
                        return room.TotalCost < lowest.TotalCost ? room : lowest;
                    }, item.RoomTypes[0]);

                    let priceCurrencyCode = convertToGBP(lowestPriceObject.TotalCost, lowestPriceObject.CurrencyCode, findCurrencyData);
                    let commission = priceCurrencyCode * (adminCommission / 100);
                    let iVectorCommission = priceCurrencyCode * (iVectorFee / 100);
                    let stripeCommission = (commission + iVectorCommission) * (stripeFee / 100);
                    let lowestTotalCost = priceCurrencyCode + commission + iVectorCommission + stripeCommission;
                    item.propertyName = matchingIdObject.propertyName;
                    item.address = matchingIdObject.Address;
                    item.Rating = parseFloat(matchingIdObject.Rating);
                    item.OverAllRating = matchingIdObject.OverAllRating;
                    item.RatingCount = matchingIdObject.RatingCount;
                    item.HotelPolicy = matchingIdObject.HotelPolicy;
                    item.Facilities = matchingIdObject.Facilities;
                    item.MainImageURL = matchingIdObject.MainImageURL;
                    item.Location = matchingIdObject.Location;
                    item.HotelTags = matchingIdObject.HotelTags;
                    item.HotelPrice = Math.round(lowestTotalCost);

                    item.RoomTypes = item.RoomTypes.map((room: any) => {
                        let commission = room.TotalCost * (adminCommission / 100);
                        let iVectorCommission = room.TotalCost * (iVectorFee / 100);
                        let stripeCommission = (commission + iVectorCommission) * (stripeFee / 100);
                        let totalCost = room.TotalCost + commission + iVectorCommission + stripeCommission;
                        room.TotalCost = parseFloat(totalCost.toFixed(2));
                        return room;
                    });
                }
            });

            return res.status(StatusCodes.OK).json({
                status: true,
                message: 'Filtered hotels.',
                data: response.data
            });
        } else {
            return GenerateErrorResponse(res, 'No property found!');
        }
    } catch (error) {
        console.log('Error Fetching Ivector Data');

        return GenerateErrorResponse(res, error);
    }
};

export const TruncateContainer = async (req: Request, res: Response): Promise<any> => {
    // const { Bookings, container, Setting, Role } = await connectToCosmosDB();
    const userData = req.body.user;

    let FetchData = async (): Promise<any> => {
        try {
            const { resources: items } = await Setting.items.readAll().fetchAll();
            for (const item of items) {
                await Setting.item(item.id, item.partitionKey).delete();
            }
            Response(items)
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Truncate container Successfully!',
            data: Data
        });
    };
    // Start
    FetchData();
}

export const searchHotels = async (req: Request, res: Response): Promise<any> => {
    const query = req.query.search as string;
    const latitude = req.query.latitude as string;
    const longitude = req.query.longitude as string;
    const radius = req.query.radius as string;

    if ((!latitude || !longitude || !radius) && !query) {
        return res.status(400).send('Please provide either a query or latitude, longitude, and radius.');
    }

    const serviceName = process.env.AZURE_SEARCH_SERVICE as string;
    const indexName = process.env.AZURE_SEARCH_INDEX as string;
    const queryKey = process.env.AZURE_SEARCH_API_KEY as string;

    const searchUrl = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs/search?api-version=2020-06-30`;
    let response: any;

    try {
        const requestBody = query
            ? {
                search: query,
                searchFields: "header/hotel_name",
                select: "*", //'PropertyID,header/hotel_name,header/star_rating,overall_rating,header/geo_location,main_image_url',
                top: 10,
                count: true
            }
            : {
                search: '*',
                filter: `geo.distance(header/geo_location, geography'POINT(${longitude} ${latitude})') le ${radius}`,
                orderby: `geo.distance(header/geo_location, geography'POINT(${longitude} ${latitude})')`,
                select: "*", //'PropertyID,header/hotel_name,header/star_rating,overall_rating,header/geo_location,main_image_url',
                top: 50,
                count: true
            };

        response = await fetch(searchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': queryKey
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Azure Search request failed with status: ${response.status}`);
        }

        const data = await response.json();

        const getData = data.value.map((doc: any) => ({
            PropertyID: doc.PropertyID,
            hotelName: doc.header.hotel_name,
            starRating: doc.header.star_rating,
            overallRating: doc.overall_rating,
            rating_count: doc.rating_count,
            all_facilities_and_services: doc.all_facilities_and_services,
            Hotel_Tags: doc.Hotel_Tags,
            rid: doc.rid,
            imageUrl: doc.main_image_url,
            geoLocation: doc.header.geo_location
        }));

        res.json({
            count: data['@odata.count'],
            results: getData
        });

    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ error: 'Failed to fetch hotel data' });
    }
};

const searchHotelData = async (query: any, latitude: any, longitude: any, radius: any): Promise<any> => {
    const serviceName = process.env.AZURE_SEARCH_SERVICE as string;
    const indexName = process.env.AZURE_SEARCH_INDEX as string;
    const queryKey = process.env.AZURE_SEARCH_API_KEY as string;

    const searchUrl = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs/search?api-version=2020-06-30`;
    let response: any;

    try {
        const requestBody = query
            ? {
                search: query,
                searchFields: "header/hotel_name",
                select: "*", //"PropertyID,header/hotel_name,header/star_rating,overall_rating,header/geo_location,main_image_url",
                top: 10,
                count: true
            }
            : {
                search: '*',
                filter: `geo.distance(header/geo_location, geography'POINT(${longitude} ${latitude})') le ${radius}`,
                orderby: `geo.distance(header/geo_location, geography'POINT(${longitude} ${latitude})')`,
                select: "*", //'PropertyID,header/hotel_name,header/star_rating,overall_rating,header/geo_location,main_image_url',
                top: 50,
                count: true
            };

        response = await fetch(searchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': queryKey
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            return { status: false, message: `Azure Search request failed with status: ${response.status}` };
        }

        const data = await response.json();

        // return data.value
        const getData = data.value.map((doc: any) => ({
            PropertyID: doc.PropertyID,
            propertyName: doc.header.hotel_name,
            Rating: doc.header.star_rating,
            OverAllRating: doc.overall_rating,
            RatingCount: doc.rating_count,
            HotelTags: doc.Hotel_Tags,
            Facilities: doc.all_facilities_and_services,
            rid: doc.rid,
            MainImageURL: doc.main_image_url,
            Location: doc.header.geo_location
        }));
        return { status: true, data: { count: data['@odata.count'], results: getData } };

    } catch (error) {
        console.error('Error fetching hotels:', error);
        return { status: false, message: error || 'Failed to fetch hotel data' };
    }
};