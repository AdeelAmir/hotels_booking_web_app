<template>
  <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xxl-5 g-4">
    <b-col v-for="(hotel, idx) in hotelList" :key="idx">
      <HotelGridCard :hotel="hotel" />
    </b-col>
  </b-row>

  <div class="mt-4">
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import HotelGridCard from '@/views/admin/bookings/List/components/HotelGridCard.vue'
import Pagination from '@/views/admin/bookings/List/components/Pagination.vue'
import { hotelList } from '@/views/admin/bookings/List/data'
</script>
