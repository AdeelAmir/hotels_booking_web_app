<template>
  <!-- <NavBar4 />

  <main>
    <Hero />

    <section>
      <b-container>
        <b-row>
          <HotelInformation />
        </b-row>
      </b-container>
    </section> -->

  <!-- </main>
  
  <Footer5 /> -->
  <AdminLayout>
    <HotelInformation />
  </AdminLayout>

  <BackToTop />
</template>

<script setup lang="ts">
import HotelInformation from './components/HotelInformation.vue';
import BackToTop from '@/components/BackToTop.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
</script>
