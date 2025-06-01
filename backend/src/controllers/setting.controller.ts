import { Request, Response } from 'express';
import {
    BookingReferencePattern,
    CheckEmpty,
    CurrencyData,
    currencyObject,
    DBDateFormatModule,
    GenerateBadRequestResponse,
    GenerateErrorResponse, GenerateForbiddenErrorResponse, GetBookingArr,
    GetBookingObject,
    RolesArr,
    SettingObject
} from "../modules/common.modules";
import { StatusCodes } from 'http-status-codes';
import { CheckRequiredValidation } from "../modules/validator.modules";
import '../database/connection'

// Models
require('dotenv').config({ path: './.env' });
const connectToCosmosDB = require('../database/connection');
const axios = require('axios');
import { Setting, PRHotels, IVHotelUnified, Bookings, Role, container } from '../database/tableConnection';

export const UpdateSettingTable = async (req: Request, res: Response): Promise<any> => {
    const cancellationDateMargin = req.body.cancellation_date_margin ? parseInt(req.body.cancellation_date_margin) : req.body.cancellation_date_margin;
    const exchangeRateFrequency = req.body.exchange_rate_frequency ? parseInt(req.body.exchange_rate_frequency) : req.body.exchange_rate_frequency;
    const stripeFee = req.body.stripe_fee;
    const iVectorFee = req.body.ivector_fee;
    const adminCommission = req.body.admin_markup;
    const userData = req.body.user;
    const settingName = process.env.SETTING_COMISSION_NAME;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Cancellation date margin', value: cancellationDateMargin, type: 'Empty' },
            { field: 'Exchange rate frequency', value: exchangeRateFrequency, type: 'Empty' },
            { field: 'Admin commission', value: adminCommission, type: 'Empty' },
            { field: 'Ivector fee', value: iVectorFee, type: 'Empty' },
            { field: 'Stripe fee', value: stripeFee, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
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

            let sql = 'SELECT * FROM c WHERE c.name = @name';
            let parameter = [{ name: '@name', value: settingName }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await Setting.items.query(querySpec).fetchAll();

            let data = {
                name: settingName,
                cancellation_date_margin :cancellationDateMargin,
                exchange_rate_frequency :exchangeRateFrequency,
                stripe_fee :parseFloat(stripeFee),
                ivector_fee :parseFloat(iVectorFee),
                admin_commission :parseFloat(adminCommission),
                created_at :DBDateFormatModule(),
            };

            if (results.length > 0) {
                const existingSetting = results[0];
                existingSetting.cancellation_date_margin = cancellationDateMargin;
                existingSetting.exchange_rate_frequency = exchangeRateFrequency;
                existingSetting.stripe_fee = parseFloat(stripeFee);
                existingSetting.ivector_fee = parseFloat(iVectorFee);
                existingSetting.admin_commission = parseFloat(adminCommission);
                existingSetting.created_at = DBDateFormatModule();
                existingSetting.updated_at = null;
                const { resource: updated } = await Setting.item(existingSetting.id).replace(existingSetting);
                Response(updated);
            } else {
                const { resource: results } = await Setting.items.create(data);
                Response(results);
            }

        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Settings updated successfully',
            data: SettingObject(Data),
        });
    };
    // Start
    ValidationStep1();
}

export const GetSettingTable = async (req: Request, res: Response): Promise<any> => {
    const userData = req.body.user;
    const settingName = process.env.SETTING_COMISSION_NAME;

    let FetchData = async (): Promise<any> => {
        try {
            // check permission
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Unauthorized user');
            } else if (user.role_id != 1) {
                return GenerateForbiddenErrorResponse(res, 'Permission denied');
            }

            let sql = 'SELECT * FROM c WHERE c.name = @name';
            let parameter = [{ name: '@name', value: settingName }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await Setting.items.query(querySpec).fetchAll();
            Response(results[0]);
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Admin Commision Data',
            data: SettingObject(Data),
        });
    };
    // Start
    FetchData();
}

export const UpdateRolesTable = async (req: Request, res: Response): Promise<any> => {
    const role = req.body.role;
    const name = req.body.name;
    // const { Role } = await connectToCosmosDB();

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Role', value: role, type: 'Empty' },
            { field: 'Name', value: name, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async (): Promise<any> => {
        try {
            const { resources: Roles } = await Role.items.readAll().fetchAll();
            Response(Roles);
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Roles updated successfully',
            data: RolesArr(Data),
        });
    };
    // Start
    ValidationStep1();
}

export const updateCurrencies = async (req: Request, res: Response): Promise<any> => {
    // const { Setting } = await connectToCosmosDB();
    const amount = 1;
    const apiKey = process.env.FIXER_API_KEY;
    const baseCurrency = ['USD', 'GBP', 'EUR'];
    const settingName = process.env.SETTING_CURRENCY_NAME;

    let ApiFixer = async (): Promise<any> => {
        try {
            let currencyData = CurrencyData();
            const currencyPromises = baseCurrency.flatMap((currency: any) =>
                currencyData.map(async (item: any) => {
                    const url = `https://api.apilayer.com/fixer/convert?to=${item.currency_code}&from=${currency}&amount=${amount}`;
                    try {
                        const response = await axios.get(url, {
                            headers: { 'apikey': apiKey },
                        });

                        // Set the correct rate field based on base currency
                        item[`currency_rate_${currency.toLowerCase()}`] = response.data.result;
                    } catch (apiError) {
                        console.error(`Error fetching rate for ${item.currency_code} from ${currency}:`, apiError);
                        item[`currency_rate_${currency.toLowerCase()}`] = null;
                    }
                })
            );

            await Promise.all(currencyPromises);
            await FetchData(currencyData);

        } catch (error: any) {
            console.error("Error in ApiFixer:", error);
            return GenerateErrorResponse(res, error.message);
        }
    };

    let FetchData = async (currencyData: any[]): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.name = @name';
            let parameter = [{ name: '@name', value: settingName }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await Setting.items.query(querySpec).fetchAll();

            let data = {
                name: settingName,
                currency_data: JSON.stringify(currencyData),
                created_at: DBDateFormatModule(),
                updated_at: ''
            };

            if (results.length > 0) {
                const existingSetting = results[0];
                existingSetting.currency_data = JSON.stringify(currencyData),
                    existingSetting.updated_at = DBDateFormatModule()

                const { resource: updated } = await Setting.item(existingSetting.id).replace(existingSetting);
                Response(updated);
            } else {
                const { resource: results } = await Setting.items.create(data);
                Response(results);
            }

        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };


    let Response = (Data: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Currency data processed successfully',
            data: currencyObject(Data),
        });
    };

    // Start
    ApiFixer();
};