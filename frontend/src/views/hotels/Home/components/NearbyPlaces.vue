<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Explore Nearby</h2>
        </b-col>
      </b-row>
      <b-row class="g-4 g-md-5">
        <b-col v-for="place in nearbyPlacesData" cols="6" sm="4" lg="3" xl="2" :key="place.name">
          <b-card no-body class="bg-transparent text-center p-1 h-100">
            <img :src="place.image" class="rounded-circle" alt="place" />
            <b-card-body class="p-0 pt-3">
              <b-card-title tag="h5">
                <router-link to="" class="stretched-link"> {{ place.name }}</router-link>
              </b-card-title>
              <span>{{ place.travelTime }} drive</span>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { nearbyPlacesData } from '@/views/hotels/Home/data'
</script>
