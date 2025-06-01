<template>
  <b-card no-body class="border rounded-3 overflow-hidden">
    <b-row class="g-0 align-items-center">
      <b-col sm="6">
        <img :src="offer.image" class="rounded-0" alt="offer1" />
      </b-col>

      <b-col sm="6">
        <b-card-body class="px-3">
          <b-card-title tag="h6">
            <router-link :to="{ name: offer.link?.name }" class="stretched-link">
              {{ offer.title }}
            </router-link>
          </b-card-title>
          <p class="mb-0">{{ offer.description }}</p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { OfferType } from '@/views/hotels/Home/type'

defineProps({
  offer: {
    type: Object as PropType<OfferType>,
    required: true
  }
})
</script>
