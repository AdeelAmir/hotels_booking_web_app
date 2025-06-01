<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0 items-center gap-1">
              <BIconGraphUpArrow class="fa-fw" />
              Earnings
            </h1>
          </b-col>
        </b-row>

        <EarningStatistics />

        <b-row>
          <b-col cols="12">
            <EarningChart />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <InvoiceHistory />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import AgentLayout from '@/layouts/AgentLayout.vue'
import EarningStatistics from '@/views/agent/Earnings/components/EarningStatistics.vue'
import EarningChart from '@/views/agent/Earnings/components/EarningChart.vue'
import InvoiceHistory from '@/views/agent/Earnings/components/InvoiceHistory.vue'

import { BIconGraphUpArrow } from 'bootstrap-icons-vue'
</script>
