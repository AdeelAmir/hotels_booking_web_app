import { MailerSend, Sender, Recipient, EmailParams } from "mailersend";
import { DateFormat, GenerateBadRequestResponse, GenerateErrorResponse } from "../modules/common.modules";
import { Response } from 'express';
import moment from "moment";
require('dotenv').config({ path: './.env' });

//************************* WellCome Email Function *************************/

export const wellcomeEmailVerify = async (user: any, res: Response) => {
    try {
        // Retrieve necessary variables from environment
        const apiKey = process.env.EMAIL_API_KEY;
        const SenderEmail = process.env.SENDER_EMAIL;
        const SenderName = process.env.SENDER_NAME;
        const templateId = process.env.EMAIL_TEMPLATE_ID;

        // Validate that all necessary environment variables are present
        if (!apiKey || !SenderEmail || !SenderName || !templateId) {
            return GenerateBadRequestResponse(res, "Missing sender email, API key, or template ID.");
        }

        const mailersend = new MailerSend({
            apiKey: apiKey,
        });

        // Ensure that the user has an email
        if (!user.email) {
            return GenerateBadRequestResponse(res, "User email is required to send the email.");
        }

        // Set up recipients and personalization data
        const recipients = [
            new Recipient(user.email, user.first_name + ' ' + user.last_name)
        ];

        const sentFrom = new Sender(SenderEmail, SenderName);

        let accountName = user.first_name + ' ' + user.last_name

        const personalization = [
            {
                email: user.email,
                data: {
                    account_name: accountName,
                    support_email: SenderEmail || '',
                },
            },
        ];

        // Create the email parameters
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject("Wellcome to Price Room🤗")
            .setTemplateId(templateId)
            .setPersonalization(personalization);
        const response = await mailersend.email.send(emailParams);

        if (response.statusCode === 202) {
            return response;
        }
    } catch (error: any) {
        if (error.statusCode === 422) {
            return GenerateErrorResponse(res, error.body.message);
        }
        return GenerateErrorResponse(res, error.message);
    }
};

//************** Reset Password Email Verification Function *****************/

