<template>
  <div class="bg-light rounded p-3">
    <div class="overflow-hidden">
      <h6>Complete Your Profile</h6>
      <b-progress variant="success" class="progress-sm" show-progress>
        <b-progress-bar
          variant="success"
          class="aos"
          data-aos="slide-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          :value="85"
          :max="100"
          height="5px"
        >
          <span class="progress-percent-simple h6 fw-light ms-auto">85%</span>
        </b-progress-bar>
      </b-progress>
      <p class="mb-0">Get the best out of booking by adding the remaining details!</p>
    </div>
    <div class="bg-body rounded p-3 mt-3">
      <ul class="list-inline hstack flex-wrap gap-2 justify-content-between mb-0">
        <li class="list-inline-item h6 fw-normal mb-0">
          <router-link to="">
            <BIconCheckCircleFill class="text-success me-2"></BIconCheckCircleFill>
            Verified Email
          </router-link>
        </li>
        <li class="list-inline-item h6 fw-normal mb-0">
          <router-link to="">
            <BIconCheckCircleFill class="text-success me-2"></BIconCheckCircleFill>
            Verified Mobile Number
          </router-link>
        </li>
        <li class="list-inline-item h6 fw-normal mb-0">
          <router-link to="" class="text-primary">
            <BIconPlusCircleFill class="me-2" />
            Complete Basic Info
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BIconCheckCircleFill, BIconPlusCircleFill } from 'bootstrap-icons-vue'
import AOS from 'aos'

AOS.init({
  duration: 500,
  easing: 'ease-out-quart',
  once: true
})
</script>
