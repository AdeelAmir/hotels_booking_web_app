<template>
  <div>
    <!-- Pros and Cons Section -->
    <div class="d-flex justify-content-between gap-2 w-full">
      <!-- Pros Section -->
      <div class="proscons border">
        <h4>Popular With</h4>
        <ul class="list-unstyled">
          <li v-if="!popular || !popular.length">No more data available</li>
          <li v-for="(pro, index) in popular" :key="index">
            <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
            {{ pro }}
          </li>
        </ul>
      </div>

      <!-- Cons Section -->
      <div class="proscons border">
        <h4>Suitable For</h4>
        <ul class="list-unstyled">
          <li v-if="!suitable || !suitable.length">No more data available</li>
          <li v-for="(con, index) in suitable" :key="index">
            <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
            {{ con }}
          </li>
        </ul>
      </div>
    </div>

    <div class="my-5">
      <b-card-header class="border-bottom bg-transparent px-0 pt-0">
        <h3 class="mb-0">Hotel Tags</h3>
      </b-card-header>
      <div class="mb-5 d-flex flex-wrap gap-2 mt-3">
        <div v-if="!hotelTags || !hotelTags.length">No more data available</div>
        <div class="text-bg-primary methods" v-for="(tag, index) in hotelTags" :key="index">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HotelDetailStore } from '@/stores/auth';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

let HotelDetails: any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData().data;

const popular = ref(HotelDetails.Popular_with || []);
const suitable = ref(HotelDetails.Suitable_for || []);
const hotelTags = ref(HotelDetails.Hotel_Tags || []);
</script>

<style>
.proscons {
  width: 50%;
  padding: 20px;
  border-radius: 10px;
}
</style>
