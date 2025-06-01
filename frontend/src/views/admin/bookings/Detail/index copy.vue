<template>
  <AdminLayout>
    <HotelDetails />
    <HotelBookings />
  </AdminLayout>
</template>

<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import HotelDetails from '@/views/admin/bookings/Detail/components/HotelDetails.vue'
import HotelBookings from '@/views/admin/bookings/Detail/components/HotelBookings.vue'
</script>
