<template>
  <section class="pt-4">
    <b-container>
      <b-row>
        <b-col md="10" xl="8" class="mx-auto">
          <b-card no-body class="shadow">
            <!-- Content Loader for Image -->
            <ContentLoader v-if="!HotelImage" :height="200" :width="'100%'">
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="200" />
            </ContentLoader>
            <img v-else :src="HotelImage" class="rounded-top" alt="gallery4" />

            <b-card-body class="text-center p-4">
              <!-- Content Loader for Title -->
              <template v-if="Title">
                <b-card-title tag="h1" class="fs-3">
                  🎊 Congratulations! 🎊
                </b-card-title>
              </template>
              <ContentLoader v-else :height="40" :width="'80%'">
                <rect x="0" y="0" rx="4" ry="4" width="100%" height="40" />
              </ContentLoader>

              <!-- Content Loader for Lead Text -->
              <p class="lead mb-3 d-flex flex-wrap justify-content-center">
                <small v-if="bookingData" class="mb-0 items-center mr-2">
                  <BIconVr class="fa-fw me-2" />
                  Booking ID:
                </small>
                <ContentLoader v-else :height="20" :width="'60%'">
                  <rect x="0" y="1rem" rx="4" ry="4" width="30%" height="20" />
                </ContentLoader>
                <template v-if="bookingData">{{ bookingData.id }}</template>
                <ContentLoader v-else :height="20" :width="'60%'">
                  <rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
                </ContentLoader>
              </p>

              <!-- Content Loader for H5 Title -->
              <h5 class="text-primary mb-4">
                <template v-if="Title">{{ Title }}</template>
                <ContentLoader v-else :height="20" :width="'60%'">
                  <rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
                </ContentLoader>
              </h5>

              <b-row class="justify-content-between text-start mb-4">
                <b-col lg="5">
                  <!-- Content Loader for Booking Details -->
                  <template v-if="bookingData">
                    <ul class="list-group list-group-borderless">
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconPerson class="fa-fw me-2" />
                          Booked by:
                        </span>
                        <span class="h6 fw-normal mb-0">{{ GuestName }}</span>
                      </li>
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconWallet2 class="fa-fw me-2" />
                          Payment Method:
                        </span>
                        <span class="h6 fw-normal mb-0">Credit card</span>
                      </li>
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconCurrencyDollar class="fa-fw me-2" />
                          Total Price:
                        </span>
                        <span class="h6 fw-normal mb-0">{{ bookingData.currencySymbol }} {{ Math.round(bookingData.payableAmount) }}</span>
                      </li>
                    </ul>
                  </template>
                  <ContentLoader v-else :height="180" :width="'100%'">
                    <rect x="0" y="0" rx="4" ry="4" width="100%" height="1.5rem" />
                    <rect x="0" y="2rem" rx="4" ry="4" width="60%" height="1rem" />
                    <rect x="0" y="4rem" rx="4" ry="4" width="60%" height="1rem" />
                    <rect x="0" y="6rem" rx="4" ry="4" width="60%" height="1rem" />
                  </ContentLoader>
                </b-col>

                <b-col lg="5">
                  <!-- Content Loader for Additional Booking Details -->
                  <template v-if="bookingData">
                    <ul class="list-group list-group-borderless">
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconCalendar class="fa-fw me-2" />
                          Date:
                        </span>
                        <span class="h6 fw-normal mb-0">{{ bookingData.createdAt }}</span>
                      </li>
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconCalendar class="fa-fw me-2" />
                          Check In:
                        </span>
                        <span class="h6 fw-normal mb-0">{{ checkIn }}</span>
                      </li>
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconCalendar class="fa-fw me-2" />
                          Check Out:
                        </span>
                        <span class="h6 fw-normal mb-0">{{  checkOut  }}</span>
                      </li>
                      <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                        <span class="mb-0 items-center">
                          <BIconPeople class="fa-fw me-2" />
                          Guests:
                        </span>
                        <span class="h6 fw-normal mb-0">{{ Guest }}</span>
                      </li>
                    </ul>
                  </template>
                  <ContentLoader v-else :height="180" :width="'100%'">
                    <rect x="0" y="0" rx="4" ry="4" width="60%" height="1rem" />
                    <rect x="0" y="2rem" rx="4" ry="4" width="60%" height="1rem" />
                    <rect x="0" y="4rem" rx="4" ry="4" width="60%" height="1rem" />
                    <rect x="0" y="6rem" rx="4" ry="4" width="60%" height="1rem" />
                  </ContentLoader>
                </b-col>
              </b-row>

              <!-- Content Loader for Buttons -->
              <!-- <div class="d-sm-flex justify-content-sm-end d-grid">
                <template v-if="bookingData">
                  <b-dropdown variant="link" toggle-class="m-0 p-0" class="me-sm-2 mb-2 mb-sm-0"
                    menu-class="min-w-auto shadow rounded" no-caret>
                    <template #button-content>
                      <button type="button" class="arrow-none btn btn-light mb-0 w-100 items-center" role="button">
                        <BIconShare class="me-2" />
                        Share
                      </button>
                    </template>
                    <li>
                      <b-dropdown-item class="items-center">
                        <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                        Twitter
                      </b-dropdown-item>
                    </li>
                    <li>
                      <b-dropdown-item class="items-center">
                        <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                        Facebook
                      </b-dropdown-item>
                    </li>
                    <li>
                      <b-dropdown-item class="items-center">
                        <font-awesome-icon :icon="faLinkedin" class="me-2" />
                        LinkedIn
                      </b-dropdown-item>
                    </li>
                    <li>
                      <b-dropdown-item class="items-center">
                        <font-awesome-icon :icon="faCopy" class="me-2" />
                        Copy link
                      </b-dropdown-item>
                    </li>
                  </b-dropdown>
                  <b-button variant="primary" class="mb-0 items-center">
                    <BIconFilePdf class="me-2" />
                    Download PDF
                  </b-button>
                </template>
                <ContentLoader v-else :height="80" :width="'100%'">
                  <rect x="0" y="0" rx="4" ry="4" width="100%" height="2.5rem" />
                  <rect x="0" y="3rem" rx="4" ry="4" width="100%" height="2.5rem" />
                </ContentLoader>
              </div> -->
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>


