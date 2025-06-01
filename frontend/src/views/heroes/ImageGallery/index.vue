<template>
  <NavBar8 />

  <main>
    <Gallery />
  </main>

  <Footer />

  <BackToTop />
</template>
<script setup lang="ts">
import NavBar8 from '@/views/heroes/ImageGallery/components/NavBar8.vue'
import Gallery from '@/views/heroes/ImageGallery/components/Gallery.vue'
import Footer from '@/views/heroes/ImageGallery/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
