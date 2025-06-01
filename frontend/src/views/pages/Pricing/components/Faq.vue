<template>
  <section class="pt-0">
    <b-container class="mt-4">
      <b-row class="mb-4 mb-md-5">
        <b-col cols="12" class="text-center">
          <h2>Frequently Asked Questions</h2>
          <p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </b-col>
      </b-row>
      <b-row class="g-4 g-md-5">
        <b-col md="6" lg="4" v-for="(faq, idx) in pricingFAQs" :key="idx">
          <b-card no-body class="border bg-transparent h-100 p-4">
            <h6>{{ faq.title }}</h6>
            <p class="mb-0">{{ faq.description }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { pricingFAQs } from '@/views/pages/Pricing/data'
</script>
