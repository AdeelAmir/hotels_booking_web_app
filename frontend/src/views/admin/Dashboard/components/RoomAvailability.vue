<template>
  <b-card no-body class="shadow h-100">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Room Availability</h5>
    </b-card-header>
    <b-card-body class="p-3">
      <b-col sm="6" class="mx-auto">
        <VueApexCharts
          class="d-flex justify-content-center"
          height="300"
          width="300"
          type="donut"
          :options="chartOpts"
          :series="chartOpts.series"
        />
      </b-col>
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item d-flex justify-content-between">
          <span class="h6 fw-light mb-0 items-center gap-1">
            <font-awesome-icon :icon="faCircle" class="text-success me-2" /> Available
          </span>
          <span class="h6 fw-light mb-0">73 Rooms</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span class="h6 fw-light mb-0 items-center gap-1">
            <font-awesome-icon :icon="faCircle" class="text-danger me-2" /> Sold Out
          </span>
          <span class="h6 fw-light mb-0">245 Rooms</span>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import type { ApexOptions } from 'apexcharts'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}

const chartOpts: ApexOptions = {
  series: [70, 30],
  labels: ['Sold Out', 'Available'],
  chart: {
    height: 300,
    width: 300,
    offsetX: 0,
    type: 'donut',
    sparkline: {
      enabled: !0
    }
  },
  colors: [getRootColor('--bs-danger'), getRootColor('--bs-success')],
  tooltip: {
    theme: 'dark'
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          height: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}
</script>
