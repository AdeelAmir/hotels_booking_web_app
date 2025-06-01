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
        <b-row class="g-4">
          <b-col sm="6" lg="4" xl="3" class="xxxl-col" v-for="(hotel, idx) in filterHotels" :key="idx">
            <HotelCard :hotel="hotel" />
          </b-col>
        </b-row>

        <!-- <b-modal v-model="checkingHotels" hide-footer hide-header class="custom-modal">
          <Loader />
        </b-modal> -->

        <!-- Show 'Show More' Button if there are more hotels to load -->
        <div v-if="hasMore && filterHotels.length > 0" class="text-center mt-3">
          <h6>Continue Exploring</h6>
          <b-button @click="fetchHotels" variant="primary">Show More</b-button>
        </div>
      </div>
    </template>

    <!-- Display dummy data if no hotels are found -->
    <template v-else>
      <div class="px-3 px-md-5 mb-4">
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
import { ref, watch, onMounted } from 'vue';
import { filterHotelDataStore, useCurrencyCode } from '@/stores/auth';
import { FilterHotels, FilterIVectorHotels } from '@/helpers/backend-api';
import Shimmer from './Shimmer.vue';
import BenefitsFeature from './BenefitsFeature.vue';
import HotelListFilter from './HotelListFilter.vue';
import Loader from './loader.vue';
import { useToast } from 'vue-toastification';

const toast = useToast()
const filterHotel = filterHotelDataStore();
const filterHotels = ref<any[]>([]);
const isLoading = ref(false);
const filterData: any = ref(null);
const hasMore = ref(true);
const page = ref(0);
let hotelsData: any[] = [];
const props = defineProps(['searchData']);

// Number of hotels to load per click
const dataPerPage = 8;

// Fetch more hotels based on the current pagination
const fetchHotels = async () => {
  if (isLoading.value || !hasMore.value) return;
  isLoading.value = true;

  try {
    const start = page.value * dataPerPage;
    const end = start + dataPerPage;
    const moreData = hotelsData.slice(start, end);

    if (moreData.length === 0) {
      hasMore.value = false; // No more hotels to load
    } else {
      filterHotels.value.push(...moreData); // Add more hotels to the list
      page.value += 1; // Increment page for next fetch

      // Update `hasMore` to reflect if there's more data left to fetch
      hasMore.value = hotelsData.length > page.value * dataPerPage;
    }
  } catch (error) {
    console.error('Failed to fetch more hotels:', error);
  } finally {
    isLoading.value = false;
  }
};


// Update hotels list after receiving filter data
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
    page.value = 1; // Start pagination at 1
    hasMore.value = hotelsData.length > dataPerPage; // Check if more data exists
  } else {
    filterHotels.value = [];
    hasMore.value = false; // No data available
  }
  isLoading.value = false;
};

// Watch for search data changes
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
      }
    } catch (err) {
      isLoading.value = false;
    }
  }
});


const currencySelected = useCurrencyCode(); // This gives access to the Pinia store
watch(() => currencySelected.currencyCode, async (newCurrency) => {
  console.log("Currency changes now ============ >");
  if (newCurrency && props.searchData) {
    isLoading.value = true;
    try {
      const parsedCurrency = JSON.parse(newCurrency);
      const updatedQuery = { ...props.searchData, currency: parsedCurrency.code };
      const response = await FilterHotels(updatedQuery);

      if (response.status) {
        filterData.value = response.data;
        filterHotel.saveSession({ data: response.data, filterOptions: updatedQuery });
        updateFilterHotels();
        getIvectorData(props.searchData, response.data);
      } else {
        isLoading.value = false;
      }
    } catch (error) {
      isLoading.value = false;
      console.error('Error fetching data for new currency:', error);
    } finally {
      isLoading.value = false;
    }
  }
});

// Fetch additional hotel data
const getIvectorData = async (newQuery: any, Data: any) => {

  const data = {
    results: JSON.stringify(Data.PropertyResults),
    propertyIds: JSON.stringify(Data.propertyIds),
  };
  toast.success('Checking Available Rooms...');
  const response2 = await FilterIVectorHotels(newQuery, data);
  if (response2.status) {
    filterData.value = response2.data;
    filterHotel.saveSession({
      data: response2.data,
      filterOptions: newQuery,
    });
    updateFilterHotels();
  }
};

watch(
  () => filterHotel.getUserData(),
  async () => {
      updateFilterHotels();
  },
  { immediate: true}
);

// Initial population of filterHotels
onMounted(() => {
  updateFilterHotels();
});
</script>
