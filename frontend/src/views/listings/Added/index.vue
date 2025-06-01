<template>
  <NavBar4 />

  <main>
    <Hero />
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/listings/Added/components/NavBar4.vue';
import Hero from '@/views/listings/Added/components/Hero.vue';
import Footer5 from '@/views/listings/Added/components/Footer5.vue';
import BackToTop from '@/components/BackToTop.vue';

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.body.classList.add('dashboard');
});

onUnmounted(() => {
  document.body.classList.remove('dashboard');
});
</script>