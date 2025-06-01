<template>
  <footer class="bg-dark py-7">
    <b-container>
      <b-row class="mx-auto">
        <b-col lg="6" class="mx-auto text-center">
          <img class="mx-auto h-60px" :src="logoLight" alt="logo" />
          <p class="mt-3 text-white">
            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy
            man children rejoiced.
          </p>

          <ul class="nav justify-content-between text-primary-hover mt-3 mt-md-0">
            <li v-for="(link, idx) in footerLinks" :key="idx" class="nav-item">
              <a class="nav-link p-2 text-white" href="#">
                {{ link }}
              </a>
            </li>
          </ul>

          <ul class="list-inline mt-3 mb-0">
            <li class="list-inline-item">
              <a class="btn btn-white btn-sm shadow px-2 text-facebook" href="#">
                <font-awesome-icon :icon="faFacebook" class="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-white btn-sm shadow px-2 text-instagram" href="#">
                <font-awesome-icon :icon="faInstagram" class="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-white btn-sm shadow px-2 text-twitter" href="#">
                <font-awesome-icon :icon="faTwitter" class="fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-white btn-sm shadow px-2 text-linkedin" href="#">
                <font-awesome-icon :icon="faLinkedinIn" class="fa-fw" />
              </a>
            </li>
          </ul>

          <div class="text-body-secondary text-primary-hover mt-3">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body-secondary">{{ developedBy }}</a>.
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoLight from '@/assets/images/logo-light.svg'
import {currentYear, developedBy, developedByLink} from '@/helpers/constants'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

const footerLinks = ['About', 'Terms', 'Privacy', 'Career', 'Contact us', 'Cookies']
</script>
