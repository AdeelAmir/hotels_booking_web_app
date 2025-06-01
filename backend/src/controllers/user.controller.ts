import { Request, Response } from 'express';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import {
    CheckEmpty,
    DBDateFormatModule,
    GenerateBadRequestResponse,
    GenerateSuccessResponse,
    GenerateErrorResponse, GenerateUnauthorizedResponse, GetUserArr, GetUserObject,
    CheckLoginType,
    GenerateForbiddenErrorResponse,
    FilesUpload,
    DeleteFile,
} from "../modules/common.modules";
import { StatusCodes } from 'http-status-codes';
import { CheckRequiredValidation } from "../modules/validator.modules";
import '../database/connection'
import { sendEmailOtpVerify, wellcomeEmailVerify } from './email.controller';

// Models
// import User from '../database/models/User'
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const moment = require("moment");
const bcrypt_salt_rounds = 10;
require('dotenv').config({ path: './.env' });
const connectToCosmosDB = require('../database/connection');
import { Bookings, container } from '../database/tableConnection';


export const signUp = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirm_password;
    const nationality = req.body.nationality;
    const address = req.body.address;
    const dateOfBirth = req.body.date_of_birth;
    const phoneNumber = req.body.phone_number;
    const gender = req.body.gender;
    const passportId = req.body.passport_id;
    const loginType = req.body.login_type;
    const loginTypesArr = ['email', 'phone', 'google', 'facebook'];

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'First name', value: firstName, type: 'Empty' },
            { field: 'Last name', value: lastName, type: 'Empty' },
            { field: 'Email', value: email, type: 'Empty' },
            { field: 'Password', value: password, type: 'Empty' },
            { field: 'Password', value: password, type: 'Length' },
            { field: 'Confirm password', value: confirmPassword, type: 'Empty' },
            { field: 'Confirm password', value: confirmPassword, type: 'Length' },
            { field: 'Password & Confirm password ', value: password, type: 'Confirm Password' },
            { field: 'Nationality', value: nationality, type: 'Empty' },
            { field: 'Passport id', value: passportId, type: 'Empty' },
            { field: 'Phone number', value: phoneNumber, type: 'Empty' },
            { field: 'Address', value: address, type: 'Empty' },
            { field: 'Date of birth', value: dateOfBirth, type: 'Empty' },
            { field: 'Gender', value: gender, type: 'Empty' },
            { field: 'Login type', value: loginType, type: 'Empty' },

        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        if (!CheckLoginType(loginTypesArr, loginType)) {
            return GenerateBadRequestResponse(res, 'Invalid login type');
        }
        /* Check for unique email */
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            // const user = results[0];
            const user = results.find((item: any) => item.deleted_at == null);
            if (!user) {
                StoreData();
            } else {
                return GenerateBadRequestResponse(res, 'Email address already exists');
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let StoreData = async (): Promise<any> => {
        try {
            const hashPassword = await bcrypt.hash(password, bcrypt_salt_rounds);
            let data: any = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: hashPassword,
                otp_code: null,
                otp_expiry_date_time: null,
                otp_verified_at: null,
                nationality: nationality,
                passport_id: passportId,
                address: address,
                gender: gender,
                phone_number: phoneNumber,
                date_of_birth: dateOfBirth,
                role_id: 2,
                login_type: loginType,
                travelers: [],
                account_status: "active",
                created_at: DBDateFormatModule(),
                updated_at: null,
                deleted_at: null
            };
            const newUser: any = await container.items.create(data);
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            let response = await wellcomeEmailVerify(user, res);
            if (response) {
                Response(user);
            } else {
                Response(user);
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        let AccessToken = jwt.sign(
            {
                user_id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "24h",
            }
        );
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'success',
            accessToken: AccessToken,
            tokenType: 'Bearer',
            data: GetUserObject(user),
        });
    };

    /* Start */
    ValidationStep1();
};

