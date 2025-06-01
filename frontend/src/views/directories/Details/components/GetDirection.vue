<template>
  <b-card no-body class="shadow mb-4">
    <b-card-header class="border-bottom">
      <h5 class="mb-0">Get Direction</h5>
    </b-card-header>
    <b-card-body>
      <iframe
        title="map"
        class="w-100 grayscale rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
        height="200"
        :style="{ border: 0 }"
        aria-hidden="false"
      />
      <ul class="list-group list-group-borderless my-3">
        <li class="list-group-item">
          <router-link to="" class="h6 fw-normal mb-0 items-center">
            <BIconGeoAlt class="fa-fw me-2" />
            5855 W Century Blvd, Los Angeles
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="" class="h6 fw-normal mb-0 items-center">
            <BIconTelephoneForward class="fa-fw me-2" />
            +31 123 456 789
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="" class="h6 fw-normal mb-0 items-center">
            <BIconEnvelope class="fa-fw me-2" />
            example@gmail.com
          </router-link>
        </li>
      </ul>
      <ul class="list-inline mb-0 mt-3">
        <li class="list-inline-item">Follow us on:</li>
        <li class="list-inline-item">
          <button class="btn btn-sm px-2 bg-facebook mb-0 me-2" to="">
            <font-awesome-icon :icon="faFacebookF" class="fa-fw" />
          </button>
        </li>
        <li class="list-inline-item">
          <button class="btn btn-sm shadow px-2 bg-instagram mb-0 me-2" to="">
            <font-awesome-icon :icon="faInstagram" />
          </button>
        </li>
        <li class="list-inline-item">
          <button class="btn btn-sm shadow px-2 bg-twitter mb-0 me-2" to="">
            <font-awesome-icon :icon="faTwitter" />
          </button>
        </li>
        <li class="list-inline-item">
          <button class="btn btn-sm shadow px-2 bg-linkedin mb-0 me-2" to="">
            <font-awesome-icon :icon="faLinkedinIn" class="fa-fw" />
          </button>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { BIconEnvelope, BIconGeoAlt, BIconTelephoneForward } from 'bootstrap-icons-vue'
</script>
