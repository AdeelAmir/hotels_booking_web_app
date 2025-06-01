<template>
  <b-card no-body class="card-element-hover bg-transparent">
    <div class="position-relative">
      <img :src="member.image" class="card-img" alt="" />

      <div class="card-img-overlay hover-element d-flex p-3">
        <div class="btn-group mt-auto">
          <a href="#" class="btn btn-white mb-0">
            <font-awesome-icon :icon="faFacebookF" class="fa-brands fa-facebook-f text-facebook" />
          </a>
          <a href="#" class="btn btn-white mb-0">
            <font-awesome-icon :icon="faInstagram" class="fa-brands fa-instagram text-instagram" />
          </a>
          <a href="#" class="btn btn-white mb-0">
            <font-awesome-icon :icon="faTwitter" class="fa-brands fa-twitter text-twitter" />
          </a>
        </div>
      </div>
    </div>
    <b-card-body class="card-body px-2 pb-0">
      <b-card-title tag="h5"
        ><a href="#">{{ member.name }}</a></b-card-title
      >
      <span>{{ member.designation }}</span>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import type { PropType } from 'vue'
import type { MemberType } from '@/views/pages/type'

defineProps({
  member: { type: Object as PropType<MemberType>, required: true }
})
</script>
