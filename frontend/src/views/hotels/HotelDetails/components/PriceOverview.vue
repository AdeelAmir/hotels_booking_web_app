<template>
  <CustomStickyElement id="price-overview" data-sticky data-margin-top="100" data-sticky-for="1199">
    <b-card no-body class="card-body border">
      <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
        <div>
          <span>Price Start at</span>
          <b-card-title class="mb-0">{{ currencySymbol }}3,500</b-card-title>
        </div>

      </div>
      <ul class="list-inline mb-2">
        <li class="list-inline-item me-1 h6 fw-light mb-0 me-2">
          <BIconArrowRight class="me-1" />
          {{ hotelRating }}
        </li>
        <li v-for="star in fullStars" :key="'full-' + star" class="list-inline-item me-0">
          <font-awesome-icon :icon="faStar" class="text-warning me-1" />
        </li>
        <li v-if="hasHalfStar" class="list-inline-item me-0">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
        </li>
        <li v-for="star in emptyStars" :key="'empty-' + star" class="list-inline-item me-0">
          <font-awesome-icon :icon="faStar" class="text-muted me-1" />
        </li>
      </ul>

      <p class="h6 fw-light mb-4">
        <BIconArrowRight class="me-1" />
        Free breakfast available
      </p>

      <div class="d-grid">
        <a href="#room-options" class="btn btn-lg btn-primary-soft mb-0">View {{ roomOptionCount }} Rooms Options</a>
      </div>
    </b-card>
  </CustomStickyElement>
</template>

<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import offer4 from '@/assets/images/offer/04.jpg'
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import { ref } from 'vue'
import { HotelDetailStore, useCurrencyCode } from '@/stores/auth'

// Define reactive variables
const roomOptionCount = ref(0);
function convertFractionToDecimal(fraction:any) {
  if (typeof fraction === 'string') {
    let decimal = fraction.replace('½', '.5');
    return parseFloat(decimal);
  }
  return fraction;
}

// Retrieve hotel rating from store
const HotelDetails = HotelDetailStore();
let useCurrency = useCurrencyCode()
let currencyData = useCurrency.getData()
const currencySymbol = ref(currencyData.symbol);
let correctRating = HotelDetails.getUserData().data.overall_rating;
console.log("price summury");
console.log(HotelDetails.getUserData());

let convertRating = convertFractionToDecimal(correctRating)
const hotelRating = ref(convertRating|| 0);
const maxStars = 5;

// Calculate the number of full, half, and empty stars
const fullStars = Array.from({ length: Math.floor(hotelRating.value) }, (_, index) => index + 1);
const hasHalfStar = hotelRating.value % 1 !== 0;
const emptyStars = Array.from({ length: maxStars - Math.ceil(hotelRating.value) }, (_, index) => index + 1);
</script>
