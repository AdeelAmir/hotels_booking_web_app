<template>
  <b-form class="card shadow p-0">
    <b-card-header class="p-4">
      <h5 class="mb-0">
        <font-awesome-icon :icon="faHotel" class="fa-fw me-2" />
        Hotel Booking
      </h5>
    </b-card-header>

    <b-card-body class="p-4 pt-0">
      <b-row class="g-4">
        <b-col cols="12">
          <div class="form-icon-input form-size-lg form-fs-lg">
            <SelectFormInput
              id="location"
              v-model="selectedDestination"
              :options="destinationOptions"
              :choice-options="{ searchEnabled: true }"
            />
            <span class="form-icon">
              <BIconSearch class="fs-5" />
            </span>
          </div>
        </b-col>

        <b-col lg="4">
          <div class="form-icon-input form-fs-lg">
            <GuestAndRoomForm v-model="guestsAndRooms" input-class="form-control-lg" />
            <span class="form-icon">
              <BIconPeople class="fs-5" />
            </span>
          </div>
        </b-col>

        <b-col lg="4">
          <div class="form-icon-input form-fs-lg">
            <CustomFlatpicker
              id="checkIn"
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

        <b-col lg="4">
          <div class="form-icon-input form-fs-lg">
            <CustomFlatpicker
              id="checkOut"
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
      </b-row>

      <b-col cols="12" class="text-end pt-0"> </b-col>

      <div class="text-center pt-0">
        <a class="btn btn-lg btn-primary mb-n7 text-nowrap" href="#"
          >Search Hotel
          <BIconArrowRight class="ps-3 w-25" />
        </a>
      </div>
    </b-card-body>
  </b-form>
</template>

<script setup lang="ts">
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconCalendar, BIconPeople, BIconSearch } from 'bootstrap-icons-vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'

import type { GuestAndRoomFormType } from '@/types'
import { ref } from 'vue'

const guestsAndRooms: GuestAndRoomFormType = {
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
}

const selectedDestination = ref('search-hotel')

const destinationOptions = [
  { value: 'search-hotel', text: 'Search hotel' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const checkInDate = ref()
const checkOutDate = ref()
</script>
