<template>
  <b-row class="g-4 justify-content-between align-items-center">
    <b-col lg="5">
      <b-nav class="nav nav-pills-shadow nav-responsive" role="tablist">
        <b-nav-item linkClass="mb-0 me-sm-2 active"> All Reviews </b-nav-item>
        <b-nav-item linkClass="mb-0 me-sm-2"> Published </b-nav-item>
        <b-nav-item linkClass="mb-0"> Deleted </b-nav-item>
      </b-nav>
    </b-col>
    <b-col md="6" lg="3">
      <b-form>
        <SelectFormInput
          id="sort-by-hotels"
          v-model="selectedOption"
          :options="sortOptions"
          :choice-options="{ searchEnabled: false }"
        />
      </b-form>
    </b-col>
  </b-row>

  <div class="vstack gap-4 mt-5">
    <template v-for="(review, idx) in userReviews" :key="idx">
      <ReviewCard :review="review" />

      <hr v-if="userReviews.length - 1 != idx" class="m-0" />
    </template>

    <Pagination />
  </div>
</template>

<script setup lang="ts">
import ReviewCard from '@/views/admin/Reviews/components/ReviewCard.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import Pagination from '@/views/admin/Reviews/components/Pagination.vue'

import { userReviews } from '@/views/admin/Reviews/data'
import { ref } from 'vue'

const selectedOption = ref('sort-by-hotels')

const sortOptions = [
  { value: 'sort-by-hotels', text: 'Sort by hotels' },
  { value: '1', text: 'Pride moon Village Resort & Spa' },
  { value: '2', text: 'Courtyard by Marriott New York' },
  { value: '3', text: 'Park Plaza Lodge Hotel' },
  { value: '4', text: 'Royal Beach Resort' }
]
</script>
