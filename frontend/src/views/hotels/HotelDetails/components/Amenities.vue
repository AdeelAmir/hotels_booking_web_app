<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <b-card-title tag="h3" class="mb-0">Amenities</b-card-title>
    </b-card-header>

    <b-card-body class="pt-4 p-0">
      <b-row class="g-4">
        <b-col sm="4">
          <ul class="list-group list-group-borderless mb-0">
            <li v-for="(amenity, index) in amenitiesColumn1" :key="index" class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              {{ amenity }}
            </li>
          </ul>
        </b-col>
        <b-col sm="4">
          <ul class="list-group list-group-borderless mb-0">
            <li v-for="(amenity, index) in amenitiesColumn2" :key="index" class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              {{ amenity }}
            </li>
          </ul>
        </b-col>
        <b-col sm="4">
          <ul class="list-group list-group-borderless mb-0">
            <li v-for="(amenity, index) in amenitiesColumn3" :key="index" class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              {{ amenity }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { HotelDetailStore } from '@/stores/auth';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Define the type for hotel details
interface HotelDetail {
  all_facilities_and_services: string[];
}

// Get hotel details
const HotelDetails = HotelDetailStore();
const amenitiesColumn1 = ref<string[]>([]);
const amenitiesColumn2 = ref<string[]>([]);
const amenitiesColumn3 = ref<string[]>([]);
const columns = 3;

const divideAmenities = (items: string[], numColumns: number): string[][] => {
  const result: string[][] = Array.from({ length: numColumns }, () => []);
  items.forEach((item, index) => {
    result[index % numColumns].push(item);
  });
  return result;
};

// Scroll to the top of the page smoothly
window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(() => {
  const hotelData: HotelDetail | null = HotelDetails.getUserData()?.data || null; // Use optional chaining and fallback
  if (hotelData) {
    const hotelAmenities = hotelData.all_facilities_and_services.filter((item: string) => item.trim() !== '');
    // Divide amenities into three columns
    const dividedAmenities = divideAmenities(hotelAmenities, columns);
    amenitiesColumn1.value = dividedAmenities[0];
    amenitiesColumn2.value = dividedAmenities[1];
    amenitiesColumn3.value = dividedAmenities[2];
  }
});
</script>
