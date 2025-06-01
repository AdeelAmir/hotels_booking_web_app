<template>
  <b-card-header class="border-bottom d-md-flex justify-content-md-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="icon-lg bg-light rounded-circle flex-shrink-0">
        <font-awesome-icon :icon="faHotel" />
      </div>
      <div class="ms-2">
        <b-card-title tag="h6" class="mb-0">Tru By Hilton Georgetown</b-card-title>
        <ul class="nav nav-divider small">
          <li class="nav-item">Booking ID: {{ booking.refNo }}</li>
          <li class="nav-item">Price Room</li>
        </ul>
      </div>
    </div>

    <div class="mt-2 mt-md-0">
      <a href="#" class="btn btn-primary-soft mb-0">Manage Booking</a>
      <a href="#" :disabled="isLoading" class="btn btn-primary-soft ml-2 mb-0" @click="viewBooking">
        <BIconEye /> View
        <span v-if="!isLoading"></span>
        <span v-else>
          <b-spinner small></b-spinner>
        </span>
      </a>
      <p v-if="booking.cancelled" class="text-danger text-md-end mb-0">Booking cancelled</p>
    </div>
  </b-card-header>

  <b-card-body>
    <b-row class="g-3">
      <b-col sm="6" md="4">
        <span>Arrival Time</span>
        <h6 class="mb-0">{{ moment(booking.checkIn).format("DD-MM-yyyy") }}</h6>
      </b-col>

      <b-col sm="6" md="4">
        <span>End Time</span>
        <h6 class="mb-0">{{ moment(booking.checkOut).format("DD-MM-yyyy") }}</h6>
      </b-col>

      <b-col sm="6" md="4">
        <span>Booked By</span>
        <h6 class="mb-0">{{ userDetails.firstName + ' ' + userDetails.lastName }}</h6>
      </b-col>
    </b-row>
    <!-- Loading Popup -->
    <!-- <b-modal v-model="loading" centered hide-footer hide-header class="custom-modal">
      <Loader />
    </b-modal> -->
  </b-card-body>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type { BookingType } from '@/views/user/Bookings/data'
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { BookingDetails, useAuthStore } from '@/stores/auth';
import { BIconEye } from 'bootstrap-icons-vue';
import { useRouter } from 'vue-router';
import { BookingDetail } from '@/helpers/backend-api';
import moment from 'moment';

const bookingDetails = BookingDetails();
const useAuth = useAuthStore();
let userDetails = useAuth.getUserData();
const isLoading = ref(false)
const router = useRouter();
let userToken = useAuth.getUserToken();

const props = defineProps<{
  booking: any;
}>();
const { booking } = props;

const viewBooking = async () => {
  isLoading.value = true;
  try {
    const response = await BookingDetail(booking.id, userToken);
    if (response.status === true) {
      console.log(response.data);
      bookingDetails.saveSession(response.data);
      isLoading.value = false;
      router.push({ name: 'user.bookings-detail', params: { id: booking.id } });
    } else {
      isLoading.value = false;
    }
  } catch (err: any) {
    isLoading.value = false;
  }
};
</script>
