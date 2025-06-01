<template>
  <Navbar />

  <main>
    <section class="pt-4">
      <b-container>
        <b-row>
          <SideBar v-if="!isMobileMenu" />

          <!--Mobile Sidebar-->
          <b-offcanvas
            v-else
            v-model="openMobileMenu"
            size="lg"
            placement="end"
            body-class="px-3 py-2"
          >
            <div class="p-lg-0">
              <SideBar />
            </div>
          </b-offcanvas>

          <b-col lg="8" xl="9">
            <div class="d-grid mb-0 d-lg-none w-100">
              <b-button class="mb-4" variant="primary" @click="openMobileMenu = !openMobileMenu">
                <font-awesome-icon :icon="faSlidersH" />
                Menu
              </b-button>
            </div>
            <slot />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
  <Footer5 />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/NavBar.vue'
import SideBar from '@/layouts/partials/SideBar.vue'
import Footer5 from '@/layouts/partials/Footer5.vue'
import BackToTop from '@/components/BackToTop.vue'

import { computed, onMounted, ref } from 'vue'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

onMounted(() => {
  document.body.classList.add('dashboard')
})

const openMobileMenu = ref<boolean>(false)

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>
