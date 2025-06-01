<template>
  <section class="py-0 py-md-5">
    <b-container>
      <b-row class="g-4 g-lg-7 d-flex justify-content-center align-items-center">
        <CustomTinySlider id="client-slider" :settings="clientSliderSettings">
        <b-col v-for="(client, idx) in clients" :key="idx" cols="5" sm="3" xl="2">
          <img :src="client" class="grayscale" alt="clientLogo" />
        </b-col>
        </CustomTinySlider>
        <!-- <b-col v-for="(client, idx) in clients" :key="idx" cols="5" sm="3" xl="2">
          <img :src="client" class="grayscale" alt="clientLogo" />
        </b-col> -->
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import type { TinySliderSettings } from 'tiny-slider'
const clients = [client1, client2, client3, client4, client5, client6]
const clientSliderSettings: TinySliderSettings = {
  nested: 'inner',
  gutter: 20,
  controls: false,
  edgePadding: 10,
  // autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  nav: false, // Enable navigation dots
  // navPosition: 'bottom', // Position of the navigation dots
  responsive: {
    0: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
}
</script>
<style>
.img-box{
  width: 150px;
}
</style>
