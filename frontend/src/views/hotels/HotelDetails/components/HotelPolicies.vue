<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h3 class="mb-0">Accepted Payment Methods</h3>
    </b-card-header>
    <div class="mb-5 d-flex flex-wrap gap-2 mt-3">
      <template v-if="paymentMethods.length > 0">
        <div class="text-bg-primary methods" v-for="(pro, index) in paymentMethods" :key="index">
          {{ pro }}
        </div>
      </template>
      <template v-else>
        <h5 class="m-auto text-muted">No data available</h5>
      </template>
    </div>
    <PopularSuitable />
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h3 class="mb-0">Hotel Policies</h3>
    </b-card-header>
    <div v-if="hotelPolicy == ''" class="text-center py-4">
      <h5 class="text-muted">No hotel policies are available.</h5>
    </div>
    <b-card-body v-else class="pt-4 p-0">
      <div class="d-flex gap-2">
        <h6>Meals: </h6>
        <p>{{ hotelPolicy.meals }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Children: </h6>
        <p>{{ hotelPolicy.children }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Pets: </h6>
        <p>{{ hotelPolicy.pets }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Parking: </h6>
        <p>{{ hotelPolicy.parking }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Transfers: </h6>
        <p>{{ hotelPolicy.transfers }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Anything Else: </h6>
        <p>{{ hotelPolicy.anything_else }}</p>
      </div>
      <div class="d-flex gap-2">
        <h6>Additional Fees: </h6>
        <p>{{ hotelPolicy.additional_fees }}</p>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { HotelDetailStore } from '@/stores/auth';
import { ref } from 'vue';
import PopularSuitable from './PopularSuitable.vue';

let HotelDetails: any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData().data;
const hotelDescription = HotelDetails.policies;
const hotelPolicy = ref(hotelDescription);
const paymentMethods = ref(HotelDetails.payment_methods);
// const meal = ref(hotelDescription); 
// const additional_fees = ref(hotelDescription); 
// const anything_else = ref(hotelDescription); 
// const children = ref(hotelDescription); 
// const parking= ref(hotelDescription); 
// const pets = ref(hotelDescription); 
// const transfers = ref(hotelDescription); 
</script>

<style>
.methods {
  padding: 6px 16px;
  border-radius: 20px;
}
</style>
