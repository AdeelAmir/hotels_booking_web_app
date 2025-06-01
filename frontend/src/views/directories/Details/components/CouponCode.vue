<template>
  <b-card no-body class="card-body shadow">
    <div class="cardt-title">
      <h5>Save {{ currency }}70 instant of code</h5>
    </div>

    <ul class="list-group list-group-borderless mb-0">
      <li class="list-group-item small pb-0">
        <BIconPatchCheckFill class="text-success me-1" />
        Valid on all prepaid deals
      </li>
      <li class="list-group-item small pb-0">
        <BIconPatchCheckFill class="text-success me-1" />
        No minimum purchase
      </li>
    </ul>

    <div class="input-group mt-3">
      <b-form-input class="border-dashed" placeholder="Coupon code" value="BOOK56" />
      <b-button variant="primary">Copy</b-button>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'
</script>
