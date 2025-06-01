<template>
  <!-- <section> -->
  <div>
    <b-row class="sliderMain">
      <CustomTinySlider id="benefit-slider" :settings="benefitsSliderSettings">
        <b-col v-for="place in categoryData" cols="6" sm="6" lg="3" xl="2" :key="place.title">
          <div class="main-box text-center mx-2">
            <img :src="place.image" class="img-box" alt="place" />
            <small class="ml-2 mt-2"> {{ place.title }}</small>
          </div>
        </b-col>
      </CustomTinySlider>
      <!-- <b-col v-for="place in benefitsFeature" cols="6" sm="4" lg="3" xl="2" :key="place.title">
          <div class="main-box text-center d-flex">
            <img :src="place.image" class="img-box" alt="place" />
            <h6 class="ml-2 mt-2"> {{ place.title }}</h6>
          </div>
        </b-col> -->
    </b-row>
  </div>
  <!-- </section> -->
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue';
import { categoryData } from '@/views/hotels/Home/data'
import type { TinySliderSettings } from 'tiny-slider';
const benefitsSliderSettings: TinySliderSettings = {
  nested: 'inner',
  gutter: 20,
  controls: true,
  edgePadding: 10,
  // autoplay: false,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  nav: false, // Enable navigation dots
  // navPosition: 'bottom', // Position of the navigation dots
  responsive: {
    0: {
      items: 3.5
    },
    768: {
      items: 6
    },
    1200: {
      items: 8
    }
  }
}
</script>

<style>
.img-box {
  width: 25px;
}

.main-box {
  /* width: 150px;
  height: 60px; */
  /* background-color: #F5F5F6; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px 0px;
}

.sliderMain .tns-controls button {
  opacity: 1;
  top: 35% !important;
  width: 30px !important;
  height: 30px !important;
  border-radius: 2.5rem !important;
  background: rgb(118 118 118 / 50%) !important;
}

.sliderMain:hover .tns-controls button {
  opacity: 1;
}
</style>