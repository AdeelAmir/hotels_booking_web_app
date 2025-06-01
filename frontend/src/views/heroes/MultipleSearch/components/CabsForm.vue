<template>
  <b-form class="card shadow p-0">
    <b-card-header class="d-sm-flex justify-content-between align-items-center p-4">
      <h5 class="mb-3 mb-sm-0">
        <font-awesome-icon :icon="faCar" class="fa-fw me-2" />
        Cab Booking
      </h5>

      <ul class="nav nav-pills nav-pills-dark" id="pills-tab-2" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mb-0 rounded-start rounded-0"
            :class="showCab && 'active'"
            @click="showCab = true"
          >
            One Way
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mb-0 rounded-end rounded-0"
            :class="!showCab && 'active'"
            @click="showCab = false"
          >
            Road Trip
          </button>
        </li>
      </ul>
    </b-card-header>

    <b-card-body class="p-4 pt-0">
      <div class="tab-content" id="pills-tabContent3">
        <div
          class="tab-pane fade"
          :class="showCab && 'show active'"
          id="pills-one-way-2"
          role="tabpanel"
          aria-labelledby="pills-one-way-2-tab"
        >
          <b-row class="g-4">
            <b-col md="6" class="position-relative">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="pickup-location"
                  v-model="selectedDestination6"
                  :options="destinationOptions6"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>

              <div class="btn-flip-icon z-index-9">
                <b-button class="btn-white shadow btn-round mb-0">
                  <font-awesome-icon :icon="faRightLeft" />
                </b-button>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="pickup-location2"
                  v-model="selectedDestination6"
                  :options="destinationOptions6"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="pickupDate"
                  placeholder="Select pickup date"
                  customClass="form-control-lg"
                  v-model="pickupDate"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="pickuptime"
                  placeholder="Select pickup time"
                  customClass="form-control-lg"
                  v-model="pickuptime"
                  :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>
          </b-row>

          <div class="text-center pt-0">
            <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
              >Search Cabs
              <BIconArrowRight class="ps-3 w-25" />
            </a>
          </div>
        </div>

        <div
          class="tab-pane fade"
          :class="!showCab && 'show active'"
          id="pills-round-way-2"
          role="tabpanel"
          aria-labelledby="pills-round-way-2-tab"
        >
          <b-row class="g-4">
            <b-col md="6" class="position-relative">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="pickup-location3"
                  v-model="selectedDestination6"
                  :options="destinationOptions6"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>

              <div class="btn-flip-icon z-index-9">
                <b-button class="btn-white shadow btn-round mb-0">
                  <font-awesome-icon :icon="faRightLeft" />
                </b-button>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="pickup-location4"
                  v-model="selectedDestination6"
                  :options="destinationOptions6"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6" lg="3">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="pickupDate1"
                  placeholder="Select pickup date"
                  v-model="pickupDate"
                  customClass="form-control-lg"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6" lg="3">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="enableTime"
                  placeholder="Select pickup time"
                  v-model="enableTime"
                  customClass="form-control-lg"
                  :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6" lg="3">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="returnDate"
                  placeholder="Select return date"
                  customClass="form-control-lg"
                  v-model="returnDate"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6" lg="3">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="returntime"
                  placeholder="Select return time"
                  customClass="form-control-lg"
                  v-model="returntime"
                  :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>
          </b-row>

          <div class="text-center pt-0">
            <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
              >Search Cabs
              <BIconArrowRight class="ps-3 w-25" />
            </a>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-form>
</template>

<script setup lang="ts">
import { faCar, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconCalendar, BIconGeoAlt } from 'bootstrap-icons-vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { ref } from 'vue'

const selectedDestination6 = ref('select-pickup-location')

const destinationOptions6 = [
  { value: 'select-pickup-location', text: 'Select pickup location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const showCab = ref(true)
const pickupDate = ref()
const enableTime = ref()
const pickuptime = ref()
const returnDate = ref()
const returntime = ref()
</script>
