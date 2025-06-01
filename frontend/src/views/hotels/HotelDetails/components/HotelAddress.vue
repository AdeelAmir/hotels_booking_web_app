<template>
  <section class="py-0 pt-sm-5">
    <b-container class="position-relative">
      <b-row class="mb-3">
        <b-col cols="12">
          <div class="d-lg-flex justify-content-lg-between mb-1">
            <div class="mb-2 mb-lg-0">
              <h1 class="fs-2">{{ hotelTitle }}</h1>
              <p class="fw-bold mb-0">
                <BIconGeoAlt class="me-1" />
                {{ HotelAddress }}
                <a href="#" class="ms-2 text-decoration-underline" @click="toggleModal">
                  <BIconEyeFill class="mb-1" />
                  View On Map
                </a>
              </p>
            </div>

            <ul class="list-inline text-end">
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm btn-light px-2 me-1">
                  <font-awesome-icon :icon="faHeart" />
                </a>
              </li>

              <li class="list-inline-item dropdown">
                <b-dropdown size="lg" variant="link" toggle-class="btn btn-sm btn-light px-2"
                  menuClass="dropdown-menu-end w-auto shadow rounded" no-caret>
                  <template #button-content>
                    <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                  </template>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                    Twitter
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                    Facebook
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faLinkedin" class="me-2" />
                    LinkedIn
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faCopy" class="me-2" />
                    Copy link
                  </b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <b-modal v-model="showModal" centered body-class="p-0" size="lg" title="View Our Hotel Location" title-tag="h5" class="fade" id="mapmodal" @shown="initializeMap">
    <div id='map' class="map-container"></div>
    <template v-slot:footer>
      <b-button variant="primary" size="sm" class="mb-0" @click="openInGoogleMaps">
        <BIconPinMap class="fa-fw me-2" />
        View In Google Map
      </b-button>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as atlas from 'azure-maps-control'
import { BIconPinMap } from 'bootstrap-icons-vue'
import { faHeart, faShareAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { BIconEyeFill, BIconGeoAlt } from 'bootstrap-icons-vue'
import { HotelDetailStore } from '@/stores/auth'

const showModal = ref(false)
const HotelDetails = HotelDetailStore();
const hotelTitle = ref('')
const HotelAddress = ref('')
const hotelLat = ref('')
const hotelLong = ref('')

const fetchFilterHotelData = async () => {
  const getHotelDetail = HotelDetails.getUserData().data;
  hotelLat.value = getHotelDetail.header.geo_location.coordinates[1]
  hotelLong.value = getHotelDetail.header.geo_location.coordinates[0]
  hotelTitle.value = getHotelDetail.header.hotel_name;
  HotelAddress.value = getHotelDetail.header.location;
}

onMounted(() => {
  fetchFilterHotelData();
});

const toggleModal = async () => {
  showModal.value = !showModal.value;
}

const initializeMap = () => {
  if (showModal.value) {
    const map = new atlas.Map('map', {
      center: [hotelLong.value, hotelLat.value],
      zoom: 13,
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: '6vqSZFe7VK4DhVUrhRAM39kq1IL0anpj4DAOMzRdqJjvAd5A5Ck0JQQJ99AFACYeBjFhSH7vAAAgAZMPEKh3',
      },
    });

    map.events.add('ready', () => {
      map.controls.add(new atlas.control.ZoomControl(), { position: atlas.ControlPosition.BottomRight });
      map.controls.add(new atlas.control.StyleControl(), { position: atlas.ControlPosition.TopLeft });
    });
  }
}

const openInGoogleMaps = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=${hotelLat.value},${hotelLong.value}`;
  window.open(googleMapsUrl, '_blank');
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
