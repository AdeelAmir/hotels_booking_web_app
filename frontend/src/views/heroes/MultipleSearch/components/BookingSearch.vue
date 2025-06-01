<template>
  <section class="pt-0">
    <b-container
      fluid
      :style="{
        backgroundImage: `url(${bgImg9})`,
        backgroundPosition: 'center left',
        backgroundSize: 'cover'
      }"
    >
      <b-row>
        <b-col md="6" class="mx-auto text-center pt-7 pb-9">
          <h1 class="text-white">Hotel, cab, flight & tour experience</h1>
          <p class="lead text-white mb-0">
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-n8">
      <b-row>
        <b-tabs
          nav-wrapper-class="mx-auto col-xl-6 col-lg-9 col-11"
          nav-class="nav nav-tabs nav-bottom-line nav-justified nav-responsive bg-mode rounded-top z-index-9 position-relative pt-2 pb-0 px-4"
          align="center"
        >
          <b-tab>
            <template #title>
              <font-awesome-icon :icon="faHotel" class="fa-fw me-2" />
              Hotel
            </template>
            <HotelForm />
          </b-tab>

          <b-tab>
            <template #title>
              <font-awesome-icon :icon="faPlane" class="fa-fw me-2" />
              Flight
            </template>
            <FlightForm />
          </b-tab>

          <b-tab>
            <template #title>
              <font-awesome-icon :icon="faGlobeAmericas" class="fa-fw me-2" />
              Tour
            </template>
            <TourForm />
          </b-tab>

          <b-tab>
            <template #title>
              <font-awesome-icon :icon="faCar" class="fa-fw me-2" />
              Cabs
            </template>
            <CabsForm />
          </b-tab>
        </b-tabs>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg9 from '@/assets/images/bg/08.jpg'

import { faHotel, faPlane, faGlobeAmericas, faCar } from '@fortawesome/free-solid-svg-icons'

import HotelForm from '@/views/heroes/MultipleSearch/components/HotelForm.vue'
import FlightForm from '@/views/heroes/MultipleSearch/components/FlightForm.vue'
import TourForm from '@/views/heroes/MultipleSearch/components/TourForm.vue'
import CabsForm from '@/views/heroes/MultipleSearch/components/CabsForm.vue'
</script>
