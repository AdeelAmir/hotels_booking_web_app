import express, { Application } from 'express';
import { createPaymentIntent } from '../controllers/payment.controller';

require('dotenv').config({ path: './.env' });
const app: Application = express();
const formData = require('express-form-data');
const cors = require('cors');
app.use(formData.parse());
app.use(cors());
const ApiAuth = require('../lib/auth');

// Routes
app.post("/create-payment-intent", createPaymentIntent);

module.exports = app;
