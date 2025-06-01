<template>
  <b-card no-body class="border h-100">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Booking stats</h5>
    </b-card-header>
    <b-card-body>
      <VueApexCharts
        class="mt-2"
        type="area"
        height="320"
        :options="chartOpts"
        :series="chartOpts.series"
      />
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { type ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

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
