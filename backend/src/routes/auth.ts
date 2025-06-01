import express, { Application } from 'express';
import { DeactivateAccount, DeleteAccount, ForgetPassword, VerifyOTPCode, UpdateBasicInformation, UpdateEmail, UpdateName, changePassword, getAllUser, getUserDetail, signIn, UpdateTravelers, StaticDashboard, UpdatePassword, UpdateProfile } from '../controllers/user.controller';
import { signUp } from '../controllers/user.controller';

require('dotenv').config({ path: './.env' });
const app: Application = express();
const formData = require('express-form-data');
const cors = require('cors');
app.use(formData.parse());
app.use(cors());
const ApiAuth = require('../lib/auth');

// Routes
app.post("/register", signUp);
app.post("/login", signIn);
app.put("/change-password", ApiAuth, changePassword);
app.post("/forgot-password", ForgetPassword);
app.post("/verify-otp-code", VerifyOTPCode);
app.put("/update-password", UpdatePassword);
app.delete("/delete-account", ApiAuth, DeleteAccount);
app.put("/deactivate-account", ApiAuth, DeactivateAccount);
app.get("/all-users", ApiAuth, getAllUser);
app.get("/user-detail", getUserDetail);
app.put("/update-email", ApiAuth, UpdateEmail);
app.put("/update-name", ApiAuth, UpdateName);
app.put("/update-profile", ApiAuth, UpdateProfile);
app.put("/update-traveler", ApiAuth, UpdateTravelers);
app.put("/update-information", ApiAuth, UpdateBasicInformation);
// Dashboard Apis
app.get("/dashboard", ApiAuth, StaticDashboard);

module.exports = app;