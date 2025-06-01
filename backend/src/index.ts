import { Request, Response, Application } from 'express';
import serverless from 'serverless-http';
require('dotenv').config({ path: './.env' });
const express = require('express');
exports.handler = void 0;
const serverless_http_1 = (require("serverless-http"));
const app: Application = express();
const PORT = process.env.PORT || "http://localhost:8000";
const cors = require('cors');
const formData = require('express-form-data');
const os = require('os');
const path = require("path");
const fs = require("fs-extra");
let StoragePath = path.resolve("./") + '/public/files/';
const connectToCosmosDB = require("./database/connection");
app.use(cors());
app.use(formData.parse({
    uploadDir: os.tmpdir(),
    autoClean: true
}));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

//Datbase Connection
async function main() {
    const { client, database, container } = await connectToCosmosDB();
}

main().catch((error) => {
    console.error("Error connecting to Cosmos DB:", error);
});

// Routes
const AuthRoutes = require('./routes/auth');
const HotelRoutes = require('./routes/hotel');
const SupplierRoutes = require('./routes/supplier');
const SettingRoutes = require('./routes/setting');
const PaymentRoutes = require('./routes/payment');

// Prefixes
app.use("/auth", AuthRoutes);
app.use("/hotel", HotelRoutes);
app.use("/supplier", SupplierRoutes);
app.use("/setting", SettingRoutes);
app.use("/payment", PaymentRoutes);

// File Path
app.use('/public', express.static(path.resolve(path.join(__dirname, './../public'))));


// Test URL
app.get("/", (req: Request, res: Response): void => {
    res.send("Hello Typescript with Node.js! HURRAH!!");
});

// LOCAL SERVER
app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 http:localhost:${PORT}`);
});
export const handler = serverless(app);