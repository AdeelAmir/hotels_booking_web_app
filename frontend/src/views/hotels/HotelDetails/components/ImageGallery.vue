<template>
  <section class="card-grid pt-0">
    <b-container>
      <b-row class="g-2">
        <b-col md="6">
          <CustomGLightbox :link="hotelImage1" ref="lightbox">
            <b-card
              no-body
              class="card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
              :style="{
                backgroundImage: `url(${hotelImage1})`,
                backgroundPosition: 'center left',
                backgroundSize: 'cover'
              }"
            >
              <div class="hover-element position-absolute w-100 h-100">
                <BIconFullscreen
                  class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                />
              </div>
            </b-card>
          </CustomGLightbox>
        </b-col>

        <b-col md="6">
          <b-row class="g-2">
            <b-col cols="12">
              <CustomGLightbox :link="hotelImage2">
                <b-card
                  no-body
                  class="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                  :style="{
                    backgroundImage: `url(${hotelImage2})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="hover-element position-absolute w-100 h-100">
                    <BIconFullscreen
                      class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </b-col>

            <b-col md="6">
              <CustomGLightbox :link="hotelImage3">
                <b-card
                  no-body
                  class="card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                  :style="{
                    backgroundImage: `url(${hotelImage3})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover'
                  }"
                >
                  <div class="hover-element position-absolute w-100 h-100">
                    <BIconFullscreen
                      class="h4 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </b-col>

            <b-col md="6">
              <b-card
                no-body
                class="card-grid-sm overflow-hidden"
                :style="{
                  backgroundImage: `url(${hotelImage4})`,
                  backgroundPosition: 'center left',
                  backgroundSize: 'cover'
                }"
              >
                <div class="bg-overlay bg-dark opacity-7"></div>
                <CustomGLightbox
                  :link="hotelImage4"
                  class="stretched-link z-index-9"
                ></CustomGLightbox>
                <div class="card-img-overlay d-flex h-100 w-100">
                  <b-card-title tag="h6" class="m-auto fw-light text-decoration-underline">
                    <a href="#" class="text-white" @click.prevent="openGalleryView">
                      View all
                    </a>
                  </b-card-title>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { BIconFullscreen } from 'bootstrap-icons-vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { HotelDetailStore } from '@/stores/auth'

let HotelDetails:any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData()
let hotelImages = HotelDetails.data.general_images;
console.log(HotelDetails);

const hotelImage1 = ref(hotelImages[0]?.url || '');
const hotelImage2 = ref(hotelImages[1]?.url || '');
const hotelImage3 = ref(hotelImages[2]?.url || '');
const hotelImage4 = ref(hotelImages[3]?.url || '');
const images = ref(hotelImages.slice(5));

const viewAll = ref(false);

watch(
  () => HotelDetails.general_images, 
  (newImages) => {
    hotelImages = newImages;
    hotelImage1.value = newImages[0]?.url || '';
    hotelImage2.value = newImages[1]?.url || '';
    hotelImage3.value = newImages[2]?.url || '';
    hotelImage4.value = newImages[3]?.url || '';
    images.value = newImages.slice(5);
  },
  { deep: true }
);

const openGalleryView = () => {
  viewAll.value = true;
};
</script>
