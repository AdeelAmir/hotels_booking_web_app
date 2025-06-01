<template>
  <div class="pt-0 pb-4">
    <div class="position-relative">
      <div>
        <div>
          <div class="d-flex justify-content-between">
            <input type="checkbox" class="btn-check" id="btn-check-soft" />
            <label class="btn btn-primary-soft btn-primary-check mb-0" for="btn-check-soft" @click="showModal = true">
              <BIconSliders class="fa-fe mb-1" />
              Show Filters
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for Filters -->
  <b-modal centered hide-footer v-model="showModal">
    <b-card no-body class="bg-light p-4 mt-4 z-index-9">
      <b-form class="row g-4">
        <b-col md="6" lg="4" xl="5">
          <div class="form-control-borderless">
            <label class="form-label">Enter Hotel Name</label>
            <input type="text" class="form-control form-control-lg" v-model="hotelName" />
          </div>
        </b-col>

        <b-col md="6" lg="4">
          <div class="form-control-borderless">
            <label class="form-label">Price Range</label>
            <div class="d-flex justify-content-between">
              <span>{{ currencySymbol }} {{ priceRange[0] }}</span>
              <span>{{ currencySymbol }} {{ priceRange[1] }}</span>
            </div>
            <div class="position-relative">
              <VueSlider v-model="priceRange" :min="500" :max="2000" :dotSize="19" :dotStyle="dotStyle"
                :processStyle="processStyle" :railStyle="railStyle" tooltip="none" />
            </div>
          </div>
        </b-col>

        <b-col md="6" lg="4">
          <div class="form-size-lg form-control-borderless">
            <label class="form-label">Popular Filters</label>
            <SelectFormInput id="filter" :options="filterOptions" :choice-options="{ searchEnabled: true }"
              v-model="selectedFilter" />
          </div>
        </b-col>

        <b-col md="6" lg="4">
          <div class="form-control-borderless">
            <label class="form-label">Customer Rating</label>
            <ul class="list-inline mb-0 g-3">
              <li class="list-inline-item" v-for="(rating, idx) in customerRatings" :key="idx">
                <input type="checkbox" class="btn-check" :id="`btn-check-${rating}`" v-model="selectedRatings"
                  :value="rating" />
                <label class="btn btn-white btn-primary-soft-check" :for="`btn-check-${rating}`">{{ rating }}+</label>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col md="6" lg="4">
          <div class="form-control-borderless">
            <label class="form-label">Star Rating</label>
            <ul class="list-inline mb-0 g-3">
              <li v-for="(val, idx) in new Array(5)" :key="idx" class="list-inline-item">
                <input type="checkbox" class="btn-check" :id="`btn-check2-${idx}`" v-model="selectedStars"
                  :value="idx + 1" />
                <label class="btn btn-white btn-primary-soft-check d-flex align-items-center"
                  :for="`btn-check2-${idx}`">{{ idx + 1 }}
                  <BIconStarFill class="mb-1" />
                </label>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col md="6" lg="4">
          <div class="form-size-lg form-control-borderless">
            <label class="form-label">Hotel Type</label>
            <SelectFormInput id="hotel-type" :options="hotelOptions" :choice-options="{ searchEnabled: true }"
              v-model="selectedHotel" />
          </div>
        </b-col>

        <b-col cols="12">
          <div class="form-control-borderless">
            <label class="form-label">Amenities</label>
            <b-row class="g-3">
              <b-col v-for="(item, idx) in amenities" :key="`amenities-${idx + 1}`" cols="6" md="4" lg="3" xl="2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :id="`flexCheckDefault-amenities${idx}`"
                    v-model="selectedAmenities" :value="item" />
                  <label class="form-check-label h6 fw-light mb-0" :for="`flexCheckDefault-amenities${idx}`">
                    {{ item }}
                  </label>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>

        <div class="text-end align-items-center">
          <b-button variant="link" class="p-0 mb-0" @click="clearFilters">Clear all</b-button>
          <b-button variant="dark" class="mb-0 ms-3" @click="applyFilters">Apply filter</b-button>
        </div>
      </b-form>
    </b-card>
  </b-modal>
</template>

<script setup lang="ts">
import SelectFormInput from '@/components/SelectFormInput.vue'
import { currency } from '@/helpers/constants'
import { useCurrencyCode } from '@/stores/auth'
import { BIconSliders, BIconStarFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

let useCurrency = useCurrencyCode()
let currencyData = useCurrency.getData()
const currencySymbol = ref(currencyData.symbol);
const showModal = ref(false)
const priceRange = ref([700, 1500])
const selectedFilter = ref('select-option')
const selectedHotel = ref('select-option')
const hotelName = ref('')
const selectedRatings = ref<number[]>([])
const selectedStars = ref<number[]>([])
const customerRatings = ref(['3', '3.5', '4', '4.5', '5'])
const selectedAmenities = ref<string[]>([])

const filterOptions = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Recently', text: 'Recently search' },
  { value: 'Most', text: 'Most popular' },
  { value: 'Top', text: 'Top rated' }
]
const hotelOptions = [
  { value: 'select-option', text: 'Select Option' },
  { value: 'Cancellation Available', text: 'Free Cancellation Available' },
  { value: 'Hotel Available', text: 'Pay At Hotel Available' },
  { value: 'Breakfast Included', text: 'Free Breakfast Included' }
]

const amenities = [
  'Air Conditioning',
  'Room Services',
  'Dining',
  'Caretaker',
  'Free Internet',
  'Business Service',
  'Bonfire',
  'Mask',
  'Spa',
  'Swimming pool',
  'Fitness Centre',
  'Bar'
]

const dotStyle = {
  backgroundColor: '#5143d9',
  border: '5px solid #fff',
  boxShadow: '0px 0px 0px 1px #5143d9'
}

const processStyle = {
  backgroundColor: '#5143d9'
}

const railStyle = {
  backgroundColor: 'rgb(81, 67, 217, 0.1)'
}

function clearFilters() {
  hotelName.value = ''
  priceRange.value = [700, 1500]
  selectedFilter.value = 'select-option'
  selectedHotel.value = 'select-option'
  selectedRatings.value = []
  selectedStars.value = []
  selectedAmenities.value = []
}

function applyFilters() {
  console.log('Hotel Name:', hotelName.value)
  console.log('Price Range:', priceRange.value)
  console.log('Selected Filter:', selectedFilter.value)
  console.log('Selected Hotel Type:', selectedHotel.value)
  console.log('Selected Ratings:', selectedRatings.value)
  console.log('Selected Stars:', selectedStars.value)
  console.log('Selected Amenities:', selectedAmenities.value)
  showModal.value = false
}
</script>

<style>
.modal-dialog .modal-content .modal-body {
  position: relative;
  flex: 1 1 auto;
}

.modal-dialog {
  max-width: 50% !important;
}

@media (max-width: 1024px) {
  .modal-dialog {
    max-width: 95% !important;
  }

}
</style>
