<template>
  <section class="pb-2 pb-lg-5">
    <b-container>
      <div class="tiny-slider arrow-round arrow-blur arrow-hover">
        <CustomTinySlider id="tiny-slider-offer" :settings="sliderSettings">
          <div v-for="(offer, idx) in offerData" :key="idx">
            <OfferCard :offer="offer" />
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import OfferCard from '@/views/hotels/Home/components/OfferCard.vue'
import CustomTinySlider from '@/components/CustomTinySlider.vue'

import { offerData } from '@/views/hotels/Home/data'

import type { TinySliderSettings } from 'tiny-slider'

import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const sliderSettings: TinySliderSettings = {
  arrowKeys: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,
  items: 3,
  autoplayDirection: useLayout.dir !== 'rtl' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    1: {
      items: 1,
      gutter: 10
    },
    768: {
      items: 1,
      gutter: 10
    },
    992: {
      items: 2,
      gutter: 30
    },
    1200: {
      items: 3,
      gutter: 30
    }
  }
}
</script>