export const sendEmailOtpVerify = async (user: any, otp: number, res: Response) => {
    try {
        const apiKey = process.env.EMAIL_API_KEY;
        const SenderEmail = process.env.SENDER_EMAIL;
        const SenderName = process.env.SENDER_NAME;
        const templateId = process.env.OTP_EMAIL_TEMPLATE_ID;

        if (!apiKey || !SenderEmail || !SenderName || !templateId) {
            return GenerateBadRequestResponse(res, "Invalid sender email , api key or a template id.");
        }

        const mailerSend = new MailerSend({
            apiKey: apiKey,
        });

        const sentFrom = new Sender(SenderEmail, SenderName);

        const recipients = [
            new Recipient(user.email, user.first_name + ' ' + user.last_name)
        ];

        const personalization = [
            {
                email: user.email,
                data: {
                    otp_code: otp
                },
            }
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("Verification Code for Price Room")
            .setTemplateId(templateId)
            .setPersonalization(personalization);

        let response = await mailerSend.email.send(emailParams);
        return response;
    } catch (error: any) {
        if (error.statusCode === 422) {
            return GenerateErrorResponse(res, error.body.message);
        }
        return GenerateErrorResponse(res, error.message);
    }
}

//****************** Booking Confirmation Email Function ********************/

export const bookingConfirmEmail = async (booking: any, res: Response) => {
    try {
        const apiKey = process.env.EMAIL_API_KEY;
        const SenderEmail = process.env.SENDER_EMAIL;
        const SenderName = process.env.SENDER_NAME;
        const templateId = process.env.BOOKING_CONFIRM_EMAIL_TEMPLATE_ID;

        // Check for API key, sender email, name, and template ID
        if (!apiKey || !SenderEmail || !SenderName || !templateId) {
            return GenerateBadRequestResponse(res, "Invalid sender email, API key, or template ID.");
        }

        const mailerSend = new MailerSend({ apiKey });
        const sentFrom = new Sender(SenderEmail, SenderName);

        let dataFormate = JSON.parse(booking.extra_details)

        // Check for room details
        let roomArr: any = [];
        if (dataFormate?.roomsDetail?.length > 0) {
            roomArr = dataFormate.roomsDetail.map((item: any) => ({
                name: item.title || '',
                price: booking.currency_symbol + item.price.toFixed(2) || 0
            }));
        }

        // Check for guest details
        let guestArr: any = [];
        if (dataFormate?.guestDeatils?.length > 0) {
            guestArr = dataFormate.guestDeatils.map((item: any) => ({
                name: (item.firstName || '') + " " + (item.lastName || '')
            }));
        }else{
            guestArr = dataFormate.mainGuest.map((item: any) => ({
                name: (item.firstName || '') + " " + (item.lastName || '')
            }));
        }

        // Check for hotel details
        let hotelDetails: any = dataFormate?.hotelDetails || {};
        if (!hotelDetails.title) hotelDetails.title = '';

                // Check for main guest details
        let mainGuest: any = dataFormate?.mainGuest || {};

        let detail = dataFormate || {};

        const personalization = [
            {
                email: mainGuest.email,
                data: {
                    RATE: booking.currency_symbol + booking.payable_amount || 0,
                    rooms: roomArr,
                    guests: guestArr,
                    Room_No: booking.room_details[0]?.RoomBookingToken || '',
                    date_to: moment(booking.check_out).format('DD-MM-YYYY') || '',
                    customer: {
                        first_name: mainGuest.name || 'Guest'
                    },
                    No_Adults: detail.totalGuest?.adults || 0,
                    dashboard: '',
                    date_from: moment(booking.check_in).format('DD-MM-YYYY') || '',
                    room_type: detail.roomsDetail[0]?.title || '',
                    Hotel_Name: hotelDetails.title,
                    No_infants: detail.totalGuest?.infants || 0,
                    No_of_kids: detail.totalGuest?.children || 0,
                    Board_basis: '',
                    Booking_Ref: booking.ref_no || '',
                    Hotel_image: hotelDetails.image || '',
                    No_Children: detail.totalGuest?.children || 0,
                    cancel_date: '',
                    No_of_adults: detail.totalGuest?.adults || 0,
                    No_of_nights: detail.noDays?.night || 0,
                    Check_in_date: moment(booking.check_in).format('DD-MM-YYYY') || '',
                    Check_in_time: '',
                    Hotel_Address: detail.hotelDetails?.address || '',
                    Hotel_address: detail.hotelDetails?.address || '',
                    Check_out_date: moment(booking.check_out).format('DD-MM-YYYY') || '',
                    Check_out_time: '',
                    Hotel_phone_no: detail.hotelOwner?.phone || '',
                    Cancellation_policy: detail.roomsDetail[0]?.refundableStatus,
                    Cancellation_cost: booking.currency_symbol + 0,
                },
            }
        ];

        const recipients = [
            new Recipient(mainGuest.email, mainGuest.name)
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("Congratulations🎉🎊 Your Booking Confirm")
            .setTemplateId(templateId)
            .setPersonalization(personalization);

        let response = await mailerSend.email.send(emailParams);

        if (response.statusCode === 202) {
            return response;
        }
    } catch (error: any) {
        if (error.statusCode === 422) {
            return GenerateErrorResponse(res, error.body.message);
        }
        return GenerateErrorResponse(res, error.message);
    }
}


//****************** Booking Cancellation Email Function ********************/

export const bookingCancelledEmail = async (booking: any, res: Response) => {
    try {
        const apiKey = process.env.EMAIL_API_KEY;
        const SenderEmail = process.env.SENDER_EMAIL;
        const SenderName = process.env.SENDER_NAME;
        const templateId = process.env.BOOKING_CANCELL_EMAIL_TEMPLATE_ID;


        if (!apiKey || !SenderEmail || !SenderName || !templateId) {
            return GenerateBadRequestResponse(res, "Invalid sender email, API key, or template ID.");
        }
        const mailerSend = new MailerSend({
            apiKey: apiKey,
        });

        const sentFrom = new Sender(SenderEmail, SenderName);
        let dataFormate = JSON.parse(booking.extra_details)
        let hotelDetails: any = dataFormate?.hotelDetails || {};
        let mainGuest: any = dataFormate?.mainGuest || {};
        let detail = dataFormate || {};
        const currentDate = moment();
        const formattedDate = DateFormat(currentDate);
        const personalization = [
            {
                email: mainGuest.email,
                data: {
                    refund: '',
                    date_to: moment(booking.check_out).format('DD-MM-YYYY') || '',
                    customer: {
                        first_name: booking.room_details[0]?.GuestDetails[0]?.FirstName || '',
                    },
                    No_Adults: detail.totalGuest?.adults || 0,
                    date_from: moment(booking.check_in).format('DD-MM-YYYY')|| '',
                    room_type: detail.roomsDetail[0]?.title || '',
                    Hotel_name: hotelDetails.title,
                    No_infants: detail.totalGuest?.infants || 0,
                    Board_basis: '',
                    Hotel_image: hotelDetails.image || '',
                    No_Children: detail.totalGuest?.children || 0,
                    booking_ref: booking.ref_no || '',
                    cancel_date: formattedDate,
                    Hotel_address: detail.hotelDetails?.address || '',
                },
            }
        ];

        const recipients = [
            new Recipient(mainGuest.email, mainGuest.name)
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("Cancelled Booking!")
            .setTemplateId(templateId)
            .setPersonalization(personalization);

        let response = await mailerSend.email.send(emailParams);
        return response;
    } catch (error: any) {
        if (error.statusCode === 422) {
            return GenerateErrorResponse(res, error.body.message);
        }
        return GenerateErrorResponse(res, error.message);
    }
}
