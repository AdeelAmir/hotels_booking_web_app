<template>
  <b-card-header class="border-bottom bg-transparent px-0 pt-0">
    <h3 class="mb-0">Location and Nearby Points of Interest</h3>
  </b-card-header>
  <iframe class="h-full w-full rounded-xl" width="w-50" height="400px"
    :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2f264fb%3A0x2b9da3cd6b37995!2sYour%20Location%20Name!5e0!3m2!1sen!2sus!4v1605230213811!5m2!1sen!2sus`"
    loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
</template>

<script setup lang="ts">
import { HotelDetailStore } from '@/stores/auth';
import { ref } from 'vue';

const HotelDetails = HotelDetailStore();
const HotelDetail = HotelDetails.getUserData().data;
const geoLocatons = HotelDetail.header.geo_location.coordinates;
console.log("geoLocatons : " + geoLocatons);


const latitude = ref(geoLocatons[1]);
const longitude = ref(geoLocatons[0]);
</script>

<style>
.h-500 {
  height: 500px;
}
</style>


<!-- <template>
  <b-card-header class="border-bottom bg-transparent px-0 pt-0">
    <h3 class="mb-0">Location and Nearby Points of Interest</h3>
  </b-card-header>
  <div id="azureMap" class="h-500 w-full"></div>
</template>

<script setup lang="ts">
import { HotelDetailStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
import * as atlas from 'azure-maps-control';

const HotelDetails = HotelDetailStore();
const HotelDetail = HotelDetails.getUserData().data;
const geoLocations = HotelDetail.header.geo_location.coordinates;
const mapKey = '6vqSZFe7VK4DhVUrhRAM39kq1IL0anpj4DAOMzRdqJjvAd5A5Ck0JQQJ99AFACYeBjFhSH7vAAAgAZMPEKh3';  // Replace with your actual Azure Maps key

const latitude = ref(geoLocations[1]);
const longitude = ref(geoLocations[0]);
const locationName = ref("Haymarket Hotel, Firmdale Hotels"); // Adjust as needed

onMounted(() => {
  const map = new atlas.Map('azureMap', {
    center: [longitude.value, latitude.value],
    zoom: 15,
    view: 'Auto',
    authOptions: {
      authType: atlas.AuthenticationType.subscriptionKey,  // Use enum for type safety
      subscriptionKey: mapKey,
    },
  });

  map.events.add('ready', () => {
    // Add a pin at the location
    const pin = new atlas.HtmlMarker({
      position: [longitude.value, latitude.value],
      text: '📍',
      color: 'red',
    });
    map.markers.add(pin);

    // Optional: Add a popup with location name
    const popup = new atlas.Popup({
      content: `<div style="padding: 8px;">${locationName.value}</div>`,
      position: [longitude.value, latitude.value],
    });

    // Show popup on marker click
    map.events.add('click', pin, () => {
      popup.open(map);
    });
  });
});
</script>

<style>
.h-500 {
  height: 500px;
}
</style> -->
