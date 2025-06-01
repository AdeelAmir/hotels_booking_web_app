<template>
  <b-card no-body class="border p-2">
    <b-row class="g-4">
      <b-col md="3" lg="2">
        <img :src="hotel.image" class="card-img rounded-2" alt="Card image" />
      </b-col>

      <b-col ms="9" lg="10">
        <b-card-body class="position-relative d-flex flex-column p-0 h-100">
          <b-dropdown
            variant="link"
            no-caret
            toggle-class="m-0 p-0"
            menu-class="dropdown-menu-end w-auto shadow rounded"
            class="list-inline-item position-absolute top-0 end-0"
          >
            <template #button-content>
              <b-button size="sm" variant="light" class="btn-round">
                <BIconThreeDotsVertical />
              </b-button>
            </template>

            <b-dropdown-item href="#">
              <BIconInfoCircle class="me-1" />
              Report
            </b-dropdown-item>

            <b-dropdown-item href="#">
              <BIconSlashCircle class="me-1" />
              Disable
            </b-dropdown-item>
          </b-dropdown>

          <b-card-title tag="h5" class="mb-0 me-5">
            <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
          </b-card-title>
          <small>
            <BIconGeoAlt class="me-1 mb-1" />
            {{ hotel.address }}</small
          >

          <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
            <div class="d-flex align-items-center">
              <h5 class="fw-bold mb-0 me-1">{{ currency }}{{ hotel.price }}</h5>
              <span class="mb-0 me-2">/day</span>
            </div>
            <div class="hstack gap-2 mt-3 mt-sm-0">
              <b-button size="sm" variant="primary" class="mb-0">
                <BIconPencilSquare class="fa-fw me-1 mb-1" />
                Edit
              </b-button>
              <b-button size="sm" variant="danger" class="mb-0">
                <BIconTrash3 class="fa-fw me-1 mb-1" />
                Delete
              </b-button>
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
  BIconSlashCircle,
  BIconThreeDotsVertical,
  BIconTrash3,
  BIconPencilSquare
} from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'

import type { PropType } from 'vue'
import type { HotelType } from '@/views/agent/Listings/data'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
