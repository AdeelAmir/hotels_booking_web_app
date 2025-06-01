<template>
  <b-col xl="8">
    <div class="vstack gap-5">
      <b-card no-body class="shadow">
        <b-card-header class="p-4 border-bottom">
          <h3 class="mb-0">
            <font-awesome-icon :icon="faHotel" />
            Hotel Information
          </h3>
        </b-card-header>

        <b-card-body class="p-4">
          <b-card no-body class="mb-4">
            <b-row class="align-items-center">
              <b-col sm="6" md="3">
                <img :src="hotelImage" class="card-img" alt="" />
              </b-col>

              <b-col sm="6" md="9">
                <b-card-body class="pt-3 pt-sm-0 p-0">
                  <b-card-title tag="h5"><a href="#">{{ hotelTitle }}</a></b-card-title>
                  <p class="small mb-2">
                    <BIconGeoAlt class="me-1" />
                    {{ HotelAddress }}
                  </p>

                  <ul class="list-inline mb-0 gap-1">
                    <li v-for="star in fullStars" :key="'full-' + star" class="list-inline-item me-0">
                      <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    </li>
                    <li v-if="hasHalfStar" class="list-inline-item me-0">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
                    </li>
                    <li v-for="star in emptyStars" :key="'empty-' + star" class="list-inline-item me-0">
                      <font-awesome-icon :icon="faStar" class="text-muted me-1" />
                    </li>
                    <li class="list-inline-item ms-2 h6 small fw-bold mb-0">{{ hotelRating }}</li>
                  </ul>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-row class="g-4">
            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Check-in</h6>
                <h5 class="mb-1">{{ moment(checkInOut[0]).format("DD-MM-yyyy") }}</h5>
                <small>
                  <BIconAlarm class="mb-1" />
                  12:30 pm
                </small>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Check out</h6>
                <h5 class="mb-1">{{ moment(checkInOut[1]).format("DD-MM-yyyy") }}</h5>
                <small>
                  <BIconAlarm class="mb-1" />
                  4:30 pm
                </small>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Rooms & Guests</h6>
                <h5 class="mb-1">{{ Guest }} G - 1 R</h5>
                <small>
                  <BIconBrightnessHigh class="mb-1" />
                  {{ numberOfNight }} Nights - {{ numberOfDays }} Days
                </small>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="border mt-4">
            <b-card-header class="border-bottom d-md-flex justify-content-md-between">
              <b-card-title tag="h5" class="mb-0">Deluxe Pool View with Breakfast</b-card-title>
              <a href="#" class="btn btn-link p-0 mb-0" @click.prevent="CancellationPolicy('/help/refund-policy')">View
                Cancellation Policy</a>
            </b-card-header>

            <b-card-body>
              <h6>Price Included</h6>
              <ul class="list-group list-group-borderless mb-0">
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Free Breakfast and Lunch/Dinner.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Great Small Breaks.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Free Stay for Kids Below the age of 12 years.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  On Cancellation, You will not get any refund
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="p-4 border-bottom">
          <h4 class="mb-0">
            <font-awesome-icon :icon="faBed" />
            Room Information
          </h4>
        </b-card-header>

        <div class="container mt-3 pb-3 custom-scrollbar">
          <div>
            <table class="table">
              <!-- <thead>
                <tr>
                  <th>Image</th>
                  <th class="title-wrap">Title</th>
                  <th>No Of Guest</th>
                  <th>Price</th>
                </tr>
              </thead> -->
              <tbody>
                <tr v-for="(room, index) in roomInformation" :key="index">
                  <td class="title-wrap">{{ room.roomType }}</td>
                  <td class="title-wrap">{{ room.plan }}</td>
                  <td>
                    <small v-for="(icon, index) in numberOfGuest" :key="index">
                      <font-awesome-icon :icon="faUser" class="text-success ml-1" />
                    </small>
                  </td>
                  <td>{{ room.cheapest_price.currency_code }} {{  Math.round(parseFloat(room.cheapest_price.amount) *
                    room.numberOfRooms)}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <b-card-header class="p-4 border-bottom">
          <h3 class="mb-0">
            <font-awesome-icon :icon="faBed" />
            Room Information
          </h3>
        </b-card-header>
        <div class="container mt-3 pb-3">
          <div v-for="(room, index) in roomInformation" :key="index" class="p-1 p-md-2">
            <div class="d-flex flex-sm-row col-12 justify-content-start align-items-center mainBox">
              <img :src="hotelImg2" class="imgBox col-md-2" alt="Room Image" />
              <h6 class="col-5 responsive-h6">{{ room.RoomType }}</h6>
              <h6 class="col-2 responsive-h6">
                <small v-for="(icon, index) in numberOfGuest" :key="index">
                  <font-awesome-icon :icon="faUser" class="text-success ml-1" />
                </small>
              </h6>
              <h6 class="col-2 responsive-h6">${{ Math.round(room.TotalCost) }}/= Amount</h6>
            </div>
          </div>
        </div> -->
      </b-card>

      <GuestDetails @form-data-changed="handleFormDataChanged" />

      <PaymentOptions :user="receivedFormData" @submitPayment="handlePayment" />
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { faBed, faBedPulse, faBroom, faHotel, faStar, faStarHalfAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  BIconAlarm,
  BIconBrightnessHigh,
  BIconPatchCheckFill,
  BIconGeoAlt,
} from 'bootstrap-icons-vue'
import GuestDetails from './GuestDetails.vue'
import PaymentOptions from './PaymentOptions.vue'
import hotelImg2 from '@/assets/images/gallery/06.jpg'
import hotelImg from '@/assets/images/gallery/03.jpg'
import { HotelDetailStore, filterHotelDataStore, useAuthStore, useCurrencyCode } from '@/stores/auth'
import { ref } from 'vue'
import router from '@/router'
import { useToast } from 'vue-toastification'
import { HotelCheckout, HotelCheckoutWithLogin } from '@/helpers/backend-api'
import { useRoute } from 'vue-router'
import moment from 'moment'

const hotelTitle = ref('')
const HotelAddress = ref('')
const Guest = ref('')
const route = useRoute()
const query = route.query
const toast = useToast()
const error = ref('')
const numberOfDays = ref()
const numberOfNight = ref()
const receivedFormData = ref({});
const receivedPaymentData = ref({});
const roomInformation = ref();
const numberOfGuest = ref<number>();


function convertFractionToDecimal(fraction: any) {
  if (typeof fraction === 'string') {
    let decimal = fraction.replace('½', '.5');
    return parseFloat(decimal);
  }
  return fraction;
}

function calculateDateDifference(startDate: any, endDate: any) {
  const start: any = new Date(startDate);
  const end: any = new Date(endDate);
  const differenceInTime = end - start;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const numberOfNights = differenceInDays - 1;
  return {
    totalDays: differenceInDays,
    numberOfNights: numberOfNights
  };
}


const filterHotel = filterHotelDataStore();
const useAuth = useAuthStore();
const useCurrency = useCurrencyCode()
const currencyData = useCurrency.getData()
console.log('**************');
console.log(currencyData);
console.log();

let userToken = useAuth.getUserToken();
let filterOptions = filterHotel.getUserData().filterOptions;
const checkInOut: any = ref([
  filterOptions.arrival_date,
  filterOptions.end_date
]);

let adults = JSON.parse(filterOptions.room_requests);
numberOfGuest.value = adults[0].Adults;
let roomRequest = JSON.parse(filterOptions.room_requests)
Guest.value = roomRequest[0].Adults;

let totalGuest = {
  adults: roomRequest[0].Adults,
  infants: roomRequest[0].Infants,
  children: roomRequest[0].Children,
  childAges: roomRequest[0].ChildAges,
}
console.log(filterOptions.room_requests[0].Adults);
console.log(roomRequest);

let daysNight = calculateDateDifference(checkInOut.value[0], checkInOut.value[1]);
numberOfDays.value = daysNight.totalDays;
numberOfNight.value = daysNight.numberOfNights;
console.log(daysNight);
let stayDetails = {
  days: daysNight.totalDays,
  night: daysNight.numberOfNights
}

let HotelDetailData: any = HotelDetailStore();
let useCurrencySymbol = HotelDetailData.getUserData().currencySymbol;
let HotelDetails = HotelDetailData.getUserData().data;
let HotelRoomDetail = HotelDetailData.getUserData().RoomBooking;
roomInformation.value = HotelRoomDetail._value;
console.log('HotelRoomDetail' + HotelRoomDetail);
console.log('HotelDetails' + HotelDetails);
console.log(HotelRoomDetail);

const hotelImage = ref(HotelDetails.general_images[0].url)
hotelTitle.value = HotelDetails.header.hotel_name;
HotelAddress.value = HotelDetails.header.location;
let correctRating = HotelDetails.overall_rating;
let convertRating = convertFractionToDecimal(correctRating)
let hotelOwnerData = {
  hotelId: HotelDetails.id,
  email: HotelDetails.email,
  phone: HotelDetails.phone
}
console.log(convertRating);
const hotelRating = ref(convertRating || 0);
const maxStars = 5;
// Calculate the number of full, half, and empty stars
const fullStars = Array.from({ length: Math.floor(hotelRating.value) }, (_, index) => index + 1);
const hasHalfStar = hotelRating.value % 1 !== 0;
const emptyStars = Array.from({ length: maxStars - Math.ceil(hotelRating.value) }, (_, index) => index + 1);

function handleFormDataChanged(data: any) {
  receivedFormData.value = data;
  console.log("heyyyy");
  console.log(receivedFormData.value);
}

const handlePayment = async (data: any) => {
  receivedPaymentData.value = data;
  const roomDetails = JSON.parse(JSON.stringify(roomInformation.value));
  const roomGuest = JSON.parse(JSON.stringify(receivedFormData.value));
  const roomPayment = JSON.parse(JSON.stringify(receivedPaymentData.value));
  // let datas = {
  //   roomDetails: roomDetails,
  //   roomGuest: roomGuest,
  //   roomPayment: roomPayment
  // }
  // console.log(datas);
  let roomPrice: any = 0;

  const roomData: any[] = [];
  let extraRoomDetails: any[] = [];

  roomDetails.map((item: any) => {
    roomPrice = roomPrice + (parseFloat(item.cheapest_price.amount) * item.numberOfRooms);

    let bookingData = {
      BookingToken: item.bookingToken,
      RoomBookingToken: item.RoomBookingToken,
      SupplierReference: item.prices[0].supplier.reference1,
      GuestDetails: roomGuest.guestDetails
    };
    roomData.push(bookingData);

    let roomDetail = {
      BookingToken: item.bookingToken,
      RoomBookingToken: item.RoomBookingToken,
      image: '',
      title: item.roomType,
      refundableStatus : item.refundableStatus,
      type: item.plan,
      price: parseFloat(item.cheapest_price.amount) * item.numberOfRooms,
      noOfGuest: roomGuest.guestDetails.length
    };
    extraRoomDetails.push(roomDetail);
  });

  let extraDetails = {
    hotelOwner: hotelOwnerData,
    roomsDetail: extraRoomDetails,
    hotelDetails: {
      image: HotelDetails.main_image_url,
      title: HotelDetails.header.hotel_name,
      rating: HotelDetails.overall_rating,
      address: HotelDetails.header.location,
      description: HotelDetails.hotel_description,
      addData: HotelDetails.AddData,
      amenities: HotelDetails.all_facilities_and_services,
    },
    mainGuest: {
      name: roomGuest.name,
      email: roomGuest.email,
      phone: roomGuest.phoneNumber
    },
    guestDeatils: roomGuest.guestDetails,
    noDays: stayDetails,
    totalGuest: totalGuest
  }

  let checkOutData = {
    title: 'Price Room',
    email: roomGuest.loginEmail,
    lead_customer: {
      CustomerTitle: "Mr",
      CustomerFirstName: "Test",
      CustomerLastName: "Test",
      DateOfBirth: "1973-03-02",
      CustomerAddress1: "123 William Street",
      CustomerAddress2: "",
      CustomerTownCity: "New York",
      CustomerCounty: "New York County",
      CustomerPostcode: "10038",
      CustomerBookingCountryCode: "US",
      CustomerPhone: "+34623828832",
      CustomerMobile: "+34623828832",
      CustomerEmail: "ambroise@leadshare.io"
    },
    total_rooms: roomInformation.value.length,
    room_details: roomData,
    special_request: roomGuest.specialRequests,
    room_charges: roomPrice,
    total_discount: 0,
    price_after_discount: roomPrice,
    tax_fees: 0,
    payable_amount: roomPrice,
    currency_symbol: useCurrencySymbol,
    check_in: checkInOut.value[0],
    check_out: checkInOut.value[1],
    total_guest: roomGuest.guestDetails.length,
    payment_type: 'Visa',
    card_holder_name: roomPayment.cardName,
    card_number: roomPayment.cardNumber,
    expiry_date: roomPayment.expiryYear,
    cvc: roomPayment.cvv,
    extra_details: extraDetails
  }

  try {
    let response: any = {};
    if (userToken) {
      console.log(checkOutData);
      response = await HotelCheckout(checkOutData, userToken)
    } else {
      console.log(checkOutData);
      response = await HotelCheckoutWithLogin(checkOutData)
    }
    if (response.status == true) {
      toast.success('Your Booking Successfully!');
      console.log(response.message)
      console.log(response.data)
      let bookingId = response.data.id;
      redirectUser(bookingId);
      // router.push({ name: 'user.booking-confirmed', params: { id: bookingId } });
    } else {
      error.value = response.message
    }
  } catch (err: any) {
    error.value = 'Failed to register, Please try again'
  }

}

const CancellationPolicy = (route: string) => {
  useAuth.removeSession();
  router.push(route);
};

const redirectUser = (bookingId: any) => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push(`/booking-confirmed/${bookingId}`);
}

</script>

<style>
.imgBox {
  width: 100px;
  border-radius: 10px
}

/* .title-wrap {
    white-space: normal; 
    max-width: 250px; 
    word-wrap: break-word; 
  } */
.custom-scrollbar {
  overflow-x: auto;
  max-height: 400px;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: none;
  padding: 12px 15px;
  text-align: left;
}

th {
  background-color: #f8f9fa;
}
</style>
