<template>
  <b-card class="border overflow-hidden">
    <b-row class="g-4">
      <b-col sm="6" md="4">
        <span class="badge text-bg-dark">Current Month</span>
        <h4 class="text-primary my-2">{{ currency }}35000</h4>
        <p class="mb-0 items-center">
          <span class="text-success me-1 items-center">
            0.20%
            <BIconArrowUp />
          </span>
          vs last month
        </p>
      </b-col>
      <b-col sm="6" md="4">
        <span class="badge text-bg-dark">Last Month</span>
        <h4 class="my-2">{{ currency }}28000</h4>
        <p class="mb-0 items-center">
          <span class="text-danger me-1 items-center">
            0.10%
            <BIconArrowDown />
          </span>
          Then last month
        </p>
      </b-col>
    </b-row>
    <VueApexCharts height="320" type="area" :options="chartOpts" :series="chartOpts.series" />
  </b-card>
</template>

<script lang="ts" setup>
import { BIconArrowDown, BIconArrowUp } from 'bootstrap-icons-vue'

import { type ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

import { currency } from '@/helpers/constants'

const chartOpts: ApexOptions = {
  colors: ['#2163e8'],
  series: [
    {
      name: 'Users',
      data: [100, 401, 305, 501, 409, 602, 609, 901, 848, 602, 809, 901]
    }
  ],
  chart: {
    height: 320,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  grid: {
    strokeDashArray: 4,
    position: 'back'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  legend: {
    show: true,
    horizontalAlign: 'right',
    position: 'top',
    labels: {},
    markers: {
      width: 8,
      height: 8
    }
  },
  xaxis: {
    labels: {
      show: true
    },
    axisBorder: {
      show: false
    },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
}
</script>
