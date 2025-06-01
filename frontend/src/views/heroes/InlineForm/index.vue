<template>
  <NavBar8 />

  <main>
    <Hero />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar8 from '@/views/heroes/InlineForm/components/NavBar8.vue'
import Hero from '@/views/heroes/InlineForm/components/Hero.vue'
import Footer from '@/views/heroes/InlineForm/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
