<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <b-card-title tag="h3" class="mb-0">Customer Review</b-card-title>
    </b-card-header>
    <b-card-body class="pt-4 p-0">

      <b-col>
        <b-card no-body class="bg-light p-4 mb-4">
          <b-row class="g-4 align-items-center">
            <b-col md="12">
              <b-card-body class="p-0">
                <b-row class="gx-3 g-2 align-items-center">
                  <h5>Cleanliness</h5>
                  <b-col cols="9" sm="10">
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </b-col>

                  <b-col cols="3" sm="2" class="text-end">
                    <span class="h6 fw-light mb-0">{{ categoryReview.Cleanliness.rating }}</span>
                  </b-col>
                  <span>{{ categoryReview.Cleanliness.comment }}</span>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="bg-light p-4 mb-4">
          <b-row class="g-4 align-items-center">
            <b-col md="12">
              <b-card-body class="p-0">
                <b-row class="gx-3 g-2 align-items-center">
                  <h5>Location</h5>
                  <b-col cols="9" sm="10">
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </b-col>

                  <b-col cols="3" sm="2" class="text-end">
                    <span class="h6 fw-light mb-0">{{ categoryReview.Location.rating }}</span>
                  </b-col>
                  <span>{{ categoryReview.Location.comment }}</span>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="bg-light p-4 mb-4">
          <b-row class="g-4 align-items-center">
            <b-col md="12">
              <b-card-body class="p-0">
                <b-row class="gx-3 g-2 align-items-center">
                  <h5>Service</h5>
                  <b-col cols="9" sm="10">
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </b-col>

                  <b-col cols="3" sm="2" class="text-end">
                    <span class="h6 fw-light mb-0">{{ categoryReview.Service.rating }}</span>
                  </b-col>
                  <span>{{ categoryReview.Service.comment }}</span>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="bg-light p-4 mb-4">
          <b-row class="g-4 align-items-center">
            <b-col md="12">
              <b-card-body class="p-0">
                <b-row class="gx-3 g-2 align-items-center">
                  <h5>Value for Money</h5>
                  <b-col cols="9" sm="10">
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </b-col>

                  <b-col cols="3" sm="2" class="text-end">
                    <span class="h6 fw-light mb-0">{{categoryReview["Value for Money"].rating}}</span>
                  </b-col>
                  <span>{{categoryReview["Value for Money"].comment}}</span>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

        <b-card no-body class="bg-light p-4 mb-4">
          <b-row class="g-4 align-items-center">
            <b-col md="12">
              <b-card-body class="p-0">
                <b-row class="gx-3 g-2 align-items-center">
                  <h5>Food</h5>
                  <b-col cols="9" sm="10">
                    <div class="progress progress-sm bg-warning bg-opacity-15">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="95"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </b-col>

                  <b-col cols="3" sm="2" class="text-end">
                    <span class="h6 fw-light mb-0">{{categoryReview.Food.rating}}</span>
                  </b-col>
                  <span>{{categoryReview.Food.comment}}</span>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

      </b-col>

    </b-card-body>

    <div class="my-4 w-full">
      <div v-if="cutomerReview.room_tip">
        <h6>Room Tip: <span>{{ cutomerReview.room_tip }}</span></h6>
      </div>
      <div v-else>
        <h6>Room Tip: <span>No room tip available</span></h6>
      </div>

      <div v-if="cutomerReview.trip_tip">
        <h6>Trip Tip: <span>{{ cutomerReview.trip_tip }}</span></h6>
      </div>
      <div v-else>
        <h6>Trip Tip: <span>No trip tip available</span></h6>
      </div>
    </div>
    <div class="">
      <b-card-header class="border-bottom bg-transparent px-0 pt-0">
        <h3 class="mb-0">House Rules</h3>
      </b-card-header>
      <ul class="list-unstyled mt-3">
        <li v-for="(con, index) in houseRules" :key="index">
          <font-awesome-icon :icon="faDotCircle" class="text-infant me-2" />
          {{ con }}
        </li>
      </ul>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import SelectFormInput from '@/components/SelectFormInput.vue'
// import { convertRatingToDecimal } from '@/helpers/constants';
import { HotelDetailStore } from '@/stores/auth';
import { faDotCircle, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

// Define reactive variables
const selectedReview = ref('select-location');
const reviewOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: '5', text: '★★★★★ (5/5)' },
  { value: '4', text: '★★★★☆ (4/5)' },
  { value: '3', text: '★★★☆☆ (3/5)' },
  { value: '2', text: '★★☆☆☆ (2/5)' },
  { value: '1', text: '★☆☆☆☆ (1/5)' }
];

function convertFractionToDecimal(fraction: any) {
  if (typeof fraction === 'string') {
    let decimal = fraction.replace('½', '.5');
    return parseFloat(decimal);
  }
  return fraction;
}

// Retrieve hotel rating from store
const HotelDetails = HotelDetailStore();
const HotelDetail = HotelDetails.getUserData().data;
let correctRating = HotelDetail.overall_rating;
let guestReviews = HotelDetail.guest_reviews;
let Reviews = HotelDetail.rating_count;
let convertRating = convertFractionToDecimal(correctRating)

console.log(convertRating);
const hotelRating = ref(convertRating || 0);
const cutomerReview = ref(guestReviews || {});
const houseRules = ref(HotelDetail.house_rules);
const categoryReview = ref(guestReviews.category_comments);
const hotelReviews = ref(Reviews || 0);
const maxStars = 5;

// Calculate the number of full, half, and empty stars
const fullStars = Array.from({ length: Math.floor(hotelRating.value) }, (_, index) => index + 1);
const hasHalfStar = hotelRating.value % 1 !== 0;
const emptyStars = Array.from({ length: maxStars - Math.ceil(hotelRating.value) }, (_, index) => index + 1);


</script>
<style>
.reviewBox {
  padding: 4px
}

.reviewBox b {
  /* font-weight: 500; */
  color: black
}

h6 span {
  font-size: 15px;
  color: rgb(95, 95, 95);
  font-weight: 500;
  margin-left: 5px;
}
</style>