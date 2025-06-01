<template>
  <b-form class="card shadow p-0">
    <b-card-header class="p-4">
      <h5 class="mb-0">
        <font-awesome-icon :icon="faGlobeAmericas" class="fa-fw me-2" />
        Tour Booking
      </h5>
    </b-card-header>

    <b-card-body class="p-4 pt-0">
      <b-row class="g-4">
        <b-col lg="4">
          <div class="form-icon-input form-size-lg form-fs-lg">
            <SelectFormInput
              id="tour-location"
              v-model="selectedDestination4"
              :options="destinationOptions4"
              :choice-options="{ searchEnabled: true }"
            />
            <span class="form-icon">
              <BIconGeoAlt class="fs-5" />
            </span>
          </div>
        </b-col>

        <b-col lg="4">
          <div class="form-icon-input form-fs-lg">
            <CustomFlatpicker
              id="date"
              placeholder="Select date"
              customClass="form-control-lg"
              v-model="date"
              :options="{ dateFormat: 'd M Y' }"
            />
            <span class="form-icon">
              <BIconCalendar class="fs-5" />
            </span>
          </div>
        </b-col>

        <b-col lg="4">
          <div class="form-icon-input form-size-lg form-fs-lg">
            <SelectFormInput
              id="tour-type"
              v-model="selectedDestination5"
              :options="destinationOptions5"
              :choice-options="{ searchEnabled: true }"
            />
            <span class="form-icon">
              <font-awesome-icon :icon="faPersonSkating" class="fs-5" />
            </span>
          </div>
        </b-col>
      </b-row>

      <div class="text-center pt-0">
        <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
          >Search Tour
          <BIconArrowRight class="ps-3 w-25" />
        </a>
      </div>
    </b-card-body>
  </b-form>
</template>

<script setup lang="ts">
import { faGlobeAmericas, faPersonSkating } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconCalendar, BIconGeoAlt } from 'bootstrap-icons-vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { ref } from 'vue'

const selectedDestination4 = ref('select-tour-location')
const selectedDestination5 = ref('select-tour-type')

const destinationOptions4 = [
  { value: 'select-tour-location', text: 'Select tour location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const destinationOptions5 = [
  { value: 'select-tour-type', text: 'Select tour type' },
  { value: 'adventure', text: 'Adventure' },
  { value: 'beach', text: 'Beach' },
  { value: 'desert', text: 'Desert' },
  { value: 'history', text: 'History' }
]

const date = ref()
</script>
