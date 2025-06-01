<template>
  <NavBar4 />

  <main>
    <Hero />

    <MinimalListing />
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/listings/AddMinimal/components/NavBar4.vue'
import Hero from '@/views/listings/AddMinimal/components/Hero.vue'
import MinimalListing from '@/views/listings/AddMinimal/components/MinimalListing.vue'
import Footer5 from '@/views/listings/AddMinimal/components/Footer5.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
