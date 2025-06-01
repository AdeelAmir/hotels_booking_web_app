<template>
  <div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
    <div class="vstack gap-4">
      <h4 class="mb-0">Basic Information</h4>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Choose Listing Category</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col cols="12">
              <SelectFormInput
                id="listing-type"
                label="Choose listing type *"
                :v-model="selectedListingType"
                :options="listingTypeOptions"
              />
              <small
                >Hotel: Professional hospitality businesses that usually have a unique style or
                theme defining their brand and decor</small
              >
            </b-col>

            <b-col cols="12">
              <b-form-group label="Listing name *">
                <b-form-input type="text" placeholder="Enter place name" />
              </b-form-group>
              <small
                >A catchy name usually includes: House name - Room name - A tourist
                destination</small
              >
            </b-col>

            <b-col cols="12">
              <label class="form-label">Is your listing set as a personal or guest use *</label>
              <div class="d-sm-flex">
                <div class="radio-bg-light me-4">
                  <b-form-radio name="listing-use" value="entire-place">Entire Place</b-form-radio>
                </div>

                <div class="radio-bg-light me-4">
                  <b-form-radio name="listing-use" value="for-guest">For Guest</b-form-radio>
                </div>

                <div class="radio-bg-light">
                  <b-form-radio name="listing-use" value="for-personal">For Personal</b-form-radio>
                </div>
              </div>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Short description *">
                <b-form-textarea rows="2" placeholder="Enter keywords" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Listing Location</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-3">
            <b-col md="6">
              <SelectFormInput
                id="country"
                label="Country/Region *"
                v-model="selectedCountry"
                :options="countryOptions"
                :choice-options="{ searchEnabled: true }"
              />
            </b-col>

            <b-col md="6">
              <SelectFormInput
                id="state"
                label="State *"
                v-model="selectedState"
                :options="stateOptions"
                :choice-options="{ searchEnabled: true }"
              />
            </b-col>

            <b-col md="6">
              <b-form-group label="City *">
                <b-form-input type="text" placeholder="Enter city" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Postal number *">
                <b-form-input type="text" placeholder="Enter postal number" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Street *">
                <b-form-input type="text" placeholder="Enter street" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Latitude *">
                <b-form-input type="text" placeholder="Enter latitude" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Longitude *">
                <b-form-input type="text" placeholder="Enter longitude" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <iframe
                class="w-100 h-300px grayscale rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                height="500"
                style="border: 0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Upload Images</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-3">
            <b-col cols="12">
              <label class="form-label">Upload thumbnail image *</label>
              <input
                class="form-control"
                type="file"
                name="my-image"
                id="image"
                accept="image/gif, image/jpeg, image/png"
              />
              <p class="small mb-0 mt-2">
                <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px.
                The larger image will be cropped to 4:3 to fit our thumbnails/previews.
              </p>
            </b-col>

            <b-col cols="12">
              <label class="form-label">Upload image gallery *</label>
              <CustomDropzone
                id="dropzone"
                custom-class="dropzone dropzone-custom"
                :options="{ url: '/file/post', maxFiles: 5, addRemoveLinks: false }"
              >
                <div class="dz-message needsclick">
                  <BIconUpload class="display-3" />
                  <p>Drop files here or click to upload.</p>
                </div>
              </CustomDropzone>
              <p class="small mb-0 mt-2">
                <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px.
                The larger image will be cropped to 4:3 to fit our thumbnails/previews.
              </p>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <div class="text-end">
        <b-button variant="primary" class="next-btn mb-0" @click="stepperInstance?.next()"
          >Next</b-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BIconUpload } from 'bootstrap-icons-vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import type { StepPropsType } from '@/views/tour/Booking/type'
import { ref } from 'vue'
import CustomDropzone from '@/components/CustomDropzone.vue'

defineProps<StepPropsType>()

const selectedListingType = ref('select-type')
const listingTypeOptions = [
  { value: 'select-type', text: 'Select type' },
  { value: 'hotel', text: 'Hotel' },
  { value: 'villa', text: 'Villa' },
  { value: 'home-stay', text: 'Home Stay' },
  { value: 'farmhouse', text: 'Farmhouse' },
  { value: 'house-boat', text: 'House boat' }
]

const selectedCountry = ref('select-country')
const countryOptions = [
  { value: 'select-country', text: 'Select country' },
  { value: 'india', text: 'India' },
  { value: 'usa', text: 'Usa' },
  { value: 'japan', text: 'Japan' },
  { value: 'united-kingdom', text: 'United Kingdom' }
]

const selectedState = ref('select-state')
const stateOptions = [
  { value: 'select-state', text: 'Select state' },
  { value: 'india', text: 'India' },
  { value: 'usa', text: 'Usa' },
  { value: 'japan', text: 'Japan' },
  { value: 'united-kingdom', text: 'United Kingdom' }
]
</script>
