<template>
  <b-row class="g-3 g-lg-4">
    <b-col md="4" xxl="3">
      <div class="d-flex align-items-center">
        <div class="avatar avatar-xl me-2 flex-shrink-0">
          <img class="avatar-img rounded-circle" :src="review.image" alt="avatar" />
        </div>
        <div class="ms-2">
          <h5 class="mb-1">{{ review.name }}</h5>
          <p class="mb-0">Stayed {{ review.date }}</p>
        </div>
      </div>
    </b-col>
    <b-col md="8" xxl="9">
      <ul class="list-inline mb-2">
        <li
          v-for="(_star, idx) in new Array(Math.floor(review.rating))"
          :key="idx"
          class="list-inline-item me-1"
        >
          <font-awesome-icon :icon="faStar" class="text-warning" />
        </li>
        <li v-if="!Number.isInteger(review.rating)" class="list-inline-item me-1">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <template v-if="review.rating < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(review.rating))"
            :key="idx"
            class="list-inline-item me-0"
          >
            <font-awesome-icon :icon="FAStar" class="text-warning" />
          </li>
        </template>
      </ul>
      <h6><span class="text-body fw-light">Review on:</span> {{ review.reviewOn }}</h6>
      <p>{{ review.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <button class="mb-0 btn btn-primary-soft me-1 btn-sm me-1">Direct message</button>
          <router-link v-b-toggle="`collapse-${review.id}`" class="btn btn-sm btn-light mb-0" to="">
            Reply
          </router-link>
        </div>
        <router-link to="" class="text-primary-hover items-center">
          <BIconTrash3 class="me-1" />
          Delete
        </router-link>
      </div>
      <b-collapse :id="`collapse-${review.id}`">
        <div>
          <div class="d-flex mt-3">
            <b-form-textarea
              class="mb-0"
              placeholder="Add a comment..."
              rows="2"
              spellCheck="false"
            />
            <b-button
              variant="primary"
              size="sm"
              class="ms-2 px-4 mb-0 flex-shrink-0 flex-centered"
            >
              <font-awesome-icon :icon="faPaperPlane" />
            </b-button>
          </div>
        </div>
      </b-collapse>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { BIconTrash3 } from 'bootstrap-icons-vue'
import { faPaperPlane, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FAStar } from '@fortawesome/free-regular-svg-icons'

import type { PropType } from 'vue'
import type { ReviewType } from '@/views/admin/Reviews/data'

defineProps({
  review: {
    type: Object as PropType<ReviewType>,
    required: true
  }
})
</script>
