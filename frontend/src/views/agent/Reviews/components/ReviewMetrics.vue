<template>
  <b-card no-body class="border h-100">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Review Metrics</h5>
    </b-card-header>
    <b-card-body>
      <b-row class="g-4">
        <b-col sm="6" xl="3">
          <div class="d-flex align-items-center">
            <span class="display-6 text-primary">
              <BIconTrophy class="mb-2" />
            </span>
            <div class="ms-3">
              <h4 class="mb-0">4.5</h4>
              <span>Average Rating</span>
            </div>
          </div>
        </b-col>
        <b-col sm="6" xl="3">
          <div class="d-flex align-items-center">
            <span class="display-6 text-warning">
              <BIconStar class="mb-2" />
            </span>
            <div class="ms-3">
              <h4 class="mb-0">548</h4>
              <span>Total Reviews</span>
            </div>
          </div>
        </b-col>
        <b-col sm="6" xl="3">
          <div class="d-flex align-items-center">
            <span class="display-6 text-danger">
              <BIconExclamationOctagon class="mb-2" />
            </span>
            <div class="ms-3">
              <h4 class="mb-0">56</h4>
              <span>Unaddressed Reviews</span>
            </div>
          </div>
        </b-col>
        <b-col sm="6" xl="3">
          <div class="d-flex align-items-center">
            <span class="display-6 text-success">
              <BIconBookmarkStar class="mb-2" />
            </span>
            <div class="ms-3">
              <h4 class="mb-0">145</h4>
              <span>New reviews in the last 30 days</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import {
  BIconBookmarkStar,
  BIconExclamationOctagon,
  BIconStar,
  BIconTrophy
} from 'bootstrap-icons-vue'
</script>
