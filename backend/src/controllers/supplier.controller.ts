import { Request, Response } from 'express';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import {
    CheckEmpty,
    DBDateFormatModule,
    GenerateBadRequestResponse,
    GenerateSuccessResponse,
    GenerateErrorResponse, GenerateUnauthorizedResponse, GetUserArr, GetUserObject,
    GetSupplierObject,
    GetSupplierArr,
    GenerateForbiddenErrorResponse,
} from "../modules/common.modules";
import { StatusCodes } from 'http-status-codes';
import { CheckRequiredValidation } from "../modules/validator.modules";
import '../database/connection'

// Models
// import User from '../database/models/User'
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const moment = require("moment");
const bcrypt_salt_rounds = 10;
require('dotenv').config({ path: './.env' });
const connectToCosmosDB = require('../database/connection');
import { container, Supplier } from '../database/tableConnection';


export const CreateSupplier = async (req: Request, res: Response): Promise<any> => {
    // const { Supplier, container } = await connectToCosmosDB();
    let supplierName = req.body.name;
    let status = req.body.status ? parseInt(req.body.status) : req.body.status;
    let userData = req.body.user;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Supplier name', value: supplierName, type: 'Empty' },
            { field: 'Status', value: status, type: 'Empty' },

        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        if (isNaN(status)) {
            return GenerateBadRequestResponse(res, "Value is not a number");
        }
        if (status != 0 && status != 1) {
            return GenerateBadRequestResponse(res, "Invalid number chose (0/1)");
        }
        // check permission
        const { resource: user } = await container.item(userData.user_id).read();
        if (!user) {
            return GenerateBadRequestResponse(res, 'Unauthorized user');
        } else if (user.role_id == 1) {
            StoreData();
        } else {
            return GenerateForbiddenErrorResponse(res, 'Permission denied');
        }
    };

    let StoreData = async (): Promise<any> => {
        try {
            let data: any = {
                name: supplierName,
                status: status,
                created_at: DBDateFormatModule(),
                updated_at: null,
            };
            const newUser: any = await Supplier.items.create(data);
            const { resources: suppliers } = await Supplier.items.readAll().fetchAll();
            Response(suppliers);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (supplier: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Supplier created successfully',
            data: GetSupplierArr(supplier)
        });
    };

    /* Start */
    ValidationStep1();
};

export const SwitchSupplier = async (req: Request, res: Response): Promise<any> => {
    // const { Supplier,container } = await connectToCosmosDB();
    let supplierId = req.body.supplier_id;
    let updateStatus = req.body.status ? parseInt(req.body.status): req.body.status;
    let userData = req.body.user;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Supplier Id', value: supplierId, type: 'Empty' },
            { field: 'Status', value: updateStatus, type: 'Empty' },

        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        if (isNaN(updateStatus)) {
            return GenerateBadRequestResponse(res, "Value is not a number");
        }
        if (updateStatus != 0 && updateStatus != 1) {
            return GenerateBadRequestResponse(res, "Invalid number chose (0/1)");
        }
        // check permission
        const { resource: user } = await container.item(userData.user_id).read();
        if (!user) {
            return GenerateBadRequestResponse(res, 'Unauthorized user');
        } else if (user.role_id == 1) {
            ValidationStep2();
        } else {
            return GenerateForbiddenErrorResponse(res, 'Permission denied');
        }
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const querySpec = {
                query: "SELECT * FROM c WHERE c.id = @id",
                parameters: [
                    { name: "@id", value: supplierId }
                ]
            };
            const { resources: supplier } = await Supplier.items.query(querySpec).fetchAll();
            if (!supplier || supplier.length === 0) {
                return GenerateBadRequestResponse(res, 'Invalid supplier id');
            } else {
                StoreData(supplier[0]);
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let StoreData = async (supplier: any): Promise<any> => {
        try {
            supplier.status = parseInt(updateStatus);
            supplier.updated_at = DBDateFormatModule();
            const { resource: updatedSupplier } = await Supplier.item(supplierId).replace(supplier);
            const { resources: suppliers } = await Supplier.items.readAll().fetchAll();
            Response(suppliers)
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (supplier: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: updateStatus != 0 ? 'Supplier enabled successfully' : 'Supplier disabled successfully',
            data: GetSupplierArr(supplier)
        });
    };

    /* Start */
    ValidationStep1();
};

export const GetAllSuppliers = async (req: Request, res: Response): Promise<any> => {
    // const { Supplier } = await connectToCosmosDB();

    let FetchData = async (): Promise<any> => {
        try {
            const { resources: users } = await Supplier.items.readAll().fetchAll();
            Response(users)
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (users: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'All suppliers',
            data: GetSupplierArr(users)
        });
    };
    // Start
    FetchData();
}
