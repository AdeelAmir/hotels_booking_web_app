<template>
  <footer class="bg-dark pt-5">
    <b-container>
      <b-row class="g-4">
        <b-col lg="3">
          <router-link :to="{ name: 'hotels.home' }">
            <img class="h-40px" :src="logoLight" alt="logo"/>
          </router-link>
          <p class="my-3 text-body-secondary">
            Departure defective arranging rapturous did believe him all had supported.
          </p>
          <p class="mb-2">
            <a href="#" class="text-body-secondary text-primary-hover">
              <BIconTelephone class="me-2"/>
              +1234 568 963</a
            >
          </p>
          <p class="mb-0">
            <a href="#" class="text-body-secondary text-primary-hover">
              <BIconEnvelope class="me-2"/>
              example@gmail.com</a
            >
          </p>
        </b-col>

        <b-col lg="8" class="ms-auto">
          <b-row class="g-4">
            <b-col v-for="(item, idx) in footerLinks" :key="idx" cols="6" md="3">
              <h5 class="text-white mb-2 mb-md-4">{{ item.title }}</h5>
              <ul class="nav flex-column text-primary-hover">
                <li v-for="(child, idx) in item.items" :key="idx" class="nav-item">
                  <router-link
                      class="nav-link text-body-secondary"
                      :to="{ name: child.link?.name, params: child.link?.params }"
                  >
                    <font-awesome-icon v-if="child.icon" :icon="child.icon" class="me-2"/>
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <h5 class="mb-2 text-white">Top Links</h5>
        <ul class="list-inline text-primary-hover lh-lg">
          <li v-for="(item, idx) in topLinks" :key="idx" class="list-inline-item">
            <router-link
                :to="{ name: item.link?.name, params: item.link?.params }"
                class="text-body-secondary"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </b-row>

      <b-row class="g-4 justify-content-between mt-0 mt-md-2">
        <b-col sm="7" md="6" lg="4">
          <h5 class="text-white mb-2">Payment & Security</h5>
          <ul class="list-inline mb-0 mt-3">
            <li class="list-inline-item">
              <a href="#"><img :src="paypal" class="h-30px" alt=""/></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="visa" class="h-30px" alt=""/></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="mastercard" class="h-30px" alt=""/></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="expresscard" class="h-30px" alt=""/></a>
            </li>
          </ul>
        </b-col>

        <b-col sm="5" md="6" lg="3" class="text-sm-end">
          <h5 class="text-white mb-2">Follow us on</h5>
          <ul class="list-inline mb-0 mt-3 hstack gap-1 justify-content-end">
            <li class="list-inline-item">
              <a class="btn btn-sm px-2 bg-facebook mb-0" href="#">
                <font-awesome-icon :icon="faFacebook" class="fab fa-fw"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-instagram mb-0" href="#">
                <font-awesome-icon :icon="faInstagram" class="fab fa-fw"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-twitter mb-0" href="#">
                <font-awesome-icon :icon="faTwitter" class="fab fa-fw"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#">
                <font-awesome-icon :icon="faLinkedinIn" class="fab fa-fw"/>
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>

      <hr class="mt-4 mb-0"/>

      <b-row>
        <b-container>
          <div
              class="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start"
          >
            <div class="text-body-secondary text-primary-hover">
              Copyrights ©{{ currentYear }} Booking. Build by
              <a :href="developedByLink" class="text-body-secondary">{{ developedBy }}</a>.
            </div>
            <div class="nav mt-2 mt-lg-0">
              <ul class="list-inline text-primary-hover mx-auto mb-0">
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1" href="#">Privacy policy</a>
                </li>
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1" href="#">Terms and conditions</a>
                </li>
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1 pe-0" href="#">Refund policy</a>
                </li>
              </ul>
            </div>
          </div>
        </b-container>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoLight from '@/assets/images/logo-light.svg'
import paypal from '@/assets/images/element/paypal.svg'
import visa from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'

import {BIconTelephone, BIconEnvelope} from 'bootstrap-icons-vue'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

import {footerLinks, topLinks} from '@/assets/data/footer-items'
import {currentYear, developedBy, developedByLink} from '@/helpers/constants'
</script>
