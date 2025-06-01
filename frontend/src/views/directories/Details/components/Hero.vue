<template>
  <section class="py-0">
    <b-container fluid class="px-0">
      <div class="tiny-slider arrow-round arrow-blur">
        <CustomTinySlider id="tiny-slider-inner" :settings="heroSliderSettings">
          <div v-for="(image, idx) in sliderImages" :key="idx">
            <CustomGLightbox className="w-100 h-100" :link="image">
              <b-card
                no-body
                class="card-element-hover card-overlay-hover rounded-0 overflow-hidden"
              >
                <img :src="image" alt="" />
                <div class="hover-element w-100 h-100">
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                  >
                    <BIconFullscreen size="{28}" class="fs-6 text-white" />
                  </div>
                </div>
              </b-card>
            </CustomGLightbox>
          </div>
        </CustomTinySlider>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import directory3 from '@/assets/images/category/directory/03.jpg'
import directory4 from '@/assets/images/category/directory/04.jpg'
import directory5 from '@/assets/images/category/directory/05.jpg'
import directory6 from '@/assets/images/category/directory/06.jpg'
import { BIconFullscreen } from 'bootstrap-icons-vue'

import CustomGLightbox from '@/components/CustomGLightbox.vue'
import CustomTinySlider from '@/components/CustomTinySlider.vue'

import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

const sliderImages = [directory3, directory6, directory5, directory4]

const useLayout = useLayoutStore()

const heroSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 0,
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