<script setup lang="ts">
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import {
  BIconCalendar,
  BIconCurrencyDollar,
  BIconFilePdf,
  BIconPeople,
  BIconPerson,
  BIconShare,
  BIconVr,
  BIconWallet2
} from 'bootstrap-icons-vue';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { onMounted, ref } from 'vue';
import { BookingDetail } from '@/helpers/backend-api';
import { useRoute } from 'vue-router';
import {ContentLoader} from 'vue-content-loader';
import moment from 'moment';
import { useCurrencyCode } from '@/stores/auth';

const route = useRoute();
const error = ref('');
const HotelImage = ref('');
const Title = ref('');
const Guest = ref(0);
const GuestName = ref('');
const checkIn = ref('');
const checkOut = ref('');
const bookingData = ref<any>(null);
const loading = ref(true); // Loading state

onMounted(async () => {
  const bookingId = route.params.id;
  try {
    const response = await BookingDetail(bookingId, '');
    if (response.status === true) {
      bookingData.value = response.data;
      if (bookingData.value && bookingData.value.extraDetails) {
        HotelImage.value = bookingData.value.extraDetails.hotelDetails.image;
        Guest.value = bookingData.value.extraDetails.guestDeatils.length;
        Title.value = bookingData.value.extraDetails.hotelDetails.title;
        GuestName.value = bookingData.value.extraDetails.mainGuest.name;
        checkIn.value = moment(bookingData.value.checkIn).format('DD-MM-YYYY');
        console.log(bookingData);

        checkOut.value = moment(bookingData.value.checkOut).format('DD-MM-YYYY');
      }
    }
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>