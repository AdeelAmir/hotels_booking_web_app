<template>
  <b-col md="6" xl="12">
    <b-card no-body class="shadow">
      <b-card-header class="border-bottom">
        <b-card-title tag="h5" class="mb-0">Why Sign up or Log in</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex mb-0">
            <font-awesome-icon :icon="faCheck" class="text-success me-2" />
            <span class="h6 fw-normal">Get Access to Secret Deal</span>
          </li>

          <li class="list-group-item d-flex mb-0">
            <font-awesome-icon :icon="faCheck" class="text-success me-2" />
            <span class="h6 fw-normal">Book Faster</span>
          </li>

          <li class="list-group-item d-flex mb-0">
            <font-awesome-icon :icon="faCheck" class="text-success me-2" />
            <span class="h6 fw-normal">Manage Your Booking</span>
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import { faCheck } from '@fortawesome/free-solid-svg-icons'
</script>
