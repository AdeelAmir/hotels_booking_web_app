<template>
  <div class="bg-light rounded p-3">
    <div class="d-sm-flex justify-content-between">
      <div class="d-sm-flex align-items-center mb-3">
        <img
          class="avatar avatar-md rounded-circle float-start me-3"
          :src="review.avatar"
          alt="avatar"
        />
        <div>
          <h6 class="m-0">{{ review.name }}</h6>
          <span class="me-3 small">{{ review.time }}</span>
        </div>
      </div>
      <ul class="list-inline mb-2 mb-sm-0">
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
            <font-awesome-icon :icon="faStar"></font-awesome-icon>
          </li>
        </template>
      </ul>
    </div>
    <h6 class="fw-normal">
      <span class="text-body">Review on:</span>
      {{ review.reviewOn }}
    </h6>
    <p>{{ review.description }}</p>
    <b-row v-if="review.images" class="g-4">
      <b-col v-for="(image, idx) in review.images" :key="idx" cols="4" sm="3" lg="2">
        <CustomGLightbox :link="image">
          <img :src="image" class="rounded" alt="" />
        </CustomGLightbox>
      </b-col>
    </b-row>
    <div class="mt-3">
      <div class="d-flex justify-content-between align-items-center">
        <button
          class="btn btn-sm btn-primary-soft mb-0 items-center"
          v-b-toggle="`collapse-${review.id}`"
        >
          <BIconReply class="me-1" />
          Reply
        </button>
        <router-link to="" class="text-primary-hover text-reset small mb-0 items-center">
          <BIconInfoCircle class="me-1" />
          Report
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
            <button class="btn btn-primary-soft btn-sm ms-2 px-4 mb-0 flex-shrink-0">
              <font-awesome-icon :icon="faPaperPlane" class="fs-5" />
            </button>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { faPaperPlane, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconReply, BIconInfoCircle } from 'bootstrap-icons-vue'

import CustomGLightbox from '@/components/CustomGLightbox.vue'

import type { PropType } from 'vue'
import type { ReviewType } from '@/views/agent/Reviews/data'

defineProps({
  review: {
    type: Object as PropType<ReviewType>,
    required: true
  }
})
</script>
