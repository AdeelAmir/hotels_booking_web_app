<template>
  <b-container v-if="isLoading">
    <Shimmer />
  </b-container>
  <div v-else class="my-2">
    <b-container class="d-block d-lg-none">
      <HotelListFilter />
    </b-container>
    <b-container class="col-12 d-flex justify-content-between align-items-center">
      <div class="d-none d-lg-flex justify-content-start align-items-center">
        <HotelListFilter />
      </div>
      <div class="col-12 col-lg-10">
        <BenefitsFeature />
      </div>
    </b-container>

    <!-- Display filtered hotels if available -->
    <template v-if="filterHotels.length > 0">
      <div class="px-3 px-md-6 mb-4">
        <!-- <h1>Filtered Hotels</h1> -->
        <b-row class="g-4">
          <b-col sm="6" lg="4" xl="3" class="xxxl-col" v-for="(hotel, idx) in filterHotels" :key="idx">
            <HotelCard :hotel="hotel" />
          </b-col>
        </b-row>

        <b-modal v-model="checkingHotels" centered hide-footer hide-header class="custom-modal">
          <Loader />
        </b-modal>
      </div>
    </template>

    <!-- Display dummy data if no hotels are found -->
    <template v-else>
      <div class="px-3 px-md-5 mb-4">
        <!-- <h1>No Hotels Found</h1> -->
        <b-row class="g-4">
          <b-col sm="6" lg="4" xl="3" class="xxxl-col" v-for="(dummy, idx) in featuredHotelsData" :key="idx">
            <HotelCard :hotel="dummy" />
          </b-col>
        </b-row>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import HotelCard from '@/views/hotels/Home/components/HotelCard.vue';
import { featuredHotelsData } from '@/views/hotels/Home/data';
import { useLayoutStore } from '@/stores/layout';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { filterHotelDataStore } from '@/stores/auth';
import { FilterHotels, FilterIVectorHotels } from '@/helpers/backend-api';
import Shimmer from './Shimmer.vue';
import BenefitsFeature from './BenefitsFeature.vue';
import HotelListFilter from './HotelListFilter.vue';
import Loader from './loader.vue';

// Initialize state variables
const filterHotel = filterHotelDataStore();
const filterHotels = ref<any[]>([]);
const isLoading = ref(false);
const checkingHotels = ref(false);
const filterData: any = ref(null);
const hasMore = ref(true);
const page = ref(0);
const error = ref('');
let hotelsData: any[] = [];
const props = defineProps(['searchData']);

// Pagination and scrolling logic
const dataPerPage = 12; // Number of hotels to load per scroll

// Function to fetch more hotels based on current pagination
const fetchHotels = async () => {
  if (isLoading.value || !hasMore.value) return;
  isLoading.value = true;

  try {
    const start = page.value * dataPerPage;
    const end = start + dataPerPage;
    const moreData = hotelsData.slice(start, end);

    if (moreData.length === 0) {
      hasMore.value = false; // No more hotels to fetch
    } else {
      filterHotels.value.push(...moreData); // Append fetched hotels to the list
      page.value += 1; // Increment the page number for the next fetch
    }
  } catch (error) {
    console.error('Failed to fetch more hotels:', error);
  } finally {
    isLoading.value = false;
  }
};

// Function to update the hotel list when data in the store changes
const updateFilterHotels = () => {
  const filterDataFromStore = filterHotel.getUserData()?.data;

  if (filterData.value || filterDataFromStore) {
    filterData.value = filterDataFromStore || filterData.value;
    hotelsData = filterData.value.PropertyResults.map((item: any) => ({
      id: item.PropertyID,
      hotelTags: item.HotelTags,
      images: [item.MainImageURL, item.MainImageURL, item.MainImageURL],
      name: item.propertyName,
      price: item.HotelPrice,
      ratings: item.Rating,
      ratingCount: item.RatingCount,
      overAllRating: item.OverAllRating,
    }));

    filterHotels.value = hotelsData.slice(0, dataPerPage); // Load first set of data
    page.value = 1; // Start at page 1 for pagination
    hasMore.value = hotelsData.length > dataPerPage;
  } else {
    filterHotels.value = [];
  }
  isLoading.value = false;
};

// Watch for search data changes and fetch filtered hotels
watch(() => props.searchData, async (newQuery) => {
  if (newQuery) {
    isLoading.value = true;
    try {
      const response = await FilterHotels(newQuery);
      if (response.status) {
        filterData.value = response.data;
        filterHotel.saveSession({ data: response.data, filterOptions: newQuery });
        updateFilterHotels();
        getIvectorData(newQuery, response.data);
      } else {
        isLoading.value = false;
        error.value = response.message;
      }
    } catch (err) {
      isLoading.value = false;
      error.value = 'Failed to filter, Please try again';
    }
  }
});

// Second API call for additional hotel data
const getIvectorData = async (newQuery: any, Data: any) => {
  const data = {
    results: JSON.stringify(Data.PropertyResults),
    propertyIds: JSON.stringify(Data.propertyIds)
  };
  checkingHotels.value = true;
  const response2 = await FilterIVectorHotels(newQuery, data);

  if (response2.status) {
    filterData.value = response2.data;
    checkingHotels.value = false;
    filterHotel.saveSession({
      data: response2.data,
      filterOptions: newQuery,
    });
    updateFilterHotels();
  } else {
    checkingHotels.value = false;
    console.error('Error from second API call:', response2.message);
  }
}

// Initial population of filterHotels and setting up scroll listener
onMounted(() => {
  updateFilterHotels();
  window.addEventListener('scroll', handleScroll);
});

// Clean up event listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Handle infinite scrolling on main page
const handleScroll = async () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
    if (!isLoading.value && hasMore.value) {
      await fetchHotels();
    }
  }
};
</script>

<style>
@media (min-width: 1980px) {
  .xxxl-col {
    flex: 0 0 auto;
    width: 20%;
  }
}

@media (min-width: 3000px) {
  .xxxl-col {
    flex: 0 0 auto;
    width: 15.76666%;
  }
}
</style>
