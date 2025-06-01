<template>
  <NavBar4 />

  <main>
    <Hero />

    <section>
      <b-container>
        <b-row class="g-4 g-lg-5">
          <HotelInformation />

          <aside class="col-xl-4">
            <b-row class="g-4">
              <PriceSummary />

              <!-- <OfferDiscount /> -->

              <LoginAd />
            </b-row>
          </aside>
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer5 />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar4 from '@/views/hotels/Booking/components/NavBar4.vue';
import Hero from '@/views/hotels/Booking/components/Hero.vue';
import HotelInformation from '@/views/hotels/Booking/components/HotelInformation.vue';
import LoginAd from '@/views/hotels/Booking/components/LoginAd.vue';
import OfferDiscount from '@/views/hotels/Booking/components/OfferDiscount.vue';
import PriceSummary from '@/views/hotels/Booking/components/PriceSummary.vue';
import Footer5 from '@/views/hotels/Booking/components/Footer5.vue';
import BackToTop from '@/components/BackToTop.vue';
import { onMounted } from 'vue';

onMounted(()=>{
  window.scrollTo(0, 0);
})
</script>
