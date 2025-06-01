<template>
  <NavBar />

  <main>
    <Banner />

    <Demos />

    <Features />

    <section
      class="h-800px overflow-hidden"
      :style="{
        backgroundImage: `url(${landingBg6})`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
      }"
    >
      <b-container class="my-5 py-md-9">
        <b-row>
          <b-col md="10" lg="5" cols="11" class="mx-auto text-center mt-lg-0">
            <h2 class="mb-4">Account and dashboard pages included</h2>
            <router-link :to="{ name: 'user.profile' }" class="btn btn-sm btn-primary-soft me-2"
              >View user pages
            </router-link>
            <router-link :to="{ name: 'agent.dashboard' }" class="btn btn-sm btn-success-soft"
              >View agent pages
            </router-link>
            <router-link :to="{ name: 'admin.dashboard' }" class="btn btn-sm btn-danger-soft"
              >View dashboard pages
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/views/Landing/components/NavBar.vue'
import Banner from '@/views/Landing/components/Banner.vue'
import Demos from '@/views/Landing/components/Demos.vue'
import Features from '@/views/Landing/components/Features.vue'
import Footer from '@/views/Landing/components/Footer.vue'

import landingBg6 from '@/assets/images/landing/bg/06.png'
</script>
