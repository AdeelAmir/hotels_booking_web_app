<template>
  <b-card no-body class="border rounded-3">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">User Reviews</h5>
    </b-card-header>
    <b-card-body>
      <template v-for="(review, idx) in userReviews" :key="idx">
        <ReviewCard :review="review" />
        <hr v-if="userReviews.length - 1 != idx" />
      </template>
    </b-card-body>
    <b-card-footer class="pt-0">
      <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
        <p class="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>

        <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
          <ul class="pagination pagination-sm pagination-primary-soft mb-0">
            <li class="page-item disabled">
              <router-link class="page-link" to="#" tabindex="-1">Prev</router-link>
            </li>
            <li class="page-item">
              <router-link class="page-link" to="#">1</router-link>
            </li>
            <li class="page-item active">
              <router-link class="page-link" to="#">2</router-link>
            </li>
            <li class="page-item disabled">
              <router-link class="page-link" to="#">..</router-link>
            </li>
            <li class="page-item">
              <router-link class="page-link" to="#">15</router-link>
            </li>
            <li class="page-item">
              <router-link class="page-link" to="#">Next</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { userReviews } from '../data'
import ReviewCard from './ReviewCard.vue'
</script>
