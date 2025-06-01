<template>
  <section class="pt-4 pt-lg-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h1 class="fs-2 mb-0">Privacy Policy</h1>
          <img :src="about3" class="h-lg-400px rounded-3 mt-4" alt="" />
        </b-col>
      </b-row>

      <b-row>
        <b-col md="10" class="mx-auto">
          <div class="vstack gap-3">
            <BookingPolicy />

            <CancellationPolicy />

            <DateChangePolicy />

            <SpecialRequest />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import about3 from '@/assets/images/about/03.jpg'
import BookingPolicy from '@/views/pages/Help/PrivacyPolicy/components/BookingPolicy.vue'
import CancellationPolicy from '@/views/pages/Help/PrivacyPolicy/components/CancellationPolicy.vue'
import DateChangePolicy from '@/views/pages/Help/PrivacyPolicy/components/DateChangePolicy.vue'
import SpecialRequest from '@/views/pages/Help/PrivacyPolicy/components/SpecialRequest.vue'
</script>
