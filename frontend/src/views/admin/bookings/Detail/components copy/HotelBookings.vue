<template>
  <div class="bg-light border border-secondary border-opacity-25 p-3 rounded d-inline-block mt-4 mainbox">
    <h4 class="text-center mb-3">Reservation Detail:</h4>
    <div class="d-flex  justify-content-between flex-wrap">
      <div class="d-flex align-items-center">
        <div class="avatar avatar-md flex-shrink-0">
          <img class="avatar-img rounded-circle" :src="hotelDetail.image" alt="avatar" />
        </div>
        <h5 class="mb-0 ms-2">{{ hotelDetail.guestData.name }}</h5>
      </div>
      <div>
        <div class="d-flex">
          <small>Email:</small>
          <h6 class="fw-normal small me-3 ml-2">{{ hotelDetail.guestData.email }}</h6>
        </div>
        <div class="d-flex">
          <small>Contact:</small>
          <h6 class="fw-normal small me-3 ml-2">{{ hotelDetail.guestData.phone }}</h6>
        </div>
      </div>
    </div>
    <div class="mt-3 gap-4 gap-md-5 d-flex  justify-content-between flex-wrap mt-2">
      <div>
        <small>Total Guest:</small>
        <h6 class="fw-normal mb-0">2</h6>
      </div>
      <div>
        <small>Total Children:</small>
        <h6 class="fw-normal mb-0">0</h6>
      </div>
      <div>
        <small>Check-in:</small>
        <h6 class="fw-normal mb-0">{{ moment(hotelDetail.guestData.checkIn).format("DD-MM-yyyy") }}</h6>
      </div>
      <div>
        <small>Check-out:</small>
        <h6 class="fw-normal mb-0">{{ moment(hotelDetail.guestData.checkOut).format("DD-MM-yyyy") }}</h6>
      </div>
      <div>
        <small>Total Amount:</small>
        <h6 class="text-success mb-0">{{ hotelDetail.currencySymbol }}{{ hotelDetail.price }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { hotelListData } from '@/stores/auth'
import moment from 'moment';

const hotelDetail: any = ref({});
const hotelList = hotelListData();
let getListData = hotelList.getData();

const route = useRoute();
const hotelId = route.params.id;
let filterData = getListData.roomsArr.find((item: any) => item.bookingRef == hotelId);
hotelDetail.value = filterData;
</script>
<style>
.mainbox {
  width: 80%;
  margin: auto;
}

.mainbox h6 {}
</style>