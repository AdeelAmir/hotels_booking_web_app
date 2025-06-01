<template>
  <NavBar4 />

  <main>
    <Hero />

    <section>
      <b-container>
        <b-row >
          <HotelInformation />
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/hotels/Booking/components/NavBar4.vue';
import Hero from '@/views/user/Bookings-details/components/Hero.vue';
import HotelInformation from '@/views/user/Bookings-details/components/HotelInformation.vue';
import Footer5 from '@/views/hotels/Booking/components/Footer5.vue';
import BackToTop from '@/components/BackToTop.vue';
</script>
