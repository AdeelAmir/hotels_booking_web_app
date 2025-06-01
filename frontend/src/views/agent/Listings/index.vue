<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0 items-center gap-1">
              <BIconJournals class="fa-fw me-1" />
              Listings
            </h1>
          </b-col>
        </b-row>
        <b-row class="g-4">
          <b-col v-for="(item, idx) in statistics" md="6" xl="4" :key="idx">
            <StatisticCard :item="item" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-card no-body class="border">
              <b-card-header class="border-bottom">
                <h5 class="card-header-title">
                  My Listings
                  <span class="badge bg-primary bg-opacity-10 text-primary ms-2"
                    >{{ hotelBookingList.length }} Items</span
                  >
                </h5>
              </b-card-header>
              <b-card-body class="vstack gap-3">
                <ListingCard v-for="(hotel, idx) in hotelBookingList" :key="idx" :hotel="hotel" />
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import { BIconJournals } from 'bootstrap-icons-vue'
import StatisticCard from '@/views/agent/Listings/components/StatisticCard.vue'
import ListingCard from '@/views/agent/Listings/components/ListingCard.vue'
import AgentLayout from '@/layouts/AgentLayout.vue'
import { hotelBookingList, statistics } from '@/views/agent/Listings/data'
</script>
