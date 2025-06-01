<template>
  <NavBar4 />

  <main>
    <!-- Show ContentLoader while loading -->
    <b-container v-if="loading">
      <ContentLoading />
    </b-container>

    <!-- Show actual components once data is loaded -->
    <template v-else>
      <AvailabilityFilter />
      <HotelAddress />
      <ImageGallery />
      <AboutHotel />
    </template>
  </main>

  <Footer />
  <BackToTop />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { filterHotelDataStore, HotelDetailStore } from '@/stores/auth';
import { FetchIVectorHotelDetails, FilterHotelDetails } from '@/helpers/backend-api';
import NavBar4 from '@/views/hotels/HotelDetails/components/NavBar4.vue';
import AvailabilityFilter from '@/views/hotels/HotelDetails/components/AvailabilityFilter.vue';
import HotelAddress from '@/views/hotels/HotelDetails/components/HotelAddress.vue';
import ImageGallery from '@/views/hotels/HotelDetails/components/ImageGallery.vue';
import AboutHotel from './components/AboutHotel.vue';
import Footer from '@/views/hotels/HotelDetails/components/Footer.vue';
import BackToTop from '@/components/BackToTop.vue';
import { ContentLoader } from 'vue-content-loader';
import router from '@/router';
import ContentLoading from './components/Shimmer.vue';

const route = useRoute();
const loading = ref(true); // Set to true initially to show loader
const HotelDetails = HotelDetailStore();

onMounted(async () => {
  window.scrollTo(0, 0);
  const filterHotel = filterHotelDataStore();
  let filterOptions = filterHotel.getUserData()?.filterOptions ?? {};
  const hotelId = route.params.id;

  try {
    const data = {
      room_requests: filterOptions.room_requests,
      arrival_date: filterOptions.arrival_date,
      end_date: filterOptions.end_date,
      hotelId: hotelId
    };

    // Fetch hotel details
    const response = await FilterHotelDetails(data);
    if (response.status === true) {
      let responseData = {
        data: response.data[0], // Save hotel data
        iVectorData: {}
      };
      loading.value = false;
      HotelDetails.saveSession(responseData);
      console.log("Data Are Stored Sucessfully!");
      
    } else {
      // If first API fails, stop loading and redirect
      loading.value = false;
      router.push(`/`);
    }
  } catch (err: any) {
    console.error(err);
    loading.value = false;
    router.push(`/`);
  }
});
</script>

