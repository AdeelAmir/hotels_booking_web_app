<template>
  <UserLayout>
    <b-card no-body class="border bg-transparent">
      <b-card-header class="bg-transparent border-bottom">
        <h4 class="card-header-title">My Wishlist</h4>
      </b-card-header>
      <b-card-body class="vstack gap-4">
        <b-form class="d-flex justify-content-between">
          <b-col cols="6" xl="3">
            <SelectFormInput
              id="sort"
              custom-class="border-0"
              v-model="selected"
              :options="options"
              :choice-options="{ searchEnabled: false }"
            />
          </b-col>
          <b-button variant="danger" class="mb-0">
            <font-awesome-icon :icon="faTrash" class="me-2" />
            Remove all
          </b-button>
        </b-form>
        <b-card no-body class="shadow p-2" v-for="(hotel, idx) in wishListCards" :key="idx">
          <WishCard :hotel="hotel" />
        </b-card>
      </b-card-body>
    </b-card>
  </UserLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import UserLayout from '@/layouts/UserLayout.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import WishCard from '@/views/user/Wishlist/components/WishCard.vue'
import { wishListCards } from '@/views/user/Wishlist/data'

const selected = ref('sort-by')
const options = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'USA', text: 'USA' },
  { value: 'Recently search', text: 'Recently search' },
  { value: 'Most popular', text: 'Most popular' },
  { value: 'Top rated', text: 'Top rated' }
]
</script>
