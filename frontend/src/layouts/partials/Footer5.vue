<template>
  <footer class="bg-dark p-3">
    <b-container>
      <b-row class="align-items-center">
        <b-col md="4">
          <div class="text-center text-md-start mb-3 mb-md-0">
            <router-link :to="{ name: 'hotels.home' }"
              ><img class="h-30px" :src="logoLight" alt="logo"
            /></router-link>
          </div>
        </b-col>

        <b-col md="4">
          <div class="text-body-secondary text-primary-hover text-center">
            Copyrights ©{{ currentYear }}. Build by
            <a :href="developedByLink" class="text-body-secondary">{{ developedBy }}</a>.
          </div>
        </b-col>

        <b-col md="4">
          <ul class="list-inline mb-0 text-center text-md-end">
            <li v-for="(app, idx) in apps" :key="idx" class="list-inline-item ms-2">
              <a href="#">
                <font-awesome-icon :icon="app" class="text-white" />
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoLight from '@/assets/images/logo-light.svg'
import {currentYear, developedBy, developedByLink} from '@/helpers/constants'

import type { FAIconType } from '@/types'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const apps: FAIconType[] = [faFacebook, faInstagram, faLinkedin, faTwitter]
</script>
