<template>
  <b-card no-body class="border rounded-3">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Linked account</h5>
    </b-card-header>
    <b-card-body class="pb-0">
      <div
        class="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded"
      >
        <h2 class="fs-1 mb-0 me-3">
          <v-icon name="fc-google" scale="3" class="text-google-icon d-flex" />
        </h2>
        <div>
          <div
            class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px"
          >
            <BIconCheckCircleFill class="text-success fs-5" />
          </div>
          <h6 class="mb-1">Google</h6>
          <p class="mb-1 small">You are successfully connected to your Google account</p>
          <button type="button" class="btn btn-sm btn-danger mb-0">Invoke</button>
          <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
        </div>
      </div>

      <div class="mb-4 d-sm-flex border p-3 rounded">
        <h2 class="fs-1 mb-0 me-3">
          <font-awesome-icon :icon="faLinkedinIn" class="text-linkedin" />
        </h2>
        <div>
          <h6 class="mb-1">Linkedin</h6>
          <p class="mb-1 small">Connect with Linkedin account for a personalized experience</p>
          <button type="button" class="btn btn-sm btn-primary mb-0">Connect Linkedin</button>
          <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
        </div>
      </div>

      <div class="mb-4 d-sm-flex border p-3 rounded">
        <h2 class="fs-1 mb-0 me-3">
          <font-awesome-icon :icon="faFacebook" class="text-facebook" />
        </h2>
        <div>
          <h6 class="mb-1">Facebook</h6>
          <p class="mb-1 small">Connect with Facebook account for a personalized experience</p>
          <button type="button" class="btn btn-sm btn-primary mb-0">Connect Facebook</button>
          <a href="#" class="btn btn-sm btn-link text-body mb-0">Learn more</a>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { BIconCheckCircleFill } from 'bootstrap-icons-vue'
</script>
