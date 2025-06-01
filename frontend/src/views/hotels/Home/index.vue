<template>
  <NavBar @searchData="handleDataFromChild" @error="errorFromParent" />
  
  <main>
    <Hero @searchData="handleDataFromChild" @error="errorFromParent" />
    <FeaturedHotels :searchData="receivedData" />
  </main>

  <Footer />
  <MobileBottomMenu />
  <BackToTop />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NavBar from '@/views/hotels/Home/components/NavBar.vue';
import Hero from '@/views/hotels/Home/components/Hero.vue';
import FeaturedHotels from '@/views/hotels/Home/components/FeaturedHotels.vue';
import Footer from '@/views/hotels/Home/components/Footer.vue';
import MobileBottomMenu from './components/MobileBottomMenu.vue';
import BackToTop from '@/components/BackToTop.vue';
import { filterHotelDataStore, useCurrencyCode } from '@/stores/auth';

const receivedData: any = ref('');
const errorMessage: any = ref(''); // To store any potential error message

const useCurrency = useCurrencyCode();
const useCurrencyData = useCurrency.getData();
const filterHotel = filterHotelDataStore();

let currencyData = {
  symbol: '$',
  flag: 'https://flagcdn.com/w320/us.png',
  code: 'USD'
};
if (!useCurrencyData) {
  console.log('Currency : ' + currencyData.symbol);
  useCurrency.saveSession(currencyData);
}

// Function to handle the emitted data
const handleDataFromChild = (data: any) => {
  if (!data.location || !data.arrival_date || !data.end_date) {
    errorMessage.value = "Please fill in all required fields.";
    emitErrorToChild(errorMessage.value);
    return;
  }
  receivedData.value = data;
};

const emitErrorToChild = (message: string) => {
  this.$emit('error', message);
};

// onMounted(() => {
//   console.log("Remove filter Data");
//   filterHotel.removeSession();
// });
</script>
