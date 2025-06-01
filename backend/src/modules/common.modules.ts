import { json } from 'body-parser';
import { StatusCodes } from 'http-status-codes';
const moment = require('moment');
const path = require("path");
const fs = require("fs-extra");

// Basic Helper Functions - Start

export let FilesUpload = async (req: any, res: any, Files: any, Path: any, Callback: any): Promise<any> => {

    let StoragePath = path.resolve("./") + '/public/files/' + Path;
    let FileNames: any = [];
    for (let i = 0; i < Files.length; i++) {
        let FileObject = Files[i];
        const OldPath = FileObject.path;
        const Extension = path.extname(OldPath);
        const Filename = `File-${moment().format('YMMDD-HHmmss')}-${RandomNumberModule(100000, 99999999)}${Extension}`;
        const NewPath = StoragePath + Filename;
        await fs.copy(OldPath, NewPath, function (err: Error) {
            if (err) {
                return res.status(req.app.get("ErrorStatus")).json({
                    status: false,
                    message: err.message,
                });
            }
            FileNames.push(Filename);
            /* Check for Total Files Upload */
            if (FileNames.length === Files.length) {
                return Callback(FileNames);
            }
        });
    }
};

export let DeleteFile = (req: any, res: any, File: any, Path: any, Callback: any): any => {
    const path = require("path");
    const fs = require("fs");
    let StoragePath = path.resolve("./") + '/public/files/' + Path;
    let NewPath = StoragePath + File;
    if (fs.existsSync(NewPath)) {
        fs.unlink(NewPath, (err: any) => {
            if (err) {
                return res.status(req.app.get("ErrorStatus")).json({
                    status: false,
                    message: err
                });
            }
            return Callback();
        });
    } else {
        return Callback();
    }
};

export let DBDateFormatModule = (): string => {
    const dateObject = new Date();
    const date = dateObject.getDate() < 10 ? "0" + dateObject.getDate() : dateObject.getDate();
    const month = (dateObject.getMonth() + 1) < 10 ? "0" + (dateObject.getMonth() + 1) : (dateObject.getMonth() + 1);
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours() < 10 ? "0" + dateObject.getHours() : dateObject.getHours();
    const minutes = dateObject.getMinutes() < 10 ? "0" + dateObject.getMinutes() : dateObject.getMinutes();
    const seconds = dateObject.getSeconds() < 10 ? "0" + dateObject.getSeconds() : dateObject.getSeconds();
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};

export let ConvertDateTimeFormat = (date: string): string => {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD-MM-YYYY hh:mm:ssa');
};

export let RandomNumberModule = (Min: number, Max: number): number => {
    return Math.round(Math.random() * (Max - Min) + Min);
};

export let GenerateBadRequestResponse = (response: any, data: string): any => {
    return response.status(StatusCodes.BAD_REQUEST).json({
        status: false,
        message: data
    });
};

export let GenerateUnauthorizedResponse = (response: any, data: string): any => {
    return response.status(StatusCodes.UNAUTHORIZED).json({
        status: false,
        message: data
    });
};

export let GenerateBadGatewayResponse = (response: any, data: string): any => {
    return response.status(StatusCodes.BAD_GATEWAY).json({
        status: false,
        message: data
    });
};

export let GenerateForbiddenErrorResponse = (response: any, data: string): any => {
    return response.status(StatusCodes.FORBIDDEN).json({
        status: false,
        message: data
    });
};

export let GenerateErrorResponse = (response: any, data: any): any => {
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: data
    });
};

export let GenerateSuccessResponse = (response: any, data: any): any => {
    return response.status(StatusCodes.OK).json({
        status: true,
        message: data
    });
};

export let GenerateSuccessResponseWithData = (response: any, data: any): any => {
    return response.status(StatusCodes.OK).json({
        status: true,
        data: data
    });
};

