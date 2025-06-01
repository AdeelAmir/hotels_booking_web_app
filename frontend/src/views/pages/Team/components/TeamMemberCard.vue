<template>
  <b-card no-body class="card-img-scale card-element-hover overflow-hidden bg-transparent">
    <div class="card-img-scale-wrapper rounded-3">
      <img :src="member.image" class="card-img" alt="" />
      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
        <span class="badge text-bg-white"
          ><font-awesome-icon :icon="faStar" class="text-warning me-2" />4.3</span
        >
        <div class="btn-group hover-element d-flex mt-auto">
          <a href="#" class="btn btn-white">
            <font-awesome-icon :icon="faFacebookF" class="text-facebook" />
          </a>
          <a href="#" class="btn btn-white">
            <font-awesome-icon :icon="faInstagram" class="text-instagram" />
          </a>
          <a href="#" class="btn btn-white">
            <font-awesome-icon :icon="faTwitter" class="text-twitter" />
          </a>
        </div>
      </div>
    </div>
    <b-card-body class="px-2 pb-0">
      <b-card-title tag="h5" class="mb-1"
        ><a href="#">{{ member.name }}</a></b-card-title
      >
      <span>{{ member.designation }}</span>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import type { PropType } from 'vue'
import type { MemberType } from '@/views/pages/type'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
