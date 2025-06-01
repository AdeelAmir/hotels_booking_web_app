<template>
  <section>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Special Offers</h2>
        </b-col>
      </b-row>

      <div class="tiny-slider arrow-round arrow-blur arrow-hover">
        <CustomTinySlider
          id="offer-slider"
          class="tiny-slider-offer"
          :settings="offerSliderSettings"
        >
          <div v-for="(offer, idx) in specialOffers" :key="idx" class="h-100">
            <b-card v-if="offer.image" no-body class="border rounded-3 overflow-hidden h-100">
              <b-row class="g-0 align-items-center">
                <b-col sm="6">
                  <img :src="offer.image" class="card-img rounded-0" alt="offerImg" />
                </b-col>
                <b-col sm="6">
                  <b-card-body class="px-3">
                    <b-card-title tag="h6">
                      <router-link :to="{ name: offer.link?.name }" class="stretched-link">
                        {{ offer.title }}
                      </router-link>
                    </b-card-title>
                    <p class="mb-0">{{ offer.subTitle }}</p>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <b-card
              no-body
              v-else
              :class="`bg-${offer.variant} border-${offer.variant}`"
              class="bg-opacity-10 border border-2 border-dashed border-opacity-75 rounded-3 h-100"
            >
              <b-card-body>
                <h5 class="text-primary">{{ offer.title }}</h5>
                <div class="d-flex justify-content-between flex-wrap align-items-center">
                  <div
                    v-if="offer && offer.code"
                    role="button"
                    class="bg-mode rounded-2 px-3 py-2 d-inline-block"
                  >
                    <h6 class="fw-normal user-select-all mb-0">{{ offer.code }}</h6>
                  </div>
                  <span class="h6 fw-light small mb-0">{{ offer.subTitle }}</span>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>
<script lang="ts" setup>
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import type { TinySliderSettings } from 'tiny-slider'

import { useLayoutStore } from '@/stores/layout'
import { specialOffers } from '@/views/directories/Home/data'

const useLayout = useLayoutStore()

const offerSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 2,
  autoplayDirection: useLayout.dir !== 'rtl' ? 'forward' : 'backward',
  items: 3,
  nav: false,
  responsive: {
    1: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
}
</script>
