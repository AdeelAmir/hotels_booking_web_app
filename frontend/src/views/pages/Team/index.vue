<template>
  <PageLayout>
    <Hero />
    <Team />
    <section>
      <b-container>
        <div class="bg-warning bg-opacity-50 rounded-3 p-4 p-sm-5">
          <b-row class="align-items-center position-relative">
            <b-col lg="8">
              <div class="d-flex">
                <h3>Let's Enjoy Your Trip With Booking</h3>
                <img :src="element4Img" class="h-40px ms-3" alt="" />
              </div>
              <p class="mb-3 mb-lg-0">
                He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
                difficulty gay assistance joy.
              </p>
            </b-col>
            <b-col lg="4" class="text-lg-end">
              <router-link :to="{ name: 'flights.list' }" class="btn btn-lg btn-dark mb-0"
                >Book Your Destination</router-link
              >
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
import Hero from '@/views/pages/Team/components/Hero.vue'
import Team from '@/views/pages/Team/components/Team.vue'
import { element4Img } from '@/views/pages/data'
</script>