export let CapitalizeFirstLetter = (sentence: string) => {
    if (!sentence) return sentence;
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export let CheckEmpty = (word: any) => {
    return !!word;
};

export let GetSupplierObject = (user: any) => {
    return {
        id: user.id,
        supplierName: user.name,
        status: user.status,
        createdAt: user.created_at ? DateFormat(user.created_at) : null,
        updatedAt: user.updated_at ? DateFormat(user.updated_at) : null,
    };
};

export let GetSupplierArr = (user: any) => {
    let users: any = [];
    user.map((user: any) => {
        let data = {
            id: user.id,
            supplierName: user.name,
            status: user.status,
            createdAt: user.created_at ? DateFormat(user.created_at) : null,
            updatedAt: user.updated_at ? DateFormat(user.updated_at) : null,
        };
        users.push(data);
    });
    return users;
};

export let GetUserObject = (user: any) => {
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        profilePicture: user.profile ? `${process.env.IMAGE_BASE_URL}profile_pics/${user.id}/${user.profile}` : '',
        picture: user.profile,
        nationality: user.nationality,
        address: user.address,
        passportId: user.passport_id,
        gender: user.gender,
        phoneNumber: user.phone_number,
        dateOfBirth: user.date_of_birth,
        role: CheckRole[user.role_id],
        loginType: user.login_type,
        accountStatus: user.account_status,
        travelers: user.travelers.length > 0 ? JSON.parse(user.travelers) : [],
        createdAt: user.created_at ? DateFormat(user.created_at) : null
    };
};

export let GetUserArr = (user: any) => {
    let users: any = [];
    user.map((user: any) => {
        let data = {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            profilePicture: user.profile ? `${process.env.IMAGE_BASE_URL}profile_pics/${user.id}/${user.profile}` : '',
            picture: user.profile,
            password: user.password,
            phoneNumber: user.phone_number,
            nationality: user.nationality,
            address: user.address,
            passportId: user.passport_id,
            gender: user.gender,
            dateOfBirth: user.date_of_birth,
            travelers: user.travelers.length > 0 ? JSON.parse(user.travelers) : [],
            roleId: CheckRole[user.role_id],
            loginType: user.login_type,
            accountStatus: user.account_status,
            createdAt: user.created_at ? DateFormat(user.created_at) : null,
            updatedAt: user.updated_at ? DateFormat(user.updated_at) : null,
            deletedAt: user.deleted_at ? DateFormat(user.deleted_at) : null,
        }
        users.push(data);
    });
    return users;
};

export let GetBookingArr = (booking: any) => {
    let bookings: any = [];
    booking.map((item: any) => {
        let data = {
            id: item.id,
            userId: item.user_id,
            title: item.title,
            email: item.email,
            totalRooms: item.total_rooms,
            roomDetails: item.room_details, // JSON
            totalGuest: item.total_guest,
            specialRequest: item.special_request,
            roomCharges: item.room_charges,
            extraDetail: JSON.parse(item.extra_details),
            totalDiscount: item.total_discount,
            priceAfterDiscount: item.price_after_discount,
            taxFees: item.tax_fees,
            payableAmount: item.payable_amount,
            currencySymbol: item.currency_symbol,
            checkIn: item.check_in,
            checkOut: item.check_out,
            refNo: item.ref_no,
            status: item.status,
            leadCustomer: item.lead_customer ? item.lead_customer : null, // JSON
            bookingDetails: item.booking_details ? item.booking_details : null,
            cancellationFee: item.cancellation_fee,
            cancellationDate: item.cancellation_date,
            createdAt: item.created_at ? DateFormat(item.created_at) : null,
            updatedAt: item.updated_at ? DateFormat(item.updated_at) : null,
            deletedAt: item.deleted_at ? DateFormat(item.deleted_at) : null,
        };
        bookings.push(data);
    });
    return bookings;
};

export let GetBookingObject = (item: any) => {
    return {
        id: item.id,
        refNo: item.ref_no,
        userId: item.user_id,
        title: item.title,
        totalRooms: item.total_rooms,
        roomDetails: item.room_details,
        totalGuest: item.total_guest,
        specialRequest: item.special_request,
        roomCharges: item.room_charges,
        totalDiscount: item.total_discount,
        priceAfterDiscount: item.price_after_discount,
        taxFees: item.tax_fees,
        payableAmount: item.payable_amount,
        currencySymbol: item.currency_symbol,
        checkIn: item.check_in,
        checkOut: item.check_out,
        status: item.status,
        leadCustomer: item.lead_customer ? item.lead_customer : null,
        bookingDetails: item.booking_details ? item.booking_details : null,
        extraDetails: item.extra_details ? JSON.parse(item.extra_details) : [],
        cancellationFee: item.cancellation_fee,
        cancellationDate: item.cancellation_date,
        createdAt: item.created_at ? DateFormat(item.created_at) : null,
        updatedAt: item.updated_at ? DateFormat(item.updated_at) : null,
        deletedAt: item.deleted_at ? DateFormat(item.deleted_at) : null,
    };
};

