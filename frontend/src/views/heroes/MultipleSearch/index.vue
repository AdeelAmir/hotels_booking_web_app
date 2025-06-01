<template>
  <NavBar9 />

  <main>
    <BookingSearch />

    <TripCategories />
  </main>

  <Footer />

  <BackToTop />
</template>
<script setup lang="ts">
import NavBar9 from '@/views/heroes/MultipleSearch/components/NavBar9.vue'
import BookingSearch from '@/views/heroes/MultipleSearch/components/BookingSearch.vue'
import TripCategories from '@/views/heroes/MultipleSearch/components/TripCategories.vue'
import Footer from '@/views/heroes/MultipleSearch/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
