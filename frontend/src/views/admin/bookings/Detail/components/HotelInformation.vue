<template>
  <b-col>
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
                <img :src="HotelImage" class="card-img" alt="" />
              </b-col>

              <b-col sm="6" md="6">
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
                <h5 class="mb-1">{{  moment(roomInformation.checkIn).format("DD-MM-yyyy") }}</h5>
                <!-- <small>
                  <BIconAlarm class="mb-1" />
                  12:30 pm
                </small> -->
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Check out</h6>
                <h5 class="mb-1">{{ moment(roomInformation.checkOut).format("DD-MM-yyyy") }}</h5>
                <!-- <small>
                  <BIconAlarm class="mb-1" />
                  4:30 pm
                </small> -->
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Rooms & Guests</h6>
                <div class="d-flex flex-wrap">
                  <h5 class="mb-1">{{ Guest }} G - 1 R</h5>
                  <small class="ml-4 mt-1">
                    (
                    <BIconBrightnessHigh class="mb-1" />
                    {{ numberOfNight }} Nights - {{ numberOfDays }} Days)
                  </small>
                </div>
              </div>
            </b-col>
          </b-row>
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
                <tr v-for="(room, index) in roomDetails" :key="index">
                  <!-- <td><img :src="hotelImage2" class="imgBox" alt="Room Image" /></td> -->
                  <td class="title-wrap">{{ room.title }}</td>
                  <td class="title-wrap">{{ room.type }}</td>
                  <td>
                    <small v-for="(icon, index) in room.noOfGuest" :key="index">
                      <font-awesome-icon :icon="faUser" class="text-success ml-1" />
                    </small>
                  </td>
                  <td>{{ roomInformation.currencySymbol }}{{ Math.round(room.price)}}/=</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <b-card-header class="p-4 border-bottom">
          <h4 class="mb-0">
            <font-awesome-icon :icon="faUser" />
            Guest Information
          </h4>
        </b-card-header>

        <div class="container mt-3 pb-3 custom-scrollbar">
          <h5 class="text-center btn-primary py-2">Main Guest</h5>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ mainGuest.name }}</td>
                  <td>{{ mainGuest.email }}</td>
                  <td>{{ mainGuest.phone }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container mt-3 pb-3 custom-scrollbar">
          <h5 class="text-center btn-primary-soft py-2">Other Guests</h5>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(guest, index) in allGuest" :key="index">
                  <td>{{ guest.title ? guest.title : "Mr/Mrs" }}</td>
                  <td>{{ guest.firstName }}</td>
                  <td>{{ guest.lastName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <b-card-header class="p-4 border-bottom">
          <h4 class="mb-0">
            <font-awesome-icon :icon="faCrown" />
            Special Requests
          </h4>
        </b-card-header>
        <div class="container mt-3 pb-3">
          <ul class=" d-flex flex-wrap justify-content-evenly mb-0">
            <li v-for="(amenity, index) in specailRequest" :key="index" class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              {{ amenity }}
            </li>
          </ul>
        </div>
      </b-card>
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { faBed, faCheckCircle, faCrown, faHotel, faStar, faStarHalfAlt, faUser, faWarning } from '@fortawesome/free-solid-svg-icons'
import { BIconAlarm, BIconArrow90degLeft, BIconArrowBarLeft, BIconArrowBarRight, BIconArrowLeft, BIconBack, BIconBrightnessHigh, BIconGeoAlt, } from 'bootstrap-icons-vue'
import { BookingDetails, HotelDetailStore, hotelListData, useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'
import hotelImage from '@/assets/images/blog/05.jpg'
import hotelImage2 from '@/assets/images/blog/01.jpg'
import { cancelBooking } from '@/helpers/backend-api'
import swalWithBootstrapButtons from 'sweetalert2';
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
import router from '@/router'
import Swal from 'sweetalert2'
import moment from 'moment'

const hotelTitle = ref('')
const HotelAddress = ref('')
const HotelImage = ref('')
const Guest = ref('')
const mainGuest = ref()
const allGuest = ref()
const error = ref('')
const numberOfDays = ref()
const numberOfNight = ref()
const roomInformation = ref();
const roomDetails = ref();
const specailRequest = ref();
// const specialRequest = ref([]);
const hotelRating = ref(0);
const route = useRoute();
const isLoading = ref(false)
const toast = useToast()
const query = route.query
const numberOfGuest = ref<number>(2);

const hotelId = route.params.id;
const useAuth = useAuthStore();
const userToken = useAuth.getUserToken();
const hotelList = hotelListData();
const bookingDetails = hotelList.getData();
const filterBookingData = bookingDetails.data.find((item:any)=> item.id == hotelId);
roomInformation.value = filterBookingData;
hotelRating.value = filterBookingData.extraDetail.hotelDetails.rating
hotelTitle.value = filterBookingData.extraDetail.hotelDetails.title
HotelAddress.value = filterBookingData.extraDetail.hotelDetails.address
HotelImage.value = filterBookingData.extraDetail.hotelDetails.image
roomDetails.value = filterBookingData.extraDetail.roomsDetail;
specailRequest.value = filterBookingData.specialRequest;
Guest.value = filterBookingData.extraDetail.guestDeatils.length;
mainGuest.value = filterBookingData.extraDetail.mainGuest;
allGuest.value = filterBookingData.extraDetail.guestDeatils
let daysNight = calculateDateDifference(filterBookingData.checkIn, filterBookingData.checkOut);
numberOfDays.value = daysNight.totalDays;
numberOfNight.value = daysNight.numberOfNights;
console.log(numberOfDays.value + '&' + numberOfNight.value);

// Calculate the number of full, half, and empty stars
const maxStars = 5;
const fullStars = Array.from({ length: Math.floor(hotelRating.value) }, (_, index) => index + 1);
const hasHalfStar = hotelRating.value % 1 !== 0;
const emptyStars = Array.from({ length: maxStars - Math.ceil(hotelRating.value) }, (_, index) => index + 1);

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

const showAlert = () => {
  Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then(async(result) => {
  if (result.isConfirmed) {
    // await handleSubmit();
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    redirectUser()
  }
});
};


// const handleSubmit = async () => {
//   try {
//     isLoading.value = true // Start loading
//     const response = await cancelBooking(bookingId, userToken)
//     if (response.status == true) {
//       toast.success('Booking Cancel Successfully'); // Show toast success
//     } else {
//       error.value = response.message
//     }
//   } catch (err: any) {
//     error.value = 'Failed to sign in, Please try again'
//   } finally {
//     isLoading.value = false // End loading
//   }
// };

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/user/bookings');
}

</script>

<style>
.imgBox {
  width: 100px;
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
