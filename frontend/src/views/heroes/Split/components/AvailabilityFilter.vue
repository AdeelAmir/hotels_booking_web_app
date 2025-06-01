<template>
  <section class="position-relative">
    <div class="position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
      <img :src="decoration" alt="decoration" />
    </div>

    <b-container>
      <b-row class="g-4 g-lg-5 align-items-center">
        <b-col lg="6" class="position-relative">
          <h6 class="text-uppercase">🤩 Easy Way To Conform Ticket</h6>

          <h1 class="mb-2">Book Your Tour Ticket Now!</h1>

          <p class="mb-4">
            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy
            man children rejoiced.
          </p>

          <form class="row g-4">
            <b-col cols="12">
              <label class="small">Destination</label>
              <div class="form-border-bottom form-control-transparent d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                  <BIconGeoAlt class="text-secondary d-block" />
                </div>

                <div class="flex-grow-1">
                  <div class="form-fs-lg">
                    <SelectFormInput
                      id="destination"
                      v-model="selectedDestination"
                      :options="destinationOptions"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </div>
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <label class="small">Check in</label>
              <div class="form-border-bottom form-control-transparent d-flex align-items-center">
                <BIconCalendar class="text-secondary d-block me-2"></BIconCalendar>
                <div class="form-fs-lg">
                  <CustomFlatpicker
                    id="checkIn"
                    placeholder="Select Date"
                    v-model="checkInDate"
                    :options="{ dateFormat: 'd/M/Y' }"
                  />
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <label class="small">Check Out</label>
              <div class="form-border-bottom form-control-transparent d-flex align-items-center">
                <BIconCalendar class="text-secondary d-block me-2"></BIconCalendar>

                <div class="form-fs-lg">
                  <CustomFlatpicker
                    id="checkOut"
                    placeholder="Select Date"
                    v-model="checkOutDate"
                    :options="{ dateFormat: 'd/M/Y' }"
                  />
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <label class="small">Occupant</label>
              <div class="form-border-bottom form-control-transparent d-flex align-items-center">
                <font-awesome-icon :icon="faUserGroup" class="text-secondary d-block me-2" />

                <div class="form-fs-lg">
                  <GuestAndRoomForm v-model="guestsAndRooms" />
                </div>
              </div>
            </b-col>

            <b-col md="6">
              <label class="small">Tour type</label>
              <div class="form-border-bottom form-control-transparent d-flex align-items-center">
                <div class="flex-shrink-0 me-2">
                  <font-awesome-icon :icon="faToriiGate" class="text-secondary d-block" />
                </div>

                <div class="flex-grow-1">
                  <div class="form-fs-lg">
                    <SelectFormInput
                      id="destination2"
                      v-model="selectedDestination2"
                      :options="destinationOptions2"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </div>
                </div>
              </div>
            </b-col>

            <b-col cols="12">
              <b-button variant="primary" class="w-100 mb-0">Check Availability</b-button>
            </b-col>
          </form>
        </b-col>

        <b-col lg="6" class="position-relative">
          <img :src="backgroundImg" class="rounded" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import backgroundImg from '@/assets/images/bg/09.jpg'
import decoration from '@/assets/images/element/decoration.svg'
import { faUserGroup, faToriiGate } from '@fortawesome/free-solid-svg-icons'
import { BIconCalendar, BIconGeoAlt } from 'bootstrap-icons-vue'

import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'

import type { GuestAndRoomFormType } from '@/types'

const guestsAndRooms = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
})

const checkInDate = ref()
const checkOutDate = ref()

const selectedDestination = ref('select')
const selectedDestination2 = ref('select')

const destinationOptions = [
  { value: 'select', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]
const destinationOptions2 = [
  { value: null, text: 'Select tour type' },
  { value: 'adventure', text: 'Adventure' },
  { value: 'beach', text: 'Beach' },
  { value: 'desert', text: 'Desert' },
  { value: 'history', text: 'History' }
]
</script>
