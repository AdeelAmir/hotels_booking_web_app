<template>
  <NavBar11 />

  <main>
    <slot />
  </main>

  <Footer />

  <BackToTop />
</template>

<script lang="ts" setup>
import NavBar11 from '@/views/hotels/Home/components/NavBar.vue'
import Footer from '@/views/hotels/Home/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
