<template>
  <b-card no-body class="shadow p-3">
    <b-row class="g-4">
      <b-col md="3">
        <img :src="hotel.image" class="rounded-2" alt="Card image" />
      </b-col>
      <b-col md="9">
        <b-card-body class="position-relative d-flex flex-column p-0 h-100">
          <b-dropdown
            class="list-inline-item position-absolute top-0 end-0"
            no-caret
            variant="link"
            placement="end"
            menu-class="min-width-auto shadow"
            toggle-class="p-0 m-0"
          >
            <template #button-content>
              <b-button
                size="sm"
                variant="light"
                class="btn-round"
                role="button"
                id="dropdownAction1"
              >
                <BIconThreeDotsVertical />
              </b-button>
            </template>

            <b-dropdown-item class="small" href="#">
              <BIconInfoCircle class="me-2" />
              Report
            </b-dropdown-item>

            <b-dropdown-item class="small" href="#">
              <BIconSlashCircle class="me-2" />
              Disable
            </b-dropdown-item>
          </b-dropdown>

          <b-card-title tag="h5" class="mb-0 me-5">
            <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
          </b-card-title>
          <small>
            <BIconGeoAlt class="me-1 mb-1" />
            {{ hotel.address }}
          </small>

          <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            <div class="d-flex align-items-center">
              <h5 class="fw-bold mb-0 me-1">{{ currency }}{{ hotel.price }}</h5>
              <span class="mb-0 me-2">/day</span>
            </div>

            <div class="hstack gap-2 mt-3 mt-sm-0">
              <button class="btn btn-sm btn-primary-soft px-2 mb-0">
                <BIconPencilSquare class="fa-fw" />
              </button>
              <button class="btn btn-sm btn-danger-soft px-2 mb-0">
                <BIconSlashCircle class="fa-fw" />
              </button>
            </div>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts" setup>
import {
  BIconGeoAlt,
  BIconInfoCircle,
  BIconPencilSquare,
  BIconSlashCircle,
  BIconThreeDotsVertical
} from 'bootstrap-icons-vue'

import type { PropType } from 'vue'
import type { HotelType } from '@/views/admin/Dashboard/types'

import { currency } from '@/helpers/constants'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
