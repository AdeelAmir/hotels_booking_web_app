<template>
  <b-card no-body class="shadow h-100">
    <div class="position-relative">
      <img :src="hotel.image" class="card-img-top" alt="Card image" />
      <div class="card-img-overlay d-flex flex-column p-3">
        <div class="d-flex justify-content-between align-items-center">
          <div class="badge text-bg-dark">
            <BIconStarFill class="fa-fw me-2 text-warning" />
            {{ hotel.rating }}
          </div>

          <b-dropdown
            class="list-inline-item"
            no-caret
            variant="link"
            placement="end"
            menu-class="min-width-auto shadow"
            toggle-class="p-0 m-0"
          >
            <template #button-content>
              <b-button size="sm" variant="light" class="btn-round" role="button">
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
        </div>
      </div>
    </div>
    <b-card-body class="px-3">
      <b-card-title tag="h5" class="mb-1">
        <router-link :to="{ name: hotel.link?.name }">{{ hotel.name }}</router-link>
      </b-card-title>
      <ul class="list-group list-group-borderless small mt-2 mb-0">
        <li class="list-group-item pb-0 items-center">
          <font-awesome-icon :icon="faBuilding" class="me-2" />
          {{ hotel.floor }}
        </li>
        <li class="list-group-item pb-0 items-center">
          <font-awesome-icon :icon="faBed" class="me-2" />
          {{ hotel.bed }}
        </li>
      </ul>
    </b-card-body>
    <b-card-footer class="pt-0">
      <div class="hstack gap-2 mb-2">
        <h6 class="fw-normal mb-0">
          {{ currency }}
          {{ hotel.price }}
        </h6>
        <small>/per person</small>
      </div>
      <router-link :to="{ name: hotel.link?.name }" class="btn btn-sm btn-primary-soft mb-0 w-100">
        View detail
      </router-link>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { faBed, faBuilding } from '@fortawesome/free-solid-svg-icons'
import {
  BIconStarFill,
  BIconThreeDotsVertical,
  BIconInfoCircle,
  BIconSlashCircle
} from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'
import type { PropType } from 'vue'
import type { HotelType } from '@/views/admin/bookings/List/types'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
