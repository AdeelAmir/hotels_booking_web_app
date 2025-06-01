<template>
  <section>
    <b-container>
      <b-row class="justify-content-between mb-5">
        <b-col md="6">
          <h2 class="mb-0">What client say about Booking</h2>
        </b-col>
        <b-col md="5">
          <p class="mb-0">
            As it so contrasted oh estimating instrument. Size like body some one had. Departure
            defective arranging rapturous did. Conduct denied adding worthy little.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="3"></b-col>
        <b-col lg="9">
          <div class="tiny-slider arrow-round arrow-blur arrow-hover">
            <CustomTinySlider id="tiny-slider-inner" :settings="testimonialSliderSettings">
              <div v-for="(item, idx) in testimonialSlides" :key="idx">
                <b-row class="g-4">
                  <b-col md="4">
                    <img :src="item.image" class="rounded" alt="testimonial-img" />
                  </b-col>
                  <b-col md="8">
                    <div class="d-flex">
                      <span class="display-5 opacity-2">
                        <BIconQuote class="mb-3" />
                      </span>
                      <div class="ms-3">
                        <h5 class="mb-3 text-primary">{{ item.title }}</h5>
                        <p class="mb-3">{{ item.description }}</p>
                        <h6 class="mb-0">{{ item.name }}</h6>
                        <small>{{ item.position }}</small>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </CustomTinySlider>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconQuote } from 'bootstrap-icons-vue'

import CustomTinySlider from '@/components/CustomTinySlider.vue'
import { testimonialSlides } from '@/views/listings/JoinUs/data'
import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const testimonialSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: true,
  edgePadding: 0,
  autoplayDirection: useLayout.dir !== 'rtl' ? 'forward' : 'backward',
  items: 1,
  nav: false
}
</script>
