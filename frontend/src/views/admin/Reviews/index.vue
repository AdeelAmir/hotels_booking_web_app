<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <h1 class="h3 mb-0">Reviews</h1>
      </b-col>
    </b-row>

    <StatisticCards />

    <AllReviews />
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCards from '@/views/admin/Reviews/components/StatisticCards.vue'
import AllReviews from '@/views/admin/Reviews/components/AllReviews.vue'
</script>
