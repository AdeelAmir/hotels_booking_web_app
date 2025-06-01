<template>
  <b-card no-body class="shadow h-100">
    <div class="position-relative">
      <img :src="place.image" class="card-img-top" alt="Card img" />
      <div class="card-img-overlay p-3 z-index-1">
        <div class="items-center">
          <div class="badge text-bg-dark me-1">
            <div class="items-center">
              <font-awesome-icon
                :icon="place.category.icon"
                class="fa-solid fa-fw text-warning me-1"
              />
              {{ place.category.name }}
            </div>
          </div>
          <div class="badge" :class="place.open ? 'text-bg-success' : 'text-bg-danger'">
            {{ place.open ? 'Open' : 'Closed' }}
          </div>
        </div>
      </div>
    </div>
    <b-card-body>
      <div v-if="place.recommended" class="badge bg-danger bg-opacity-10 text-danger mb-2">
        Recommended
      </div>

      <b-card-title tag="h5" class="me-2">
        <router-link :to="{ name: place.link?.name }">{{ place.name }}</router-link>
      </b-card-title>

      <p v-if="place.price" class="mb-0">
        Starts at<span class="text-success">{{ currency }}{{ place.price }}</span
        >for 1 person
      </p>

      <ul v-if="place.address || place.phoneNo" class="list-group list-group-borderless mb-0">
        <li v-if="place.address" class="list-group-item small pb-0 items-center gap-1">
          <BIconPinMapFill class="fa-fw h6 small mb-0" />
          {{ place.address }}
        </li>
        <li v-if="place.phoneNo" class="list-group-item small pb-0 items-center gap-1">
          <BIconTelephoneFill class="fa-fw h6 small mb-0" />
          {{ place.phoneNo }}
        </li>
      </ul>
    </b-card-body>
    <b-card-footer class="border-top">
      <div class="d-flex justify-content-between align-items-center">
        <router-link :to="{ name: place.link?.name }" class="btn btn-link p-0 mb-0 items-center">
          View detail
          <BIconArrowRight class="ms-1" />
        </router-link>
        <router-link to="#" class="h6 mb-0 z-index-2" @click="toggle">
          <font-awesome-icon :icon="faRegHeart" v-if="!isOpen" />
          <font-awesome-icon class="text-danger" :icon="faHeart" v-else />
        </router-link>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faRegHeart } from '@fortawesome/free-regular-svg-icons'
import { BIconArrowRight, BIconPinMapFill, BIconTelephoneFill } from 'bootstrap-icons-vue'
import { type PropType, ref } from 'vue'
import type { PlaceType } from '@/views/directories/Home/types'
import { currency } from '@/helpers/constants'

defineProps({
  place: {
    type: Object as PropType<PlaceType>,
    required: true
  }
})

let isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
