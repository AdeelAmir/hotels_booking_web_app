<template>
  <NavBar7 />

  <main>
    <Hero />

    <DirectoryDetails />
  </main>

  <Footer2 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar7 from '@/views/directories/Details/components/NavBar7.vue'
import Hero from '@/views/directories/Details/components/Hero.vue'
import DirectoryDetails from '@/views/directories/Details/components/DirectoryDetails.vue'
import Footer2 from './components/Footer2.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