export const signIn = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const password = req.body.password;
    const email = req.body.email;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Password', value: password, type: 'Empty' },
            { field: 'Email', value: email, type: 'Empty' }]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        MainProcess();
    };

    let MainProcess = async (): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            // Filter out documents where deleted_at is not null
            const user = results.find((result: any) => !result.deleted_at);
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid email address');
            } else {
                bcrypt.compare(password, user.password).then(async (res: any) => {
                    if (!res) {
                        return GenerateUnauthorizedResponse(res, 'Incorrect password');
                    } else {
                        user.last_logged_in = DBDateFormatModule();
                        user.updated_at = DBDateFormatModule()
                        const { resource: updatedUser } = await container.item(user.id, user.id).replace(user);
                        CheckAccountStatus(updatedUser);
                    }
                }).catch((err: any) => {
                    return GenerateUnauthorizedResponse(res, 'Incorrect password');
                });
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let CheckAccountStatus = async (userData: any): Promise<any> => {
        // Check Account Activation
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email AND c.account_status = "active"';
            let parameter = [{ name: '@email', value: email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            if (user) {
                Response(userData);
            } else {
                return GenerateBadRequestResponse(res, 'Oops, Your account is deactivated');
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        let AccessToken = jwt.sign(
            {
                user_id: user.id,
                email: user.email,
                role_id: user.role_id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "365d",
            }
        );
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'success',
            accessToken: AccessToken,
            tokenType: 'Bearer',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const changePassword = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const currentPassword = req.body.current_password;
    const newPassword = req.body.new_password;
    const confirmPassword: any = req.body.confirm_password;
    // let passwordType: any = req.body.type;
    // passwordType = passwordType.toLowerCase();
    const userData = req.body.user;


    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Current Password', value: currentPassword, type: 'Empty' },
            { field: 'Password', value: newPassword, type: 'Empty' },
            { field: 'Password', value: newPassword, type: 'Length' },
            { field: 'Confirm password', value: confirmPassword, type: 'Empty' },
            { field: 'Confirm password', value: confirmPassword, type: 'Length' },
            { field: 'Password & confirm password ', value: confirmPassword, type: 'Confirm Password' },
            // { field: 'Type', value: passwordType, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            } else {
                bcrypt.compare(currentPassword, user.password).then((res: any) => {
                    if (!res) {
                        return GenerateUnauthorizedResponse(res, 'Incorrect current password');
                    } else {
                        MainProcess(user);
                    }
                }).catch((err: any) => {
                    return GenerateUnauthorizedResponse(res, 'Incorrect current password');
                });
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let MainProcess = async (user: any): Promise<any> => {
        const hashPassword = await bcrypt.hash(newPassword, bcrypt_salt_rounds);
        try {
            user.password = hashPassword;
            user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.item(userData.user_id).replace(user);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Password updated successfully',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const getAllUser = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const userData = req.body.user;

    let FetchData = async (): Promise<any> => {
        try {
            // check permission
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Unauthorized user');
            } else if (user.role_id != 1) {
                return GenerateForbiddenErrorResponse(res, 'Permission denied');
            }
            const { resources: users } = await container.items.readAll().fetchAll();
            Response(users)
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (users: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'All users',
            data: GetUserArr(users)
        });
    };
    // Start
    FetchData();
}

export const getUserDetail = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const userId = req.query.user_id;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'User id', value: userId, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        FetchData();
    };

    let FetchData = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userId, userId).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user id');
            } else {
                Response(user)
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (users: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'User detail',
            data: GetUserObject(users)
        });
    };
    // Start
    ValidationStep1();
}

export const DeactivateAccount = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const userData = req.body.user;

    let DeactivateAccount = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id).read();
            user.account_status = "deactivate";
            const { resource: deActiveUser } = await container.item(userData.user_id).replace(user);
            Response();
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Your account is deactivated successfully!',
        });
    };
    DeactivateAccount();
}

export const DeleteAccount = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const userData = req.body.user;

    let DeleteAccount = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            user.deleted_at = DBDateFormatModule();
            const { resource: deleteUser } = await container.item(userData.user_id).replace(user);
            Response();
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Your account is deleted successfully!',
        });
    };
    DeleteAccount();
}

export const ForgetPassword = async (req: Request, res: Response): Promise<any> => {

    const userEmail = req.body.email;
    const otp = Math.floor(1000 + Math.random() * 9000);

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Email', value: userEmail, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: userEmail }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid email address.');
            } else {
                if (user.deleted_at === null) {
                    SendMail(user);
                } else {
                    return GenerateBadRequestResponse(res, 'Invalid email address.');
                }
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };


    const SendMail = async (user: any): Promise<any> => {
        try {
            let response = await sendEmailOtpVerify(user, otp, res);
            if (response) {
                StoreData(user);
            }
        } catch (error: any) {
            if (error.statusCode === 422) {
                return GenerateErrorResponse(res, error.body.message);
            }
            return GenerateErrorResponse(res, error.message);
        }
    };

    const StoreData = async (user: any): Promise<any> => {
        let currentDate = new Date();
        let OtpExpiryDateTime = new Date(currentDate.getTime() + (2 * 60000));
        OtpExpiryDateTime = moment(OtpExpiryDateTime).format('YYYY-MM-DD HH:mm:ss');
        try {
            user.otp_code = otp;
            user.otp_expiry_date_time = OtpExpiryDateTime;
            user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.items.upsert(user);
            Response();
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };


    let Response = (): any => {
        return GenerateSuccessResponse(res, 'Verification code sent to your email address, please verify it');
    };

    // Start
    ValidationStep1();
};

