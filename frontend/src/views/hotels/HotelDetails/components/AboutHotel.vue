<template>
  <section class="pt-0">
    <b-container data-sticky-container>
      <b-row class="g-4 g-xl-5">
        <b-col xl="7" class="order-1">
          <b-card-header class="border-bottom bg-transparent px-0 pt-0">
            <h3 class="mb-3">Point of View</h3>
          </b-card-header>
          <div class="mt-3 mb-4">
            <span>{{ pointOfView }}</span>
          </div>

          <div class="vstack gap-5">
            <b-card no-body class="bg-transparent">
              <b-card-header class="border-bottom bg-transparent px-0 pt-0">
                <h3 class="mb-0">About This Hotel</h3>
              </b-card-header>

              <b-card-body class="pt-4 p-0">
                <h5 class="fw-light mb-4">Main Highlights</h5>

                <div class="hstack gap-3 mb-3">
                  <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Free wifi">
                    <font-awesome-icon :icon="faWifi" />
                  </div>
                  <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Swimming Pool">
                    <font-awesome-icon :icon="faSwimmingPool" />
                  </div>
                  <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Central AC">
                    <font-awesome-icon :icon="faSnowflake" />
                  </div>
                  <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="Free Service">
                    <font-awesome-icon :icon="faConciergeBell" />
                  </div>
                </div>
                <p class="mb-3">{{ paragraphs[0] }}
                </p>
                <p class="mb-0">{{ paragraphs[1] }}
                </p>

                <div class="collapse" id="collapseContent">
                  <p class="my-3">{{ paragraphs[2] }}
                  </p>
                  <p class="mb-0">
                    {{ paragraphs[3] }}
                  </p>
                </div>
                <a class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed" data-bs-toggle="collapse"
                  href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
                  See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
                  <font-awesome-icon :icon="faAngleDown" class="ms-2" />
                </a>
              </b-card-body>
            </b-card>

            <ProsCons />

            <Amenities />

            <RoomOptions />

            <CustomerReview />

            <FAQS />

            <HotelPolicies />
            <MapLocation/>
          </div>
        </b-col>
        <aside class="col-xl-5 order-xl-2 ">
          <PriceOverview />
        </aside>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import {
  faWifi,
  faSwimmingPool,
  faSnowflake,
  faConciergeBell,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import Amenities from '@/views/hotels/HotelDetails/components/Amenities.vue'
import RoomOptions from '@/views/hotels/HotelDetails/components/RoomOptions.vue'
import CustomerReview from '@/views/hotels/HotelDetails/components/CustomerReview.vue'
import HotelPolicies from '@/views/hotels/HotelDetails/components/HotelPolicies.vue'
import PriceOverview from '@/views/hotels/HotelDetails/components/PriceOverview.vue'
import { HotelDetailStore } from '@/stores/auth'
import FAQS from './FAQS.vue'
import ProsCons from './ProsCons.vue'
import { ref } from 'vue'
import MapLocation from './MapLocation.vue'

let HotelDetails: any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData().data;
const pointOfView = ref(HotelDetails.PointOfView);
const hotelDescription = HotelDetails.hotel_description;
console.log(hotelDescription);

const sentenceCounts = [2, 1, 4, 4];
const paragraphs: any = [];

const splitDescription = async (description: any, sentenceCounts: any) => {
  const sentences = description.split('. ').filter((sentence: any) => sentence.trim().length > 0);
  let currentIndex = 0;
  sentenceCounts.forEach((count: any) => {
    const paragraph = sentences.slice(currentIndex, currentIndex + count).join('. ') + '.';
    paragraphs.push(paragraph);
    currentIndex += count;
  });
  return paragraphs;
}
console.log(paragraphs);


splitDescription(hotelDescription, sentenceCounts);

</script>
