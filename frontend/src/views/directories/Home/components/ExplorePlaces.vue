<template>
  <section class="pt-0 pt-sm-5">
    <b-container>
      <b-row class="mb-4 mb-sm-5">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Great places to Explore</h2>
          <p class="mb-0">
            Book your hotel with us and don't forget to grab an awesome hotel deal to save massive
            on your stay.
          </p>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col v-for="(place, idx) in greatPlaces" sm="6" lg="4" xl="3" :key="idx">
          <PlaceCard :place="place" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import PlaceCard from '@/views/directories/Home/components/PlaceCard.vue'
import { greatPlaces } from '@/views/directories/Home/data'
</script>
