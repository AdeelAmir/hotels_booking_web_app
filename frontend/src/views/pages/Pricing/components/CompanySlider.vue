<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="bg-light rounded-3 p-5">
            <h5 class="text-center mb-4 mb-md-5">
              Trusted by more than 900 companies around the world
            </h5>

            <div class="tiny-slider arrow-round">
              <CustomTinySlider id="tiny-slider-inner" :settings="companySliderSettings">
                <div v-for="(slide, idx) in companyImages" :key="idx">
                  <div class="item"><img :src="slide" alt="" :key="idx" /></div>
                </div>
              </CustomTinySlider>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import {
  client1Img,
  client2Img,
  client3Img,
  client5Img,
  client6Img,
  client8Img
} from '@/views/pages/data'
import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

const companyImages = [client1Img, client2Img, client8Img, client5Img, client6Img, client3Img]

const useLayout = useLayoutStore()

const companySliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  gutter: 80,
  controls: false,
  mouseDrag: true,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: false,
  items: 5,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
}
</script>
