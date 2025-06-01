<template>
  <Navbar />

  <main>
    <section class="pt-4">
      <b-container>
        <div class="card rounded-3 border p-3 pb-2">
          <div class="d-sm-flex align-items-center">
            <div class="avatar avatar-xl mb-2 mb-sm-0">
              <img class="avatar-img rounded-circle" :src="avatar1" alt="" />
            </div>
            <h4 class="mb-2 mb-sm-0 ms-sm-3"><span class="fw-light">Hi</span> Jacqueline Miller</h4>
            <router-link
              :to="{ name: 'listings.add' }"
              class="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0"
            >
              <BIconPlusLg class="fa-fw me-1 mb-1" />
              Add New Listing
            </router-link>
          </div>

          <!-- Responsive navbar toggler -->
          <b-button
            variant="primary"
            class="w-100 d-block d-xl-none mt-2"
            @click="isMobileMenu = !isMobileMenu"
          >
            <BIconList />
            Dashboard Menu
          </b-button>

          <div class="navbar mt-xl-3 navbar-expand-xl d-xl-block d-none">
            <AgentMenu />
          </div>

          <!--Mobile Menu-->
          <b-offcanvas
            v-model="isMobileMenu"
            size="xl"
            placement="end"
            class="mt-xl-3 d-xl-none d-flex"
            title="Menu"
            header-class="border-bottom p-3"
          >
            <div class="p-xl-0">
              <div class="navbar navbar-expand-xl">
                <AgentMenu />
              </div>
            </div>
          </b-offcanvas>
        </div>
      </b-container>
    </section>

    <slot />
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script lang="ts" setup>
import Navbar from '@/layouts/partials/NavBar.vue'
import Footer5 from '@/layouts/partials/Footer5.vue'
import BackToTop from '@/components/BackToTop.vue'
import AgentMenu from '@/layouts/partials/AgentMenu.vue'
import avatar1 from '@/assets/images/avatar/01.jpg'

import { BIconList, BIconPlusLg } from 'bootstrap-icons-vue'
import { ref } from 'vue'

const isMobileMenu = ref(false)
</script>
