import { GetSettingTable, updateCurrencies, UpdateRolesTable, UpdateSettingTable } from '../controllers/setting.controller';
import express, { Application } from 'express';

require('dotenv').config({ path: './.env' });
const app: Application = express();
const formData = require('express-form-data');
const cors = require('cors');
app.use(formData.parse());
app.use(cors());
const ApiAuth = require('../lib/auth');

// Routes
app.post("/create",ApiAuth, UpdateSettingTable);
app.get("/all", ApiAuth, GetSettingTable);
app.post("/role-create", ApiAuth, UpdateRolesTable);
app.get("/get-currency", ApiAuth, updateCurrencies);

module.exports = app;
