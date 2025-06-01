<template>
  <b-card no-body class="shadow p-3">
    <b-row class="g-4">
      <b-col sm="3">
        <img :src="hotel.image" class="rounded-2" alt="Card image" />
      </b-col>
      <b-col sm="9">
        <b-card-body class="position-relative d-flex flex-column p-0 h-100">
          <b-dropdown
            menu-class="min-w-auto shadow rounded"
            no-caret
            toggle-class="p-0 m-0"
            variant="link"
            class="list-inline-item position-absolute top-0 end-0"
          >
            <template #button-content>
              <b-button size="sm" variant="light" class="btn-round arrow-none" role="button">
                <BIconThreeDotsVertical />
              </b-button>
            </template>

            <b-dropdown-item href="">
              <BIconInfoCircle class="me-1" />
              Report
            </b-dropdown-item>
            <b-dropdown-item href="">
              <BIconSlashCircle class="me-1" />
              Disable
            </b-dropdown-item>
          </b-dropdown>
          <b-card-title tag="h5" class="mb-0 me-5">
            <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
          </b-card-title>
          <small class="items-center">
            <BIconGeoAlt class="me-2" />
            {{ hotel.address }}
          </small>
          <div class="d-flex justify-content-between align-items-center mt-3 mt-md-auto">
            <div class="d-flex align-items-center">
              <h5 class="fw-bold mb-0 me-1">
                {{ currency }}
                {{ hotel.price }}
              </h5>
              <span class="mb-0 me-2">/day</span>
            </div>
            <router-link to="" class="btn btn-sm btn-primary px-2 mb-0 items-center gap-1">
              <BIconEye class="me-1" />
              View
            </router-link>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script setup lang="ts">
import {
  BIconEye,
  BIconGeoAlt,
  BIconInfoCircle,
  BIconSlashCircle,
  BIconThreeDotsVertical
} from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'

import type { PropType } from 'vue'
import type { HotelType } from '@/views/admin/agents/Detail/types'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
