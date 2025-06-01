<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <div
        class="text-center position-relative py-5"
        :style="{
          backgroundImage: `url(${mapImg})`,
          backgroundPosition: 'center left',
          backgroundSize: 'cover'
        }"
      >
        <div class="avatar position-absolute top-50 end-0 mt-5 me-7">
          <img
            class="avatar-img rounded-circle border border-2 border-light d-none d-md-block"
            :src="avatar9"
            alt="avatar"
          />
        </div>
        <div class="avatar avatar-lg position-absolute top-0 end-0 mt-5">
          <img
            class="avatar-img rounded-circle border border-2 border-light d-none d-lg-block"
            :src="avatar5"
            alt="avatar"
          />
        </div>
        <div class="avatar position-absolute top-50 start-0 ms-5">
          <img
            class="avatar-img rounded-circle border border-2 border-light d-none d-md-block"
            :src="avatar4"
            alt="avatar"
          />
        </div>
        <div class="avatar avatar-sm position-absolute bottom-0 start-0 mb-5 ms-8">
          <img
            class="avatar-img rounded-circle border border-2 border-light d-none d-md-block"
            :src="avatar7"
            alt="avatar"
          />
        </div>
        <div class="avatar avatar-lg position-absolute top-0 start-0 mt-5">
          <img
            class="avatar-img rounded-circle border border-2 border-light d-none d-lg-block"
            :src="avatar6"
            alt="avatar"
          />
        </div>
        <b-row class="mb-5">
          <b-col cols="12">
            <h2>Hear From Our Happy Clients</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="9" xl="7" class="mx-auto">
            <div class="tiny-slider dots-primary">
              <CustomTinySlider
                class="tiny-slider-testSlide"
                id="tesimonial-slider"
                :settings="testimonialSliderSettings"
              >
                <div v-for="(item, idx) in testimonialSlides" :key="idx">
                  <div class="avatar avatar-xl mb-4">
                    <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
                  </div>
                  <p class="h5 fw-light mb-3">"{{ item.description }}"</p>
                  <ul class="list-inline small mb-3">
                    <li
                      v-for="(_star, idx) in new Array(Math.floor(item.rating))"
                      :key="idx"
                      class="list-inline-item me-1 small"
                    >
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li v-if="!Number.isInteger(item.rating)" class="list-inline-item me-1 small">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                    </li>
                    <template v-if="item.rating < 5">
                      <li
                        v-for="(_val, idx) in new Array(5 - Math.ceil(item.rating))"
                        :key="idx"
                        class="list-inline-item me-0 small"
                      >
                        <font-awesome-icon :icon="faStar"></font-awesome-icon>
                      </li>
                    </template>
                  </ul>
                  <h5 class="mb-0">{{ item.name }}</h5>
                  <span>{{ item.position }}</span>
                </div>
              </CustomTinySlider>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import mapImg from '@/assets/images/element/map.svg'
import { testimonialSlides } from '../data'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import { useLayoutStore } from '@/stores/layout'
import type { TinySliderSettings } from 'tiny-slider'
import CustomTinySlider from '@/components/CustomTinySlider.vue'

const useLayout = useLayoutStore()

const testimonialSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  gutter: 30,
  controls: false,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 1,
  autoplayDirection: useLayout.dir !== 'rtl' ? 'forward' : 'backward',
  nav: true
}
</script>
