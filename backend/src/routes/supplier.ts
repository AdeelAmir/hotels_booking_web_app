import express, { Application } from 'express';
import { CreateSupplier, GetAllSuppliers, SwitchSupplier } from '../controllers/supplier.controller';

require('dotenv').config({ path: './.env' });
const app: Application = express();
const formData = require('express-form-data');
const cors = require('cors');
app.use(formData.parse());
app.use(cors());
const ApiAuth = require('../lib/auth');

// Routes
app.post("/create",ApiAuth, CreateSupplier);
app.get("/all", GetAllSuppliers);
app.post("/switch",ApiAuth, SwitchSupplier);

module.exports = app;