<template>
  <b-card no-body class="shadow mb-4">
    <b-card-header class="border-bottom">
      <h5 class="mb-0">Your Order</h5>
    </b-card-header>

    <b-card-body>
      <ul class="list-group list-group-borderless mb-3">
        <li class="list-group-item d-flex justify-content-between py-2">
          <span class="h6 fw-light mb-0">Monsoon Offer</span>
          <span class="h6 fw-light mb-0">{{ currency }}260 (x1)</span>
        </li>
        <li class="list-group-item d-flex justify-content-between py-2">
          <span class="h6 fw-light mb-0">Monsoon Offer:global</span>
          <span class="h6 fw-light mb-0">{{ currency }}50</span>
        </li>
        <li class="list-group-item py-2">
          <hr class="my-0" />
        </li>

        <li class="list-group-item d-flex justify-content-between pb-0">
          <div>
            <h5 class="fw-normal mb-0">Total</h5>
            <small>Inc. of all taxes</small>
          </div>
          <span class="h5 fw-normal mb-0">{{ currency }}310</span>
        </li>
      </ul>

      <a href="#" class="btn btn-primary-soft w-100 mb-0">Buy now</a>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
</script>
