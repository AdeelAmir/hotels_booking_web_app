<template>
  <NavBar10 />

  <main>
    <AvailabilityFilter />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar10 from '@/views/heroes/Split/components/NavBar10.vue'
import AvailabilityFilter from '@/views/heroes/Split/components/AvailabilityFilter.vue'
import Footer from '@/views/heroes/Split/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
