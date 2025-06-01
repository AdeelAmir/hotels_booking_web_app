<template>
  <NavBar4 />

  <main>
    <Hero />

    <OfferDetails />
  </main>

  <Footer />

  <BackToTop />
</template>
<script setup lang="ts">
import NavBar4 from '@/views/listing-pages/OfferDetail/components/NavBar4.vue'
import Hero from '@/views/listing-pages/OfferDetail/components/Hero.vue'
import OfferDetails from '@/views/listing-pages/OfferDetail/components/OfferDetails.vue'
import Footer from '@/views/listing-pages/OfferDetail/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
