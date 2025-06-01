<template>
  <b-col md="6" xl="12">
    <b-card no-body class="shadow rounded-2">
      <b-card-header class="border-bottom">
        <b-card-title tag="h5" class="mb-0">Price Summary</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Room Charges</span>
            <span class="fs-5">{{ useCurrencySymbol }} {{ Math.round(allRoomsAmount) }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Total Discount
              <!-- <span class="badge text-bg-danger smaller mb-0 ms-2">10% off</span> -->
            </span>
            <span class="fs-5 text-success">- {{ useCurrencySymbol }} 0</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Price after discount</span>
            <span class="fs-5">{{ useCurrencySymbol }} {{ Math.round(allRoomsAmount) }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-light mb-0">Taxes % Fees</span>
            <span class="fs-5">{{ useCurrencySymbol }} 0</span>
          </li>
        </ul>
      </b-card-body>

      <div class="card-footer border-top">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 mb-0">Payable Now</span>
          <span class="h5 mb-0">{{ useCurrencySymbol }} {{ Math.round(allRoomsAmount) }}</span>
        </div>
      </div>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HotelDetailStore, useCurrencyCode } from '@/stores/auth'

const allRoomsAmount = ref(0);
const roomInformation = ref();
// const currencySymbol = ref('');

// const useCurrency = useCurrencyCode()
// const currencyData = useCurrency.getData()
// currencySymbol.value = currencyData.symbol; 
let HotelDetailData: any = HotelDetailStore();
let useCurrencySymbol = HotelDetailData.getUserData().currencySymbol;
let HotelRoomDetail = HotelDetailData.getUserData().RoomBooking;
console.log(HotelRoomDetail);
roomInformation.value = HotelRoomDetail._value;
console.log(roomInformation.value);

const roomsDetail = JSON.parse(JSON.stringify(roomInformation.value));
const totalAmount = roomsDetail.reduce((sum: any, item: any) => sum + (parseFloat(item.cheapest_price.amount) * item.numberOfRooms), 0);
allRoomsAmount.value = totalAmount;
console.log(allRoomsAmount.value);

</script>
