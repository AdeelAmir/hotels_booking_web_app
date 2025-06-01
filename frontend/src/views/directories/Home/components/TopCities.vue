<template>
  <section class="bg-light">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="4">
          <h2 class="mb-4">Search destination by city</h2>
          <b-button variant="primary" class="mb-0">View all</b-button>
        </b-col>
        <b-col lg="8">
          <b-row class="g-4">
            <b-col v-for="(city, idx) in topCities" :key="idx" md="6">
              <b-card no-body class="h-100 p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <img :src="city.image" class="h-70px rounded-2" alt="city" />
                    <div class="ms-3">
                      <h5 class="mb-0">
                        <router-link to="#">{{ city.name }}</router-link>
                      </h5>
                      <span>{{ city.listing }} Listing</span>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary-soft btn-round flex-shrink-0 ms-2 mb-0 flex-centered"
                  >
                    <BIconArrowRight />
                  </button>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { topCities } from '@/views/directories/Home/data'
</script>
