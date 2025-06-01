<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <h1 class="h3 mb-0">Earnings</h1>
      </b-col>
    </b-row>

    <StatisticCards />

    <PaymentHistory />
  </AdminLayout>
</template>

<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCards from '@/views/admin/Earnings/components/StatisticCards.vue'
import PaymentHistory from '@/views/admin/Earnings/components/PaymentHistory.vue'
</script>
