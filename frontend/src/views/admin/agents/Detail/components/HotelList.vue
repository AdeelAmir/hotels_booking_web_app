<template>
  <b-row class="g-4">
    <b-col cols="12">
      <h4 class="mb-0">Hotel list</h4>
    </b-col>

    <b-col v-for="(hotel, idx) in hotelsList" lg="6" :key="idx">
      <HotelCard :hotel="hotel" />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import HotelCard from '@/views/admin/agents/Detail/components/HotelCard.vue'
import { hotelsList } from '@/views/admin/agents/Detail/data'
</script>
