<template>
  <div>
    <div class="mb-6">

      <b-card-header class="border-bottom bg-transparent px-0 pt-0">
        <h3 class="mb-3">Hotel Highlights</h3>
      </b-card-header>

      <ul class="list-unstyled mt-4">
        <li v-for="(pro, index) in hotelHightlights" :key="index">
          <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
          {{ pro }}
        </li>
      </ul>
    </div>
    <!-- Pros and Cons Section -->
    <div class="d-flex justify-content-between gap-2 w-full">

      <!-- Pros Section -->
      <div class="proscons border ">
        <h4>
          <font-awesome-icon :icon="faCheck" class="text-success me-2" />
          Pros
        </h4>
        <ul class="list-unstyled">
          <li v-for="(pro, index) in prosList" :key="index">
            <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
            {{ pro }}
          </li>
        </ul>
      </div>

      <!-- Cons Section -->
      <div class="proscons border">
        <h4>
          <font-awesome-icon :icon="faClose" class="text-danger me-2" />
          Cons
        </h4>
        <ul class="list-unstyled">
          <li v-for="(con, index) in consList" :key="index">
            <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
            {{ con }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HotelDetailStore } from '@/stores/auth';
import { faCheck, faDotCircle, faClose } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'

let HotelDetails: any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData().data;

const prosList = ref(HotelDetails.pros_and_cons.pros);
const consList = ref(HotelDetails.pros_and_cons.cons);
const hotelHightlights = ref(HotelDetails.amazing_things);
</script>
<style>
.proscons {
  width: 50%;
  padding: 20px;
  border-radius: 10px;
}
</style>
