<template>
  <b-form class="card shadow p-0">
    <b-card-header class="p-4">
      <b-row class="g-4 align-items-center">
        <b-col lg="4" xl="6">
          <h5 class="mb-0">
            <font-awesome-icon :icon="faPlane" class="fa-fw me-2" />
            Flight Booking
          </h5>
        </b-col>

        <b-col xl="3" md="6" lg="4" class="ms-auto">
          <div class="nav nav-pills">
            <div class="form-check-inline">
              <b-form-radio
                class="form-check-input"
                name="radio-options"
                @click="showFlight = true"
                :checked="showFlight"
                >One Way
              </b-form-radio>
            </div>
            <div class="form-check-inline">
              <b-form-radio
                class="form-check-input"
                name="radio-options"
                @click="showFlight = false"
                :checked="!showFlight"
                >Round Trip
              </b-form-radio>
            </div>
          </div>
        </b-col>

        <b-col md="6" lg="4" xl="3" class="ms-auto">
          <div class="form-control-bg-light border rounded form-fs-md">
            <SelectFormInput
              id="class"
              v-model="selectedClass"
              :options="classOptions"
              :choice-options="{ searchEnabled: true }"
            />
          </div>
        </b-col>
      </b-row>
    </b-card-header>

    <b-card-body class="p-4 pt-0">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade" :class="showFlight && 'show active'" id="flight-one-way">
          <b-row class="g-4">
            <b-col md="6" class="position-relative">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="location2"
                  v-model="selectedDestination2"
                  :options="destinationOptions2"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>

              <div class="btn-flip-icon z-index-9">
                <b-button variant="dark" class="shadow btn-round mb-0">
                  <font-awesome-icon :icon="faRightLeft" />
                </b-button>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="location3"
                  v-model="selectedDestination3"
                  :options="destinationOptions3"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconSend class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="checkIn1"
                  placeholder="Select check-in date"
                  customClass="form-control-lg"
                  v-model="checkInDate"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-fs-lg">
                <b-form-input
                  type="text"
                  size="lg"
                  class="form-control-lg"
                  placeholder="Select occupant"
                />
                <span class="form-icon">
                  <BIconPeople class="fs-5" />
                </span>
              </div>
            </b-col>
          </b-row>

          <div class="text-center pt-0">
            <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
              >Search Flight
              <BIconArrowRight class="ps-3 w-25" />
            </a>
          </div>
        </div>

        <div
          class="tab-pane fade"
          :class="!showFlight && 'show active'"
          id="flight-round-way"
          role="tabpanel"
          aria-labelledby="flight-round-way-tab"
        >
          <b-row class="g-4">
            <b-col md="6" class="position-relative">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="flayingFrom"
                  v-model="selectedDestination2"
                  :options="destinationOptions2"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconGeoAlt class="fs-5" />
                </span>
              </div>

              <div class="btn-flip-icon z-index-9">
                <b-button variant="dark" class="shadow btn-round mb-0">
                  <font-awesome-icon :icon="faRightLeft" />
                </b-button>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-icon-input form-size-lg form-fs-lg">
                <SelectFormInput
                  id="flayingTo"
                  v-model="selectedDestination3"
                  :options="destinationOptions3"
                  :choice-options="{ searchEnabled: true }"
                />
                <span class="form-icon">
                  <BIconSend class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="4">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="checkIn2"
                  placeholder="Select check-in date"
                  customClass="form-control-lg"
                  v-model="checkInDate"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="4">
              <div class="form-icon-input form-fs-lg">
                <CustomFlatpicker
                  id="checkOut2"
                  placeholder="Select check-out date"
                  customClass="form-control-lg"
                  v-model="checkOutDate"
                  :options="{ dateFormat: 'd M Y' }"
                />
                <span class="form-icon">
                  <BIconCalendar class="fs-5" />
                </span>
              </div>
            </b-col>

            <b-col md="4">
              <div class="form-icon-input form-fs-lg">
                <b-form-input size="lg" type="text" placeholder="Select occupant" />
                <span class="form-icon">
                  <BIconPeople class="fs-5" />
                </span>
              </div>
            </b-col>
          </b-row>

          <b-col cols="12" class="text-center pt-0">
            <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
              >Search Flight
              <BIconArrowRight class="ps-3 w-25" />
            </a>
          </b-col>
        </div>
      </div>
    </b-card-body>
  </b-form>
</template>

<script setup lang="ts">
import { faPlane, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import {
  BIconArrowRight,
  BIconCalendar,
  BIconGeoAlt,
  BIconPeople,
  BIconSend
} from 'bootstrap-icons-vue'

import { ref } from 'vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'

const selectedDestination2 = ref('flaying-from')
const selectedDestination3 = ref('flaying-to')
const selectedClass = ref('select-class')

const destinationOptions2 = [
  { value: 'flaying-from', text: 'Flaying from..' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const destinationOptions3 = [
  { value: 'flaying-to', text: 'Flaying to..' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const classOptions = [
  { value: 'select-class', text: 'Select Class' },
  { value: 'Economy', text: 'Economy' },
  { value: 'Premium Economy', text: 'Premium Economy' },
  { value: 'Business', text: 'Business' }
]

const showFlight = ref(true)
const checkInDate = ref()
const checkOutDate = ref()
</script>
