<template>
  <section
    class="position-relative py-xl-9"
    :style="{
      backgroundImage: `url(${bgImg10})`,
      backgroundPosition: 'center left',
      backgroundSize: 'cover'
    }"
  >
    <b-container class="z-index-9">
      <b-row>
        <b-col lg="10" class="m-auto text-center position-relative z-index-9">
          <form class="form-control-inline my-5">
            <div class="d-flex flex-wrap justify-content-center align-items-center">
              <label class="form-control-inline-text">We are</label>
              <span class="d-flex align-items-center">
                <SelectFormInput
                  id="selectPeople"
                  v-model="selectPeople"
                  :options="peopleOptions"
                  :choice-options="{ searchEnabled: true }"
                  class="form-select js-choice"
                />
              </span>
              <label class="form-control-inline-text">People, Looking for</label>
              <span class="d-inline-block">
                <SelectFormInput
                  id="selectedPlace"
                  v-model="selectedPlace"
                  :options="placeOptions"
                  :choice-options="{ searchEnabled: true }"
                />
              </span>
              <label class="form-control-inline-text">around</label>
              <span class="d-inline-block">
                <SelectFormInput
                  id="selectedDestination"
                  v-model="selectedDestination"
                  :options="destinationOptions"
                  :choice-options="{ searchEnabled: true }"
                />
              </span>
              <label class="form-control-inline-text">,</label>
              <span class="d-inline-block">
                <CustomFlatpicker
                  id="checkIn-out"
                  v-model="checkIn"
                  class="form-control"
                  :options="{ mode: 'range', dateFormat: 'd M' }"
                  placeholder="From - To"
                />
              </span>
              <label class="form-control-inline-text">.</label>
            </div>
            <button
              class="icon-xxl bg-primary btn-dark-hover rounded-circle btn fs-6 text-white p-0 mt-4"
              type="button"
            >
              Search
            </button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg10 from '@/assets/images/bg/10.jpg'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { ref } from 'vue'

const selectPeople = ref('select')

const peopleOptions = [
  { value: 'select', text: 'Select' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' },
  { value: '5', text: '5' },
  { value: '5+', text: '5+' }
]

const checkIn = ref()

const selectedPlace = ref('select')
const placeOptions = [
  { value: 'select', text: 'Select' },
  { value: 'apartment', text: 'Apartments' },
  { value: 'villa', text: 'Villa' },
  { value: 'hotel', text: 'Hotel' },
  { value: 'hostel', text: 'Hostel' }
]

const selectedDestination = ref('select')
const destinationOptions = [
  { value: 'select', text: 'Select' },
  { value: 'New York', text: 'New York' },
  { value: 'canada', text: 'Canada' },
  { value: 'paris', text: 'Paris' }
]
</script>
