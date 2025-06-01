const connectToCosmosDB = require('./connection');

export let Setting: any;
export let PRHotels: any;
export let IVHotelUnified: any;
export let Bookings: any;
export let container: any;
export let Supplier: any;
export let Role: any;
(async () => {
    const connectionResult = await connectToCosmosDB();

    Setting = connectionResult.Setting;
    PRHotels = connectionResult.PRHotels;
    IVHotelUnified = connectionResult.IVHotelUnified;
    Bookings = connectionResult.Bookings;
    container = connectionResult.container;
    Supplier = connectionResult.Supplier;
    Role = connectionResult.Role;
    console.log("Connection SuccessFull 😍");
})();