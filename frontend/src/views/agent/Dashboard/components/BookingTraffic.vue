<template>
  <b-card no-body class="border h-100">
    <b-card-header class="border-bottom d-flex justify-content-between align-items-center">
      <h5 class="card-header-title">Booking Traffic</h5>
      <router-link to="" class="btn btn-link p-0 mb-0"> View all </router-link>
    </b-card-header>
    <b-card-body class="p-3">
      <div class="d-flex justify-content-center">
        <VueApexCharts
          class="mt-2"
          type="donut"
          width="200"
          height="200"
          :options="chartOpts"
          :series="chartOpts.series"
        />
        <div class="d-flex justify-content-center" id="ChartTrafficViews" />
      </div>
      <ul class="list-group list-group-borderless align-items-center mt-3">
        <li class="list-group-item">
          <font-awesome-icon :icon="faCircle" class="text-primary me-2" />
          Organic
        </li>
        <li class="list-group-item">
          <font-awesome-icon :icon="faCircle" class="text-success me-2" />
          Google
        </li>
        <li class="list-group-item">
          <font-awesome-icon :icon="faCircle" class="text-warning me-2" />
          Social media
        </li>
        <li class="list-group-item">
          <font-awesome-icon :icon="faCircle" class="text-danger me-2" />
          Referral program
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { type ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const getRootColor = (color: string): string => {
  const selector = document.querySelector(':root')
  if (selector) return window.getComputedStyle(selector).getPropertyValue(color)
  else return '#5143d9'
}

const chartOpts: ApexOptions = {
  series: [70, 15, 10, 5],
  labels: ['Organic', 'Google', 'Social media', 'Referral'],
  chart: {
    height: 200,
    width: 200,
    offsetX: 0,
    type: 'donut',
    sparkline: {
      enabled: true
    }
  },
  colors: [
    getRootColor('--bs-primary'),
    getRootColor('--bs-success'),
    getRootColor('--bs-warning'),
    getRootColor('--bs-danger')
  ],
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
