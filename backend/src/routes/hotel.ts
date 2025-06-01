import { FetchIVectorData, FetchIVectorHotelDetails, PropertySearch, searchHotels } from './../controllers/hotel.controller';
import express, { Application } from 'express';
import { GetAllHotels, GetHotelDetails, PropertyPreBook, PropertyGetCancelFees, PropertyCancel, PropertyCheckout, getUserBookings, getAllBookings, getBookingDetail, TruncateContainer, GetUnifiedFilterHotels, PropertyBook, PropertyCheckoutWithoutToken } from '../controllers/hotel.controller';

require('dotenv').config({ path: './.env' });
const app: Application = express();
const formData = require('express-form-data');
const cors = require('cors');
app.use(formData.parse());
app.use(cors());
const ApiAuth = require('../lib/auth');

// Routes
app.get("/details", GetHotelDetails);
app.get("/details-iVector", FetchIVectorHotelDetails);
app.get("/all", GetAllHotels);
app.post("/filter-hotels", GetUnifiedFilterHotels);
app.post("/filter-hotels-index", FetchIVectorData);
// app.get("/seller-hotels", GetSellerHotels);
// app.get("/search", HotelSearch);
app.post("/property-search", PropertySearch);
app.post("/property-book", ApiAuth, PropertyBook);
app.post("/property-pre-book", ApiAuth, PropertyPreBook);
app.post("/property-checkout",ApiAuth, PropertyCheckout); 
app.post("/property-checkout-no-login", PropertyCheckoutWithoutToken); 
app.post("/property-get-cancel-fees", ApiAuth, PropertyGetCancelFees);
app.post("/property-cancel", ApiAuth, PropertyCancel);
app.get("/user-bookings", ApiAuth, getUserBookings);
app.get("/all-bookings", ApiAuth, getAllBookings);
app.get("/booking-detail", getBookingDetail); //ApiAuth
// Helper Api for truncate containers
app.delete("/delete-bookings", TruncateContainer);
app.get("/search", searchHotels);

module.exports = app;