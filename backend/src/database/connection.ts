const { CosmosClient } = require("@azure/cosmos");

async function connectToCosmosDB() {
    const client = new CosmosClient({
        endpoint: "https://priceroom.documents.azure.com/",
        key: `${process.env.COSMODB_API_KEY}`
    });
    const { database } = await client.databases.createIfNotExists({ id: "priceroom" });
    const { container: container  } = await database.containers.createIfNotExists({ id: "users" });
    const { container: IVHotelContent  } = await database.containers.createIfNotExists({ id: "IVHotelContent" });
    const { container: IVHotelUnified  } = await database.containers.createIfNotExists({ id: "ivhotelunifed" });
    const { container: PRHotels  } = await database.containers.createIfNotExists({ id: "PRHotels" });
    const { container: IVHotelsUnified  } = await database.containers.createIfNotExists({ id: "IVHotelsUnified" });
    const { container: Bookings  } = await database.containers.createIfNotExists({ id: "bookings" });
    const { container: Supplier  } = await database.containers.createIfNotExists({ id: "supplier" });
    const { container: Setting  } = await database.containers.createIfNotExists({ id: "setting" });
    const { container: Role  } = await database.containers.createIfNotExists({ id: "role" });
    
    console.log("Connected to Cosmos DB");

    return { client, database, container, IVHotelContent, IVHotelUnified, Bookings, Supplier, Setting, Role, IVHotelsUnified, PRHotels};
}

module.exports = connectToCosmosDB;