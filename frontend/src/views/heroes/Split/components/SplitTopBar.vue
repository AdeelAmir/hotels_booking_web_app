<template>
  <nav class="navbar navbar-expand-xl navbar-divider">
    <b-container class="px-0">
      <div class="navbar-collapse w-100 collapse" id="navbarCollapse2">
        <ul class="navbar-nav nav-active-line navbar-nav-scroll mx-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'hotels.home' }" class="nav-link">Hotels</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'flights.home' }" class="nav-link">Flights</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'tour.home' }" class="nav-link">Tours</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'cabs.home' }" class="nav-link">Cabs</router-link>
          </li>

          <b-offcanvas id="mobileOffcanvas" v-if="isMobileMenu" no-header>
            <VerticalMenu show-extra-pages />
          </b-offcanvas>

          <AppMenu v-else show-extra-pages />
        </ul>
      </div>
    </b-container>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AppMenu from '@/components/navbar/AppMenu.vue'
import VerticalMenu from '@/components/navbar/mobile-menu/VerticalMenu.vue'

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>
