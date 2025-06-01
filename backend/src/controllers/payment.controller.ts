import { Request, Response } from 'express';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import {
    CheckEmpty,
    DBDateFormatModule,
    GenerateBadRequestResponse,
    GenerateSuccessResponse,
    GenerateErrorResponse, GenerateUnauthorizedResponse, GetUserArr, GetUserObject,
    GenerateForbiddenErrorResponse,
} from "../modules/common.modules";
import { StatusCodes } from 'http-status-codes';
import { CheckRequiredValidation } from "../modules/validator.modules";
import '../database/connection'

require('dotenv').config({ path: './.env' });
const connectToCosmosDB = require('../database/connection');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req: Request, res: Response): Promise<any> => {
    const amount = req.body.amount;
    const currency = req.body.currency;
    const name = req.body.name;
    const email = req.body.email;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Amount', value: amount, type: 'Empty' },
            { field: 'Currency', value: currency, type: 'Empty' },
            { field: 'Name', value: name, type: 'Empty' },
            { field: 'Email', value: email, type: 'Empty' },

        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        mainProcess();
    };

    let mainProcess = async (): Promise<any> => {
        try {
            // // Check if customer exists
            const customers = await stripe.customers.list();
            let customer = customers.data.find((item:any)=> item.email == email);
            if (!customer) {
                customer = await stripe.customers.create({ name: name, email: email });
            }
            const amountInCents = Math.round(amount * 100);
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amountInCents,
                currency: currency,
                customer: customer.id,
            });
            Response(paymentIntent)
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    };

    let Response = (paymentIntent: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Payment intent created successfully',
            clientSecret: paymentIntent.client_secret,
        });
    };

    /* Start */
    ValidationStep1();
};