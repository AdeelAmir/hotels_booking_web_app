<template>
  <b-card no-body class="shadow h-100">
    <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-3">
      <h5 class="card-header-title">Reviews</h5>
      <router-link to="" class="btn btn-link p-0 mb-0"> View all </router-link>
    </b-card-header>

    <b-card-body class="p-3">
      <template v-for="(hotel, idx) in hotelReviews" :key="idx">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
            <div class="flex-shrink-0">
              <img :src="hotel.image" class="rounded h-60px" alt="" />
            </div>
            <div class="ms-sm-3 mt-2 mt-sm-0">
              <h6 class="mb-1">{{ hotel.name }}</h6>
              <ul class="list-inline smaller mb-0">
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
                    <font-awesome-icon :icon="faStar"></font-awesome-icon>
                  </li>
                </template>
                <li class="list-inline-item me-0">({{ hotel.review }}&nbsp;reviews)</li>
              </ul>
            </div>
          </div>
          <router-link to="" class="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
            View
          </router-link>
        </div>
        <hr v-if="hotelReviews.length - 1 != idx" />
      </template>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { hotelReviews } from '@/views/admin/Dashboard/data'
</script>
