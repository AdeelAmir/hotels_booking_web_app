<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col md="8" class="mx-auto text-center">
          <h2>All the features you need</h2>
          <p>
            Multiple homepage demos, tons of form options, header footer styles, handpicked pure
            vanilla javascript (NO jQuery dependency) plugins.
          </p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-5">
        <b-col lg="5">
          <b-card no-body class="shadow p-2 h-100">
            <img :src="landingBg2" class="rounded" alt="" />
            <b-card-body>
              <h5 class="mb-2">Multiple header and footer styles</h5>
              <small
                >The header and footer are key elements of a website. So, we've crafted tons of
                different header & footer options to choose from. Check home 1 Responsive for mobile
                menu(App style)
              </small>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="7">
          <b-card
            no-body
            class="p-8 position-relative h-100"
            :style="{
              backgroundImage: `url(${landingBg3})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }"
          >
            <div class="card-img-overlay d-flex w-100">
              <b-col md="7" class="m-auto text-center">
                <b-card-title class="text-dark">Multiple Hero Section options</b-card-title>
                <a href="#" class="btn btn-sm btn-dark">View all</a>
              </b-col>
            </div>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card no-body class="bg-primary p-4 h-100">
            <h2 class="display-5 text-white">70+</h2>
            <h4 class="text-white mb-3">HTML Templates includes</h4>
            <p class="text-white mb-0">
              Created a set of 70+ pages for a variety of purposes that makes it the ideal point to
              start building websites of any kind.
            </p>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card no-body class="shadow border p-0 h-100 position-relative overflow-hidden">
            <div
              class="text-bg-primary p-3 rounded position-absolute top-50 start-50 translate-middle"
            >
              Dark mode
            </div>
            <img :src="landingBg4" class="rounded" alt="" />
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card no-body class="bg-primary bg-opacity-10 shadow p-0 overflow-hidden h-100">
            <b-card-header class="bg-transparent p-4 pb-0 text-center">
              <h5>Most needed forms design</h5>
              <a href="#" class="btn btn-sm btn-dark">View all</a>
            </b-card-header>
            <b-card-body class="p-3 mt-n4">
              <img :src="landingBg5" class="rounded" alt="" />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import landingBg2 from '@/assets/images/landing/bg/02.jpg'
import landingBg3 from '@/assets/images/landing/bg/03.jpg'
import landingBg4 from '@/assets/images/landing/bg/04.jpg'
import landingBg5 from '@/assets/images/landing/bg/05.jpg'
</script>
