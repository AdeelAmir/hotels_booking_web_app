<template>
  <b-card no-body class="card-img-scale overflow-hidden bg-transparent cursor-pointer">
    <div class="card-img-scale-wrapper rounded-3">
      <b-row class="cardMain">
        <CustomTinySlider :id="sliderId" :settings="hotelSliderSettings">
          <div v-for="(image, idx) in hotel.images" :key="idx">
            <SubHotelCards 
              :image="image" 
              :hotel-id="hotel.id" 
              @image-click="handleImageClick"
            />
          </div>
        </CustomTinySlider>
      </b-row>
      <div class="position-absolute w-100 top-0 start-0 p-3 d-flex justify-content-between">
        <div class="d-flex gap-1 flex-wrap">
          <div v-for="(location, index) in hotel.hotelTags" :key="index"
            class="badge text-bg-dark fs-6 rounded-pill d-flex">
            <small>{{ location }}</small>
          </div>
        </div>
        <div class="heart-Icon">
          <BIconHeart class="fa-fw large-icon icon_btn" @click.stop />
        </div>
      </div>
      <div class="position-absolute w-100 bottom-0 start-0 pl-3 d-flex justify-content-between">
        <ul class="list-inline mb-2">
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
      </div>
    </div>
    <b-card-body class="px-2" @click.prevent="handleClick">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0 hotel">{{ hotel.name }}</h6>
        <h6 class="mb-0 ml-1 d-flex justify-content-center align-items-center hotel">
          {{ hotel.overAllRating }}
          <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
        </h6>
      </div>
      <div class="mt-2 d-flex justify-content-between align-items-center">
        <h6 class="mb-0 hotel">{{ currencySymbol }}{{ hotel.price }}</h6>
        <h6 class="mb-0 d-flex hotel">
          {{ hotel.ratingCount }} Reviews
        </h6>
      </div>
    </b-card-body>

  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { BIconHeart } from 'bootstrap-icons-vue';
import type { PropType } from 'vue';
import type { FeaturedHotelType } from '@/views/hotels/Home/type';
import { currency } from '@/helpers/constants';
import type { TinySliderSettings } from 'tiny-slider';
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import SubHotelCards from './SubHotelCards.vue';
import { filterHotelDataStore, HotelDetailStore, useCurrencyCode } from '@/stores/auth';
import router from '@/router';

const sliderId = ref(`tiny-slider-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`);
const props = defineProps({
  hotel: {
    type: Object as PropType<FeaturedHotelType>,
    required: true,
  },
});

function convertFractionToDecimal(fraction: any) {
  if (typeof fraction === 'string') {
    let decimal = fraction.replace('½', '.5');
    return parseFloat(decimal);
  }
  return fraction;
}

const convertRating = convertFractionToDecimal(props.hotel.ratings);
const hotelRating = ref(convertRating || 0);
const fullStars = Array.from({ length: Math.floor(hotelRating.value) }, (_, index) => index + 1);
const hasHalfStar = hotelRating.value % 1 !== 0;
const emptyStars = Array.from({ length: 5 - Math.ceil(hotelRating.value) }, (_, index) => index + 1);

const filterHotel = filterHotelDataStore();
const filterOptions = filterHotel.getUserData()?.filterOptions ?? {};
const useCurrency = useCurrencyCode();
const currencyData = useCurrency.getData();
const currencySymbol = ref(currencyData.symbol);
const HotelDetails = HotelDetailStore();

const handleClick = async () => {
  // New tab mein open karne ke liye
  window.open(`/booking_v/hotels/detail/${props.hotel.id}`, '_blank');
};

const handleImageClick = () => {
  window.open(`/booking_v/hotels/detail/${props.hotel.id}`, '_blank');
};

const hotelSliderSettings: TinySliderSettings = {
  nested: 'inner',
  gutter: 20,
  // controls: true,
  edgePadding: 10,
  arrowKeys: true,
  nav: false,
  // navPosition: 'bottom',
  responsive: {
    0: { items: 1 },
    768: { items: 1 },
    1200: { items: 1 },
  },
};
</script>

<style scoped>
.large-icon {
  font-size: 1.3rem;
  stroke: white;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), inset 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.hotel {
  font-size: 14px;
  color: black;
  line-height: 20px;
  font-weight: 500;
}

.loading-text {
  margin-left: 1rem;
  font-size: 1.25rem;
}
</style>
