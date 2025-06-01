<template>
  <b-row class="g-0">
    <b-col md="3">
      <img :src="hotel.image" class="card-img rounded-2" alt="Card image" />
    </b-col>
    <b-col md="9">
      <b-card-body class="py-md-2 d-flex flex-column h-100">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="list-inline small mb-0">
            <li
              v-for="(_star, idx) in new Array(Math.floor(hotel.rating))"
              :key="idx"
              class="list-inline-item me-1"
            >
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>
            <li v-if="!Number.isInteger(hotel.rating)" class="list-inline-item me-1">
              <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
            </li>
            <template v-if="hotel.rating < 5">
              <li
                v-for="(_val, idx) in new Array(5 - Math.ceil(hotel.rating))"
                :key="idx"
                class="list-inline-item me-0"
              >
                <font-awesome-icon :icon="faStar" />
              </li>
            </template>
          </ul>

          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#" class="btn btn-sm btn-round btn-danger mb-0">
                <font-awesome-icon :icon="faHeart" />
              </a>
            </li>
            <li class="list-inline-item dropdown">
              <a
                href="#"
                class="btn btn-sm btn-round btn-light mb-0"
                role="button"
                id="dropdownShare2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon :icon="faShareAlt" />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                aria-labelledby="dropdownShare2"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                    Twitter</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                    Facebook</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <font-awesome-icon :icon="faLinkedin" class="me-2" />
                    LinkedIn</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <font-awesome-icon :icon="faCopy" class="me-2" />
                    Copy link</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <b-card-title tag="h5" class="mb-1">
          <router-link :to="{ name: 'hotels.details' }">{{ hotel.name }}</router-link>
        </b-card-title>
        <small>
          <BIconGeoAlt class="me-2" />
          {{ hotel.address }}
        </small>

        <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
          <div class="d-flex align-items-center">
            <h5 class="fw-bold mb-0 me-1">{{ currency }} {{ hotel.price }}</h5>
            <span class="mb-0 me-2">/day</span>
          </div>
          <div class="mt-3 mt-sm-0">
            <router-link :to="{ name: hotel.link?.name }" class="btn btn-sm btn-dark w-100 mb-0"
              >View hotel
            </router-link>
          </div>
        </div>
      </b-card-body>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import {
  faCopy,
  faHeart,
  faShareAlt,
  faStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons'
import { BIconGeoAlt } from 'bootstrap-icons-vue'
import type { PropType } from 'vue'
import type { HotelType } from '@/views/user/Wishlist/data'
import { currency } from '@/helpers/constants'

defineProps({
  hotel: {
    type: Object as PropType<HotelType>,
    required: true
  }
})
</script>
