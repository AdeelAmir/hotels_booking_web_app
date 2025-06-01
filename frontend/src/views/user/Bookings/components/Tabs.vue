<template>
  <b-tabs v-model="activeTabIndex" nav-class="nav nav-tabs nav-bottom-line nav-responsive nav-justified">
    <b-tab title="Upcoming Booking" value="pending">
      <template #title>
        <BIconBriefcaseFill class="fa-fw me-1" />
        Upcoming Booking
      </template>
      <b-card-body>
        <h6>Upcoming booking ( {{ totalBooking }} )</h6>
        <b-card no-body class="border mb-4" v-for="(item, idx) in userBookings" :key="idx">
          <BookingCard :booking="item" />
        </b-card>
      </b-card-body>
    </b-tab>

    <b-tab title="Canceled Booking" value="cancelled">
      <template #title>
        <BIconXOctagon class="fa-fw me-1" />
        Canceled Booking
      </template>
      <b-card-body>
        <h6>Canceled booking ( {{ totalBooking }} )</h6>
        <b-card no-body class="border mb-4" v-for="(item, idx) in userBookings" :key="idx">
          <BookingCard :booking="item" />
        </b-card>
      </b-card-body>
    </b-tab>

    <b-tab title="Completed Booking" value="completed">
      <template #title>
        <BIconPatchCheck class="fa-fw me-1" />
        Completed Booking
      </template>
      <b-card-body>
        <h6>Completed booking ( {{ totalBooking }} )</h6>
        <b-card no-body class="border mb-4" v-for="(item, idx) in userBookings" :key="idx">
          <BookingCard :booking="item" />
        </b-card>
      </b-card-body>
    </b-tab>
    <!-- Loading Popup -->
    <!-- <b-modal v-model="loading" centered hide-footer hide-header class="custom-modal">
      <Loader />
    </b-modal> -->
  </b-tabs>
</template>

<script lang="ts" setup>
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { BIconBriefcaseFill, BIconPatchCheck, BIconXOctagon } from 'bootstrap-icons-vue'
import element17 from '@/assets/images/element/17.svg'
import BookingCard from '@/views/user/Bookings/components/BookingCard.vue'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { GetMyBooking } from '@/helpers/backend-api'
import { watch } from 'vue'
import Loader from '@/views/hotels/HotelDetails/components/loader.vue'

const error = ref('')
const loading = ref(false)
const userBookings = ref([]);
const totalBooking = ref(0);
const useAuth = useAuthStore();
let userToken = useAuth.getUserToken();
const activeTabIndex = ref(0);

const GetBooking = async () => {

  try {
    const status = activeTabIndex.value === 0 ? 'pending' : activeTabIndex.value === 1 ? 'cancelled' : 'completed';
    const response = await GetMyBooking(status, userToken);

    if (response.status) {
      totalBooking.value = response.data.length
      let data = response.data.map((booking: any) => ({
        id: booking.id,
        hotelName: booking.extraDetail.hotelDetails.title,
        hotelImage: booking.extraDetail.hotelDetails.image,
        hotelRating: booking.extraDetail.hotelDetails.rating,
        bookedBy: booking.extraDetail.mainGuest.name,
        refNo: booking.refNo,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut
      }));
      userBookings.value = data;
      loading.value = false;
      console.log(userBookings.value);
    } else {
      loading.value = false;
      error.value = response.message;
    }
  } catch (err: any) {
    loading.value = false;
    error.value = 'Failed to register, Please try again';
  }
};

console.log(activeTabIndex.value);

watch(activeTabIndex, (index) => {
  console.log(index);
  GetBooking();
  loading.value = true;
});

onMounted(() => {
  GetBooking();
})
</script>
