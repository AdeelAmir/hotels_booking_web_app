<template>
  <b-row class="g-4 g-xl-5 mb-5">
    <b-col md="6" lg="4">
      <div class="bg-light p-4 rounded text-center">
        <h6 class="fw-normal">Total Reviews</h6>
        <div class="flex-centered">
          <h2 class="mb-0 me-2">11.01K</h2>
          <div class="badge bg-success bg-opacity-10 text-success items-center gap-1">
            21%
            <BIconGraphUp />
          </div>
        </div>
        <p class="mb-0">Growth in reviews this year</p>
      </div>
    </b-col>
    <b-col md="6" lg="4">
      <div class="bg-light p-4 rounded text-center">
        <h6 class="fw-normal">Average Rating</h6>
        <div class="flex-centered">
          <h2 class="mb-0 me-2">4.0</h2>
          <ul class="list-inline mb-1">
            <li v-for="(_val, idx) in new Array(4)" class="list-inline-item me-1" :key="idx">
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>

            <li class="list-inline-item">
              <font-awesome-icon :icon="faStar" class="text-secondary" />
            </li>
          </ul>
        </div>
        <p class="mb-0">Average rating on this year</p>
      </div>
    </b-col>
    <b-col lg="4">
      <div class="bg-light p-4 rounded">
        <b-row class="gx-3 g-0 align-items-center">
          <template v-for="(progress, idx) in [85, 75, 60, 35, 15]" :key="idx">
            <b-col cols="9" sm="10">
              <b-progress variant="warning" class="progress-xs" :value="progress" />
            </b-col>

            <b-col cols="3" sm="2" class="text-end">
              <small class="h6 fw-light mb-0">{{ progress }}%</small>
            </b-col>
          </template>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { BIconGraphUp } from 'bootstrap-icons-vue'
import { faStar } from '@fortawesome/free-solid-svg-icons'
</script>
