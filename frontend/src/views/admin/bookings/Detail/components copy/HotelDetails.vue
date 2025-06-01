<template>
  <b-row>
    <b-col cols="12" class="mb-4 mb-sm-5">
      <div class="d-sm-flex justify-content-between align-items-center">
        <h1 class="h3 mb-2 mb-sm-0">{{ hotelDetail.title }}</h1>
        <!-- <router-link to="" class="btn btn-primary-soft text-nowrap mb-0">
          <div class="items-center gap-2">
            <div>
              <BIconPencilSquare />
            </div>
            Edit Room
          </div>
        </router-link> -->
      </div>
    </b-col>
  </b-row>

  <b-row class="g-4 g-xl-5">
    <b-col xxl="6">
      <b-row class="g-2 g-sm-4">
        <b-col v-for="(image, idx) in hotelImages" cols="6" :key="idx">
          <CustomGLightbox :link="image">
            <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
              <img :src="image" class="rounded-3" alt="" />
              <div class="hover-element w-100 h-100">
                <div
                  class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                >
                  <BIconFullscreen class="text-white" />
                </div>
              </div>
            </b-card>
          </CustomGLightbox>
        </b-col>
      </b-row>
    </b-col>

    <b-col xxl="6">
      <h4><span class="fw-light">Hotel: </span>{{ hotelDetail.hotelName }}</h4>
      <p class="fw-bold items-center">
        <BIconGeoAlt class="me-2 mb-1" />
        {{ hotelDetail.hotelAddress }}
      </p>
      <p class="mb-4">
        {{ hotelDetail.hotelDesc }}
      </p>

      <!-- <b-row class="g-4">
        <b-col v-for="(item, idx) in hotel.features" :key="idx" cols="6" md="4">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-2">
              <font-awesome-icon :icon="item.icon" />
            </div>
            <div class="ms-2">
              <small>{{ item.feature.label }}</small>
              <h6 class="mb-0 mt-1">{{ item.feature.name }}</h6>
            </div>
          </div>
        </b-col>
      </b-row> -->

      <b-row class="g-4">
        <b-col cols="6" md="4">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-2">
              <font-awesome-icon :icon="FaBed" />
            </div>
            <div class="ms-2">
              <small>Type</small>
              <h6 class="mb-0 mt-1">{{ hotelDetail.type }}</h6>
            </div>
          </div>
        </b-col>
      </b-row>

      <!-- <div
        class="bg-light border border-secondary border-opacity-25 p-3 rounded d-inline-block mt-4"
      >
        <h6 class="small">Current Reservation:</h6>
        <div class="d-sm-flex align-items-center">
          <div class="avatar avatar-xs flex-shrink-0">
            <img class="avatar-img rounded-circle" :src="currentReservation.image" alt="avatar" />
          </div>
          <h6 class="mb-0 ms-2">{{ currentReservation.name }}</h6>
        </div>
        <div class="hstack gap-4 gap-md-5 flex-wrap mt-2">
          <div>
            <small>Check-in:</small>
            <h6 class="fw-normal mb-0">{{ currentReservation.checkIn }}</h6>
          </div>
          <div>
            <small>Check-out:</small>
            <h6 class="fw-normal mb-0">{{ currentReservation.checkOut }}</h6>
          </div>
          <div>
            <small>Total Amount:</small>
            <h6 class="text-success mb-0">{{ currency }}{{ currentReservation.amount }}</h6>
          </div>
        </div>
      </div> -->
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { BIconFullscreen, BIconGeoAlt, BIconPencilSquare } from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'
import { hotel, currentReservation } from '@/views/admin/bookings/Detail/data'
import { useRoute } from 'vue-router';
import { hotelListData } from '@/stores/auth';
import { ref } from 'vue';
import { FaBed } from 'oh-vue-icons/icons';

const hotelDetail:any = ref({});
const hotelImages:any = ref([]);
const hotelList = hotelListData();
let getListData = hotelList.getData();

const route = useRoute();
const hotelId = route.params.id;
let filterData = getListData.roomsArr.find((item:any)=> item.id == hotelId);
hotelDetail.value = filterData;
hotelImages.value = [filterData.image, filterData.image, filterData.image, filterData.image]
console.log(filterData);


</script>
