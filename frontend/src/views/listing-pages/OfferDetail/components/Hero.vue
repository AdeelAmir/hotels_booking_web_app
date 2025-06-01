<template>
  <section class="py-0">
    <b-container>
      <div
        class="rounded-3 p-4 p-sm-5"
        :style="{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      >
        <b-row>
          <b-col md="6">
            <h1 class="h2 text-white mb-3">#Weekly Saving on Remove.com</h1>
            <div class="bg-warning rounded-2 p-3 mb-3">
              <h5 class="text-dark">Get Up To</h5>
              <h4 class="text-dark mb-0">25% Off on Travel Booking</h4>
            </div>
            <p class="text-white mb-3">
              Expand knowledge by reading book Two before narrow not relied on.
            </p>
            <b-button variant="dark" class="mb-0">
              <span class="items-center">
                View all Listing
                <BIconArrowRight class="fa-fw ms-2" />
              </span>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import backgroundImg from '@/assets/images/bg/07.jpg'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>
