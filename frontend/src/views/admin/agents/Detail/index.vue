<template>
  <AdminLayout>
    <b-row class="g-4 mb-4">
      <b-col v-for="(item, idx) in statisticsData" :key="idx" lg="4">
        <StatisticCard :item="item" />
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <b-col md="4" xxl="3">
        <ProfileCard />
      </b-col>

      <b-col md="8" xxl="9">
        <PersonalInformation />
      </b-col>
    </b-row>

    <HotelList />
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCard from '@/views/admin/agents/Detail/components/StatisticCard.vue'
import ProfileCard from '@/views/admin/agents/Detail/components/ProfileCard.vue'
import PersonalInformation from '@/views/admin/agents/Detail/components/PersonalInformation.vue'
import HotelList from '@/views/admin/agents/Detail/components/HotelList.vue'
import { statisticsData } from '@/views/admin/agents/Detail/data'
</script>