export let CheckLoginType = (loginTypes: any, loginType: any): any => {
    if (loginTypes.includes(loginType)) {
        return true;
    } else {
        return false;
    }
};

export let CheckRole: any = {
    1: 'Admin',
    2: 'Customer'
};

export let SettingObject = (item: any) => {
    return {
        id: item.id,
        cancellationDateMargin: item.cancellation_date_margin,
        exchangeRateFrequency: item.exchange_rate_frequency,
        adminCommission: item.admin_commission,
        iVectorFee: item.ivector_fee,
        stripeFee: item.stripe_fee,
        createdAt: item.created_at ? DateFormat(item.created_at) : null,
        updatedAt: item.updated_at ? DateFormat(item.updated_at) : null,
    };
};

export let currencyObject = (item: any) => {
    return {
        id: item.id,
        name: item.name,
        currencyData: item.currency_data ? JSON.parse(item.currency_data) : [],
        createdAt: item.created_at ? DateFormat(item.created_at) : null,
        updatedAt: item.updated_at ? DateFormat(item.updated_at) : null,
    };
};

export let RolesArr = (role: any) => {
    let data: any = [];
    role.map((item: any) => {
        let Data = {
            id: item.id,
            name: item.name,
            role: item.role,
            createdAt: item.created_at ? DateFormat(item.created_at) : null,
            updatedAt: item.updated_at ? DateFormat(item.updated_at) : null,
        };
        data.push(Data)
    });
    return data;
};

export let CurrencyData = () => {
    return [
        {
            currency_code: 'GBP',
            currency_rate_usd: '',
            currency_rate_eur: '',
            currency_rate_gbp: '',
            currency_flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
        },
        {
            currency_code: 'USD',
            currency_rate_usd: '',
            currency_rate_eur: '',
            currency_rate_gbp: '',
            currency_flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
        },
        {
            currency_code: 'EUR',
            currency_rate_usd: '',
            currency_rate_eur: '',
            currency_rate_gbp: '',
            currency_flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'
        },
        {
            currency_code: 'AUD',
            currency_rate_usd: '',
            currency_rate_eur: '',
            currency_rate_gbp: '',
            currency_flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg'
        },
        {
            currency_code: 'CAD',
            currency_rate_usd: '',
            currency_rate_eur: '',
            currency_rate_gbp: '',
            currency_flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada.svg'
        }
    ];
};

export let CurrencySymbols = () => {
    return [
        {
            currency_code: 'GBP',
            currency_symbol: '£',
        },
        {
            currency_code: 'USD',
            currency_symbol: '$',
        },
        {
            currency_code: 'EUR',
            currency_symbol: '€',
        },
        {
            currency_code: 'AUD',
            currency_symbol: 'A$',
        },
        {
            currency_code: 'CAD',
            currency_symbol: 'C$',
        }
    ];
};


// Date Format
export let DateFormat = (date: any) => {
    const dateObject = moment(date);
    const formattedDate = dateObject.format('DD-MM-YYYY hh:mm A');
    return formattedDate;
}
// Booking Reference Pattern
export let BookingReferencePattern = (supplierCode: any, incrementNo: any) => { //, refundStatus:any
    let date = DBDateFormatModule()
    const dateObject = moment(date);
    const formattedDate = dateObject.format('YYYYMMDD');
    let refundStatus = 'R';
    let incrementalNumber = 500 + incrementNo;
    return `${supplierCode}-${formattedDate}-${refundStatus}-${incrementalNumber}`;
}

// Basic Helper Functions - End
export default {
    DBDateFormatModule,
    ConvertDateTimeFormat,
    RandomNumberModule,
    GenerateBadRequestResponse,
    GenerateUnauthorizedResponse,
    GenerateBadGatewayResponse,
    GenerateForbiddenErrorResponse,
    GenerateErrorResponse,
    GenerateSuccessResponse,
    GenerateSuccessResponseWithData,
    CapitalizeFirstLetter,
    CheckEmpty,
    GetUserObject,
};
