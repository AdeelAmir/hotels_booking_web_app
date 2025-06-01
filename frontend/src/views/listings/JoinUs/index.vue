<template>
  <NavBar4 />

  <main>
    <Hero />

    <Counter />

    <Benefits />

    <Testimonial />

    <ActionBox />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/listings/JoinUs/components/NavBar4.vue'
import Hero from '@/views/listings/JoinUs/components/Hero.vue'
import Counter from '@/views/listings/JoinUs/components/Counter.vue'
import Benefits from '@/views/listings/JoinUs/components/Benefits.vue'
import Testimonial from '@/views/listings/JoinUs/components/Testimonial.vue'
import ActionBox from '@/views/listings/JoinUs/components/ActionBox.vue'
import Footer from '@/views/listings/JoinUs/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>
