<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0 items-center gap-1">
              <BIconHouseDoor class="fa-fw me-1 mb-1" />
              Dashboard
            </h1>
          </b-col>
        </b-row>
        <b-row class="g-4">
          <b-col v-for="(item, idx) in statistics" :key="idx" sm="6" xl="3">
            <StatisticsCard :card="item" />
          </b-col>
        </b-row>
        <b-row class="g-4">
          <b-col lg="7" xl="8">
            <BookingStats />
          </b-col>

          <b-col lg="5" xl="4">
            <BookingTraffic />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <UpcomingBookings />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import AgentLayout from '@/layouts/AgentLayout.vue'
import StatisticsCard from '@/views/agent/Dashboard/components/StatisticsCard.vue'
import BookingStats from '@/views/agent/Dashboard/components/BookingStats.vue'
import BookingTraffic from '@/views/agent/Dashboard/components/BookingTraffic.vue'
import UpcomingBookings from '@/views/agent/Dashboard/components/UpcomingBookings.vue'

import { statistics } from '@/views/agent/Dashboard/data'
import { BIconHouseDoor } from 'bootstrap-icons-vue'
</script>