export const VerifyOTPCode = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const Email = req.body.email;
    const OTPCode = req.body.otp_code;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Email', value: Email, type: 'Empty' },
            { field: 'OTP code', value: OTPCode, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: Email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid email address.');
            } else {
                if (user.deleted_at === null) {
                    verifyOTPCode(user);
                } else {
                    return GenerateBadRequestResponse(res, 'Invalid email address.');
                }
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let verifyOTPCode = (user: any): any => {
        let currentDate = new Date();
        currentDate = moment(currentDate).format('YYYY-MM-DD HH:mm:ss');
        if (OTPCode != user.otp_code) {
            return GenerateErrorResponse(res, 'Invalid OTP code');
        }
        if (user.otp_expiry_date_time < currentDate) {
            return GenerateErrorResponse(res, 'Expired OTP code');
        }
        UpdateData(user);
    };

    let UpdateData = async (user: any): Promise<any> => {
        try {
            user.otp_verified_at = DBDateFormatModule();
            user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.items.upsert(user);
            Response();
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (): any => {
        let responseData: any = {
            status: true,
            message: 'OTP verified successfully',
        };
        return res.status(StatusCodes.OK).json(responseData);
    };

    // Start
    ValidationStep1();
};

export const UpdatePassword = async (req: Request, res: Response): Promise<any> => {
    // const { container } = await connectToCosmosDB();
    const Email = req.body.email;
    const password = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Email', value: Email, type: 'Empty' },
            { field: 'Password', value: password, type: 'Empty' },
            { field: 'Password', value: password, type: 'Length' },
            { field: 'Confirm password', value: confirmPassword, type: 'Empty' },
            { field: 'Confirm password', value: confirmPassword, type: 'Length' },
            { field: 'Password & Confirm password ', value: password, type: 'Confirm Password' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: Email }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid email address.');
            } else {
                if (user.deleted_at === null) {
                    if (user.otp_verified_at === null) {
                        return GenerateBadRequestResponse(res, 'Verify OTP code');
                    }
                    UpdateData(user);
                } else {
                    return GenerateBadRequestResponse(res, 'Invalid email address.');
                }
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let UpdateData = async (user: any): Promise<any> => {
        try {
            const hashPassword = await bcrypt.hash(password, bcrypt_salt_rounds);
            user.otp_code = null;
            user.otp_expiry_date_time = null;
            user.otp_verified_at = null;
            user.password = hashPassword;
            user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.items.upsert(user);
            Response();
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (): any => {
        let responseData: any = {
            status: true,
            message: 'Password updated successfully',
        };
        return res.status(StatusCodes.OK).json(responseData);
    };

    // Start
    ValidationStep1();
};

export const UpdateEmail = async (req: Request, res: Response): Promise<any> => {

    const newEmail = req.body.email;
    const userData = req.body.user;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Email', value: newEmail, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            let sql = 'SELECT * FROM c WHERE c.email = @email';
            let parameter = [{ name: '@email', value: newEmail }];
            const querySpec = { query: sql, parameters: parameter };
            const { resources: results } = await container.items.query(querySpec).fetchAll();
            const user = results[0];
            if (!user) {
                try {
                    const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
                    if (!user) {
                        return GenerateBadRequestResponse(res, 'Invalid user');
                    } else {
                        StoreData(user);
                    }
                } catch (err: any) {
                    return GenerateErrorResponse(res, err.message);
                }
            } else if (user.email == newEmail && user.id == userData.user_id) {
                return Response(user);
            } else {
                return GenerateBadRequestResponse(res, 'Email address already exists');
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let StoreData = async (user: any): Promise<any> => {
        try {
            user.email = newEmail;
            user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.item(userData.user_id).replace(user);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'Email updated successfully',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const UpdateName = async (req: Request, res: Response): Promise<any> => {

    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const userData = req.body.user;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'First name', value: firstName, type: 'Empty' },
            { field: 'Last name', value: lastName, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            } else {
                StoreData(user);
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let StoreData = async (user: any): Promise<any> => {
        try {
            user.first_name = firstName,
                user.last_name = lastName,
                user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.item(userData.user_id).replace(user);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'User name updated successfully',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const UpdateProfile = async (req: Request, res: Response): Promise<any> => {
    
    const ProfilePicture: any = req.body.profile_picture ? req.body.profile_picture : null;
    const userData = req.body.user;
    let Profile: any = '';
    let userDetail: any = {}

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Profile picture', value: ProfilePicture, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }

        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            }
            userDetail = user
            unlinkProfile();
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let unlinkProfile = async (): Promise<any> => {
        if (!userDetail.profile) {
            upload()
        } else {
            let Path = `profile_pics/${userData.user_id}/`;
            await DeleteFile(req, res, userDetail.profile, Path, () => {
            });
        }
        upload()
    };

    let upload = async (): Promise<any> => {
        try {
            let FilesArray: any = [];
            let UploadType = Array.isArray(req.body.profile_picture) ? 'multiple' : 'single';
            if (UploadType == 'single') {
                FilesArray.push(req.body.profile_picture);
            } else {
                FilesArray = req.body.profile_picture;
            }
            let Path = `profile_pics/${userData.user_id}/`;
            FilesUpload(req, res, FilesArray, Path, (Files: any) => {
                Profile = Files[0] ? Files[0] : '';
                StoreData();
            });
        } catch (err: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                message: err.message,
            });
        }
    };

    let StoreData = async (): Promise<any> => {
        try {
            userDetail.profile = Profile,
                userDetail.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.item(userData.user_id).replace(userDetail);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'User name updated successfully',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const UpdateBasicInformation = async (req: Request, res: Response): Promise<any> => {
    
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const nationality = req.body.nationality;
    const address = req.body.address;
    const dateOfBirth = req.body.date_of_birth;
    const phoneNumber = req.body.phone_number;
    const ProfilePicture: any = req.body.profile_picture ? req.body.profile_picture : null;
    const gender = req.body.gender;
    const userData = req.body.user;
    let userDetail: any = {};
    let Profile: any = "";

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'First name', value: firstName, type: 'Empty' },
            { field: 'Last name', value: lastName, type: 'Empty' },
            { field: 'Nationality', value: nationality, type: 'Empty' },
            { field: 'Phone number', value: phoneNumber, type: 'Empty' },
            { field: 'Address', value: address, type: 'Empty' },
            { field: 'Date of birth', value: dateOfBirth, type: 'Empty' },
            { field: 'Gender', value: gender, type: 'Empty' },
            { field: 'Profile picture', value: ProfilePicture, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2()
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            } else {
                userDetail = user;
                userDetail.profile == ProfilePicture ? StoreData () :  unlinkProfile();
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let unlinkProfile = async (): Promise<any> => {
        if (!userDetail.profile) {
            upload()
        } else {
            let Path = `profile_pics/${userData.user_id}/`;
            await DeleteFile(req, res, userDetail.profile, Path, () => {
            });
        }
        upload()
    };

    let upload = async (): Promise<any> => {
        try {
            let FilesArray: any = [];
            let UploadType = Array.isArray(req.body.profile_picture) ? 'multiple' : 'single';
            if (UploadType == 'single') {
                FilesArray.push(req.body.profile_picture);
            } else {
                FilesArray = req.body.profile_picture;
            }
            let Path = `profile_pics/${userData.user_id}/`;
            FilesUpload(req, res, FilesArray, Path, (Files: any) => {
                Profile = Files[0] ? Files[0] : '';
                StoreData();
            });
        } catch (err: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                message: err.message,
            });
        }
    };

    let StoreData = async (): Promise<any> => {
        try {
            userDetail.first_name = firstName,
                userDetail.profile = Profile ? Profile : ProfilePicture,
                userDetail.last_name = lastName,
                userDetail.nationality = nationality,
                userDetail.address = address,
                userDetail.gender = gender,
                userDetail.phone_number = phoneNumber,
                userDetail.date_of_birth = dateOfBirth,
                userDetail.updated_at = null
            const { resource: updatedUser } = await container.item(userData.user_id).replace(userDetail);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'User basic information updated successfully.',
            data: GetUserObject(user),
        });
    };

    /* Start */
    ValidationStep1();
};

export const UpdateTravelers = async (req: Request, res: Response): Promise<any> => {
    
    const travelers = req.body.travelers;
    const userData = req.body.user;

    let ValidationStep1 = async (): Promise<any> => {
        let data: any = await CheckRequiredValidation([
            { field: 'Travelers', value: travelers, type: 'Empty' },
        ]);
        if (!data.status) {
            return GenerateBadRequestResponse(res, data.message);
        }
        ValidationStep2();
    };

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            } else {
                StoreData(user);
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let StoreData = async (user: any): Promise<any> => {
        try {
            user.travelers = travelers,
                user.updated_at = DBDateFormatModule();
            const { resource: updatedUser } = await container.item(userData.user_id).replace(user);
            Response(updatedUser);
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let Response = (user: any): any => {
        return res.status(StatusCodes.OK).json({
            status: true,
            message: 'User travelers updated successfully',
            data: GetUserObject(user)
        });
    };

    /* Start */
    ValidationStep1();
};

export const StaticDashboard = async (req: Request, res: Response): Promise<any> => {
    
    const userData = req.body.user;
    let userDetail: any = null;
    let totalUser: any = null;
    let totalOrder: any = null;
    let userCompletedOrders: any = null;
    let completedOrders: any = null;
    let pendingOrders: any = null;
    let upcomingOrders: any = null;
    let cancelledOrders: any = null;
    let totalIncome: any = 0;
    let userTotalIncome: any = 0;

    let ValidationStep2 = async (): Promise<any> => {
        try {
            const { resource: user } = await container.item(userData.user_id, userData.user_id).read();
            if (!user) {
                return GenerateBadRequestResponse(res, 'Invalid user');
            } else {
                userDetail = user
                GetAllUser();
            }
        } catch (err: any) {
            return GenerateErrorResponse(res, err.message);
        }
    };

    let GetAllUser = async (): Promise<any> => {
        try {
            const { resources: users } = await container.items.readAll().fetchAll();
            totalUser = users;
            GetAllBookings();
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let GetAllBookings = async (): Promise<any> => {
        try {
            const { resources: bookings } = await Bookings.items.readAll().fetchAll();
            completedOrders = bookings.filter((item: any) => item.status == 'completed');
            totalIncome = bookings.reduce((accumulator: any, item: any) => accumulator + item.room_charges, 0);
            totalOrder = bookings
            GetCompletedOrders();
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let GetCompletedOrders = async (): Promise<any> => {
        try {
            let query = "SELECT * FROM c WHERE c.user_id = @user_id";
            let parameters = [{ name: "@user_id", value: userData.user_id }];
            const querySpec = { query, parameters };
            const { resources: userBookings } = await Bookings.items.query(querySpec).fetchAll();
            pendingOrders = userBookings.filter((item: any) => item.status == 'pending');
            userCompletedOrders = userBookings.filter((item: any) => item.status == 'completed');
            userTotalIncome = userBookings.reduce((accumulator: any, item: any) => accumulator + item.room_charges, 0);
            upcomingOrders = userBookings.filter((item: any) => item.status == 'upcoming');
            cancelledOrders = userBookings.filter((item: any) => item.status == 'cancelled');
            Response();
        } catch (error: any) {
            return GenerateErrorResponse(res, error.message);
        }
    };

    let Response = (): any => {
        if (userDetail.role_id == 1) {
            return res.status(StatusCodes.OK).json({
                status: true,
                message: 'Admin Dashboard details.',
                data: {
                    totalUser: totalUser.length > 0 ? totalUser.length : 0,
                    totalOrder: totalOrder.length > 0 ? totalOrder.length : 0,
                    completedOrders: completedOrders.length > 0 ? completedOrders.length : 0,
                    totalIncome: totalIncome,
                },
            });
        } else {
            return res.status(StatusCodes.OK).json({
                status: true,
                message: 'Dashboard details.',
                data: {
                    totalOrder: totalOrder.length > 0 ? totalOrder.length : 0,
                    pendingOrders: pendingOrders.length > 0 ? pendingOrders.length : 0,
                    upcomingOrders: upcomingOrders.length > 0 ? upcomingOrders.length : 0,
                    completedOrders: userCompletedOrders.length > 0 ? userCompletedOrders.length : 0,
                    cancelledOrders: cancelledOrders.length > 0 ? cancelledOrders.length : 0,
                },
            });
        }

    };

    /* Start */
    ValidationStep2();
};