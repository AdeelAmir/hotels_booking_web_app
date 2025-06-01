# hotelbookingwebapp-backend-internal

Hotel Price Room & Booking Backend API in Node.js, Express.js, Typescript

## Setup Instructions

### Step 1: Setup Azure CosmosDB

- Create an Azure CosmosDB database.
- Create the following containers:
  - `users`
  - `IVHotelContent`
  - `ivhotelunifed`
  - `PRHotels`
  - `IVHotelsUnified`
  - `bookings`
  - `supplier`
  - `setting`
  - `role`
- Create an index for the hotels data as needed for your queries.

### Step 2: Configure Environment Variables

Create a `.env` file in the backend root directory and add the following variables:

```env
# ============ Database Connections =================== #
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME= # enter name here
JWT_SECRET_KEY=jsonwebtokenkey123
URL=http://localhost
PORT=8000

# ============ Ivector Basic Keys =================== #
USER_NAME=
PASSWORD=

# ============ Price Rooms Data =================== #
SENDER_NAME="Hotel Booking System"
SENDER_EMAIL=
SETTING_CURRENCY_NAME=
CURRENCY_BASE=
EMAIL_API_KEY=
IMAGE_BASE_URL=

# ============ Email Template Id's =================== #
EMAIL_TEMPLATE_ID=
OTP_EMAIL_TEMPLATE_ID=
BOOKING_CONFIRM_EMAIL_TEMPLATE_ID=
BOOKING_CANCELL_EMAIL_TEMPLATE_ID=

# ============ Azure Data =================== #
AZURE_MAP_API_KEY=
FIXER_API_KEY=
AZURE_SEARCH_SERVICE=
AZURE_SEARCH_INDEX=
AZURE_SEARCH_API_KEY=
AZURE_SEARCH_API_KEY2=
COSMOSDB_API_KEY=

# ============ Stripe Test Keys =================== #
STRIPE_PUBLISH_KEY=
STRIPE_SECRET_KEY=
```

### Step 3: Install Dependencies

Run the following command to install all required packages:

```sh
npm install
```

### Step 4: Start the Application

Run the development server with:

```sh
npm run dev-n
```