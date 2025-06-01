<template>
  <section class="position-relative overflow-hidden pt-4 pt-sm-6">
    <div class="position-absolute top-0 start-0 d-none d-xl-block">
      <img :src="landingBg2" alt="" />
    </div>

    <b-container>
      <b-row class="g-4 g-lg-5">
        <b-col md="10" class="mx-auto text-center position-relative">
          <h1 class="display-5">Booking HTML Theme</h1>

          <div class="hstack gap-3 flex-wrap align-items-center justify-content-center mt-4">
            <h6 class="mb-0 small">Category:</h6>

            <router-link
              v-for="(category, idx) in categories"
              :key="idx"
              :to="{ name: category.link?.name }"
              class="btn btn-sm btn-light mb-0"
            >
              <font-awesome-icon :icon="category.icon" />
              {{ category.label }}
            </router-link>
          </div>

          <div class="mx-auto position-relative mt-6">
            <figure class="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
              <svg class="fill-warning" width="77px" height="77px">
                <path
                  d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"
                ></path>
              </svg>
            </figure>

            <figure class="position-absolute top-0 start-100 translate-middle d-none d-md-block">
              <svg height="200" class="fill-primary opacity-5" viewBox="0 0 340 340">
                <circle cx="194.2" cy="2.2" r="2.2"></circle>
                <circle cx="2.2" cy="2.2" r="2.2"></circle>
                <circle cx="218.2" cy="2.2" r="2.2"></circle>
                <circle cx="26.2" cy="2.2" r="2.2"></circle>
                <circle cx="242.2" cy="2.2" r="2.2"></circle>
                <circle cx="50.2" cy="2.2" r="2.2"></circle>
                <circle cx="266.2" cy="2.2" r="2.2"></circle>
                <circle cx="74.2" cy="2.2" r="2.2"></circle>
                <circle cx="290.2" cy="2.2" r="2.2"></circle>
                <circle cx="98.2" cy="2.2" r="2.2"></circle>
                <circle cx="314.2" cy="2.2" r="2.2"></circle>
                <circle cx="122.2" cy="2.2" r="2.2"></circle>
                <circle cx="338.2" cy="2.2" r="2.2"></circle>
                <circle cx="146.2" cy="2.2" r="2.2"></circle>
                <circle cx="170.2" cy="2.2" r="2.2"></circle>
                <circle cx="194.2" cy="26.2" r="2.2"></circle>
                <circle cx="2.2" cy="26.2" r="2.2"></circle>
                <circle cx="218.2" cy="26.2" r="2.2"></circle>
                <circle cx="26.2" cy="26.2" r="2.2"></circle>
                <circle cx="242.2" cy="26.2" r="2.2"></circle>
                <circle cx="50.2" cy="26.2" r="2.2"></circle>
                <circle cx="266.2" cy="26.2" r="2.2"></circle>
                <circle cx="74.2" cy="26.2" r="2.2"></circle>
                <circle cx="290.2" cy="26.2" r="2.2"></circle>
                <circle cx="98.2" cy="26.2" r="2.2"></circle>
                <circle cx="314.2" cy="26.2" r="2.2"></circle>
                <circle cx="122.2" cy="26.2" r="2.2"></circle>
                <circle cx="338.2" cy="26.2" r="2.2"></circle>
                <circle cx="146.2" cy="26.2" r="2.2"></circle>
                <circle cx="170.2" cy="26.2" r="2.2"></circle>
                <circle cx="194.2" cy="50.2" r="2.2"></circle>
                <circle cx="2.2" cy="50.2" r="2.2"></circle>
                <circle cx="218.2" cy="50.2" r="2.2"></circle>
                <circle cx="26.2" cy="50.2" r="2.2"></circle>
                <circle cx="242.2" cy="50.2" r="2.2"></circle>
                <circle cx="50.2" cy="50.2" r="2.2"></circle>
                <circle cx="266.2" cy="50.2" r="2.2"></circle>
                <circle cx="74.2" cy="50.2" r="2.2"></circle>
                <circle cx="290.2" cy="50.2" r="2.2"></circle>
                <circle cx="98.2" cy="50.2" r="2.2"></circle>
                <circle cx="314.2" cy="50.2" r="2.2"></circle>
                <circle cx="122.2" cy="50.2" r="2.2"></circle>
                <circle cx="338.2" cy="50.2" r="2.2"></circle>
                <circle cx="146.2" cy="50.2" r="2.2"></circle>
                <circle cx="170.2" cy="50.2" r="2.2"></circle>
                <circle cx="194.2" cy="74.2" r="2.2"></circle>
                <circle cx="2.2" cy="74.2" r="2.2"></circle>
                <circle cx="218.2" cy="74.2" r="2.2"></circle>
                <circle cx="26.2" cy="74.2" r="2.2"></circle>
                <circle cx="242.2" cy="74.2" r="2.2"></circle>
                <circle cx="50.2" cy="74.2" r="2.2"></circle>
                <circle cx="266.2" cy="74.2" r="2.2"></circle>
                <circle cx="74.2" cy="74.2" r="2.2"></circle>
                <circle cx="290.2" cy="74.2" r="2.2"></circle>
                <circle cx="98.2" cy="74.2" r="2.2"></circle>
                <circle cx="314.2" cy="74.2" r="2.2"></circle>
                <circle cx="122.2" cy="74.2" r="2.2"></circle>
                <circle cx="338.2" cy="74.2" r="2.2"></circle>
                <circle cx="146.2" cy="74.2" r="2.2"></circle>
                <circle cx="170.2" cy="74.2" r="2.2"></circle>
                <circle cx="194.2" cy="98.2" r="2.2"></circle>
                <circle cx="2.2" cy="98.2" r="2.2"></circle>
                <circle cx="218.2" cy="98.2" r="2.2"></circle>
                <circle cx="26.2" cy="98.2" r="2.2"></circle>
                <circle cx="242.2" cy="98.2" r="2.2"></circle>
                <circle cx="50.2" cy="98.2" r="2.2"></circle>
                <circle cx="266.2" cy="98.2" r="2.2"></circle>
                <circle cx="74.2" cy="98.2" r="2.2"></circle>
                <circle cx="290.2" cy="98.2" r="2.2"></circle>
                <circle cx="98.2" cy="98.2" r="2.2"></circle>
                <circle cx="314.2" cy="98.2" r="2.2"></circle>
                <circle cx="122.2" cy="98.2" r="2.2"></circle>
                <circle cx="338.2" cy="98.2" r="2.2"></circle>
                <circle cx="146.2" cy="98.2" r="2.2"></circle>
                <circle cx="170.2" cy="98.2" r="2.2"></circle>
                <circle cx="194.2" cy="122.2" r="2.2"></circle>
                <circle cx="2.2" cy="122.2" r="2.2"></circle>
                <circle cx="218.2" cy="122.2" r="2.2"></circle>
                <circle cx="26.2" cy="122.2" r="2.2"></circle>
                <circle cx="242.2" cy="122.2" r="2.2"></circle>
                <circle cx="50.2" cy="122.2" r="2.2"></circle>
                <circle cx="266.2" cy="122.2" r="2.2"></circle>
                <circle cx="74.2" cy="122.2" r="2.2"></circle>
                <circle cx="290.2" cy="122.2" r="2.2"></circle>
                <circle cx="98.2" cy="122.2" r="2.2"></circle>
                <circle cx="314.2" cy="122.2" r="2.2"></circle>
                <circle cx="122.2" cy="122.2" r="2.2"></circle>
                <circle cx="338.2" cy="122.2" r="2.2"></circle>
                <circle cx="146.2" cy="122.2" r="2.2"></circle>
                <circle cx="170.2" cy="122.2" r="2.2"></circle>
                <circle cx="194.2" cy="146.2" r="2.2"></circle>
                <circle cx="2.2" cy="146.2" r="2.2"></circle>
                <circle cx="218.2" cy="146.2" r="2.2"></circle>
                <circle cx="26.2" cy="146.2" r="2.2"></circle>
                <circle cx="242.2" cy="146.2" r="2.2"></circle>
                <circle cx="50.2" cy="146.2" r="2.2"></circle>
                <circle cx="266.2" cy="146.2" r="2.2"></circle>
                <circle cx="74.2" cy="146.2" r="2.2"></circle>
                <circle cx="290.2" cy="146.2" r="2.2"></circle>
                <circle cx="98.2" cy="146.2" r="2.2"></circle>
                <circle cx="314.2" cy="146.2" r="2.2"></circle>
                <circle cx="122.2" cy="146.2" r="2.2"></circle>
                <circle cx="338.2" cy="146.2" r="2.2"></circle>
                <circle cx="146.2" cy="146.2" r="2.2"></circle>
                <circle cx="170.2" cy="146.2" r="2.2"></circle>
                <circle cx="194.2" cy="170.2" r="2.2"></circle>
                <circle cx="2.2" cy="170.2" r="2.2"></circle>
                <circle cx="218.2" cy="170.2" r="2.2"></circle>
                <circle cx="26.2" cy="170.2" r="2.2"></circle>
                <circle cx="242.2" cy="170.2" r="2.2"></circle>
                <circle cx="50.2" cy="170.2" r="2.2"></circle>
                <circle cx="266.2" cy="170.2" r="2.2"></circle>
                <circle cx="74.2" cy="170.2" r="2.2"></circle>
                <circle cx="290.2" cy="170.2" r="2.2"></circle>
                <circle cx="98.2" cy="170.2" r="2.2"></circle>
                <circle cx="314.2" cy="170.2" r="2.2"></circle>
                <circle cx="122.2" cy="170.2" r="2.2"></circle>
                <circle cx="338.2" cy="170.2" r="2.2"></circle>
                <circle cx="146.2" cy="170.2" r="2.2"></circle>
                <circle cx="170.2" cy="170.2" r="2.2"></circle>
                <circle cx="194.2" cy="194.2" r="2.2"></circle>
                <circle cx="2.2" cy="194.2" r="2.2"></circle>
                <circle cx="218.2" cy="194.2" r="2.2"></circle>
                <circle cx="26.2" cy="194.2" r="2.2"></circle>
                <circle cx="242.2" cy="194.2" r="2.2"></circle>
                <circle cx="50.2" cy="194.2" r="2.2"></circle>
                <circle cx="266.2" cy="194.2" r="2.2"></circle>
                <circle cx="74.2" cy="194.2" r="2.2"></circle>
                <circle cx="290.2" cy="194.2" r="2.2"></circle>
                <circle cx="98.2" cy="194.2" r="2.2"></circle>
                <circle cx="314.2" cy="194.2" r="2.2"></circle>
                <circle cx="122.2" cy="194.2" r="2.2"></circle>
                <circle cx="338.2" cy="194.2" r="2.2"></circle>
                <circle cx="146.2" cy="194.2" r="2.2"></circle>
                <circle cx="170.2" cy="194.2" r="2.2"></circle>
                <circle cx="194.2" cy="218.2" r="2.2"></circle>
                <circle cx="2.2" cy="218.2" r="2.2"></circle>
                <circle cx="218.2" cy="218.2" r="2.2"></circle>
                <circle cx="26.2" cy="218.2" r="2.2"></circle>
                <circle cx="242.2" cy="218.2" r="2.2"></circle>
                <circle cx="50.2" cy="218.2" r="2.2"></circle>
                <circle cx="266.2" cy="218.2" r="2.2"></circle>
                <circle cx="74.2" cy="218.2" r="2.2"></circle>
                <circle cx="290.2" cy="218.2" r="2.2"></circle>
                <circle cx="98.2" cy="218.2" r="2.2"></circle>
                <circle cx="314.2" cy="218.2" r="2.2"></circle>
                <circle cx="122.2" cy="218.2" r="2.2"></circle>
                <circle cx="338.2" cy="218.2" r="2.2"></circle>
                <circle cx="146.2" cy="218.2" r="2.2"></circle>
                <circle cx="170.2" cy="218.2" r="2.2"></circle>
                <circle cx="194.2" cy="242.2" r="2.2"></circle>
                <circle cx="2.2" cy="242.2" r="2.2"></circle>
                <circle cx="218.2" cy="242.2" r="2.2"></circle>
                <circle cx="26.2" cy="242.2" r="2.2"></circle>
                <circle cx="242.2" cy="242.2" r="2.2"></circle>
                <circle cx="50.2" cy="242.2" r="2.2"></circle>
                <circle cx="266.2" cy="242.2" r="2.2"></circle>
                <circle cx="74.2" cy="242.2" r="2.2"></circle>
                <circle cx="290.2" cy="242.2" r="2.2"></circle>
                <circle cx="98.2" cy="242.2" r="2.2"></circle>
                <circle cx="314.2" cy="242.2" r="2.2"></circle>
                <circle cx="122.2" cy="242.2" r="2.2"></circle>
                <circle cx="338.2" cy="242.2" r="2.2"></circle>
                <circle cx="146.2" cy="242.2" r="2.2"></circle>
                <circle cx="170.2" cy="242.2" r="2.2"></circle>
                <circle cx="194.2" cy="266.2" r="2.2"></circle>
                <circle cx="2.2" cy="266.2" r="2.2"></circle>
                <circle cx="218.2" cy="266.2" r="2.2"></circle>
                <circle cx="26.2" cy="266.2" r="2.2"></circle>
                <circle cx="242.2" cy="266.2" r="2.2"></circle>
                <circle cx="50.2" cy="266.2" r="2.2"></circle>
                <circle cx="266.2" cy="266.2" r="2.2"></circle>
                <circle cx="74.2" cy="266.2" r="2.2"></circle>
                <circle cx="290.2" cy="266.2" r="2.2"></circle>
                <circle cx="98.2" cy="266.2" r="2.2"></circle>
                <circle cx="314.2" cy="266.2" r="2.2"></circle>
                <circle cx="122.2" cy="266.2" r="2.2"></circle>
                <circle cx="338.2" cy="266.2" r="2.2"></circle>
                <circle cx="146.2" cy="266.2" r="2.2"></circle>
                <circle cx="170.2" cy="266.2" r="2.2"></circle>
                <circle cx="194.2" cy="290.2" r="2.2"></circle>
                <circle cx="2.2" cy="290.2" r="2.2"></circle>
                <circle cx="218.2" cy="290.2" r="2.2"></circle>
                <circle cx="26.2" cy="290.2" r="2.2"></circle>
                <circle cx="242.2" cy="290.2" r="2.2"></circle>
                <circle cx="50.2" cy="290.2" r="2.2"></circle>
                <circle cx="266.2" cy="290.2" r="2.2"></circle>
                <circle cx="74.2" cy="290.2" r="2.2"></circle>
                <circle cx="290.2" cy="290.2" r="2.2"></circle>
                <circle cx="98.2" cy="290.2" r="2.2"></circle>
                <circle cx="314.2" cy="290.2" r="2.2"></circle>
                <circle cx="122.2" cy="290.2" r="2.2"></circle>
                <circle cx="338.2" cy="290.2" r="2.2"></circle>
                <circle cx="146.2" cy="290.2" r="2.2"></circle>
                <circle cx="170.2" cy="290.2" r="2.2"></circle>
                <circle cx="194.2" cy="314.2" r="2.2"></circle>
                <circle cx="2.2" cy="314.2" r="2.2"></circle>
                <circle cx="218.2" cy="314.2" r="2.2"></circle>
                <circle cx="26.2" cy="314.2" r="2.2"></circle>
                <circle cx="242.2" cy="314.2" r="2.2"></circle>
                <circle cx="50.2" cy="314.2" r="2.2"></circle>
                <circle cx="266.2" cy="314.2" r="2.2"></circle>
                <circle cx="74.2" cy="314.2" r="2.2"></circle>
                <circle cx="290.2" cy="314.2" r="2.2"></circle>
                <circle cx="98.2" cy="314.2" r="2.2"></circle>
                <circle cx="314.2" cy="314.2" r="2.2"></circle>
                <circle cx="122.2" cy="314.2" r="2.2"></circle>
                <circle cx="338.2" cy="314.2" r="2.2"></circle>
                <circle cx="146.2" cy="314.2" r="2.2"></circle>
                <circle cx="170.2" cy="314.2" r="2.2"></circle>
                <circle cx="194.2" cy="338.2" r="2.2"></circle>
                <circle cx="2.2" cy="338.2" r="2.2"></circle>
                <circle cx="218.2" cy="338.2" r="2.2"></circle>
                <circle cx="26.2" cy="338.2" r="2.2"></circle>
                <circle cx="242.2" cy="338.2" r="2.2"></circle>
                <circle cx="50.2" cy="338.2" r="2.2"></circle>
                <circle cx="266.2" cy="338.2" r="2.2"></circle>
                <circle cx="74.2" cy="338.2" r="2.2"></circle>
                <circle cx="290.2" cy="338.2" r="2.2"></circle>
                <circle cx="98.2" cy="338.2" r="2.2"></circle>
                <circle cx="314.2" cy="338.2" r="2.2"></circle>
                <circle cx="122.2" cy="338.2" r="2.2"></circle>
                <circle cx="338.2" cy="338.2" r="2.2"></circle>
                <circle cx="146.2" cy="338.2" r="2.2"></circle>
                <circle cx="170.2" cy="338.2" r="2.2"></circle>
              </svg>
            </figure>
            <img :src="landingBg1" class="rounded shadow border position-relative" alt="" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import landingBg1 from '@/assets/images/landing/bg/01.jpg'
import landingBg2 from '@/assets/images/landing/bg/02.png'
import { categories } from '@/views/Landing/data'
</script>
