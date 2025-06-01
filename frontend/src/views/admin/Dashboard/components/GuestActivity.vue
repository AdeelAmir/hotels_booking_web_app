<template>
  <b-card no-body class="shadow h-100">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Guest Activity</h5>
    </b-card-header>

    <b-card-body>
      <div class="d-flex gap-4 mb-3">
        <h6>
          <span class="fw-light"> <BIconSquareFill class="text-primary" /> Check-in: </span>
          475 Guests
        </h6>
        <h6>
          <span class="fw-light"> <BIconSquareFill class="text-info" /> Check-out: </span>
          157 Guests
        </h6>
      </div>

      <VueApexCharts
        class="mt-2"
        height="350"
        type="area"
        :options="chartOpts"
        :series="chartOpts.series"
      />
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { BIconSquareFill } from 'bootstrap-icons-vue'
import VueApexCharts from 'vue3-apexcharts'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}

const chartOpts: ApexOptions = {
  series: [
    {
      name: 'Check-in',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Check-out',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  chart: {
    height: 350,
    type: 'area'
  },
  colors: [getRootColor('--bs-primary'), getRootColor('--bs-info')],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'category',
    categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  }
}
</script>
