<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="10" class="mx-auto">
          <form class="vstack gap-4">
            <b-card no-body class="shadow">
              <b-card-header class="border-bottom">
                <h5 class="mb-0">Owner Detail</h5>
              </b-card-header>
              <b-card-body>
                <b-row class="g-3">
                  <b-col cols="12">
                    <label class="form-label">Owner name</label>
                    <div class="input-group">
                      <b-form-input type="text" placeholder="First name" />
                      <b-form-input type="text" placeholder="Last name" />
                    </div>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Contact number">
                      <b-form-input type="text" placeholder="Enter contact number" />
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Email address">
                      <b-form-input type="email" placeholder="Enter email address" />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <b-form-group label="Address">
                      <b-form-textarea rows="2" placeholder="Enter keywords" />
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <SelectFormInput
                      id="location"
                      label="State"
                      v-model="selectedState1"
                      :options="stateOptions"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="City">
                      <b-form-input type="text" placeholder="Enter city" />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>

            <b-card no-body class="shadow">
              <b-card-header class="border-bottom">
                <h5 class="mb-0">Cab Detail</h5>
              </b-card-header>

              <b-card-body>
                <b-row class="g-3">
                  <b-col md="6">
                    <b-form-group label="Car name">
                      <b-form-input type="text" placeholder="Enter car name" />
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <label class="form-label">Car type *</label>
                    <div class="d-sm-flex">
                      <div class="radio-bg-light me-4">
                        <b-form-radio name="car-type" value="ac">Ac</b-form-radio>
                      </div>

                      <div class="radio-bg-light me-4">
                        <b-form-radio name="car-type" value="non-ac">Non Ac</b-form-radio>
                      </div>
                    </div>
                  </b-col>

                  <b-col md="6">
                    <SelectFormInput
                      id="car-modal"
                      label="Car model"
                      v-model="selectedCar"
                      :options="carOptions"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Model Year">
                      <b-form-input type="text" placeholder="Enter car model year" />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <label class="form-label">Upload image *</label>
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
                      <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px *
                      450px. The larger image will be cropped to 4:3 to fit our thumbnails/previews.
                    </p>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>

            <b-card no-body class="shadow">
              <b-card-header class="border-bottom">
                <h5 class="mb-0">Driver Detail</h5>
              </b-card-header>
              <b-card-body>
                <b-row class="g-3">
                  <b-col md="3">
                    <SelectFormInput
                      id="title"
                      label="Title"
                      v-model="selectedTitle"
                      :options="titleOptions"
                      :choice-options="{ searchEnabled: false }"
                    />
                  </b-col>

                  <b-col md="9">
                    <label class="form-label">Driver Name</label>
                    <div class="input-group">
                      <b-form-input type="text" placeholder="First name" />
                      <b-form-input type="text" placeholder="Last name" />
                    </div>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Contact Number">
                      <b-form-input type="text" placeholder="Enter contact number" />
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="License Number">
                      <b-form-input type="text" placeholder="Enter license number" />
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <SelectFormInput
                      id="location2"
                      label="State"
                      v-model="selectedState"
                      :options="stateOptions"
                      :choice-options="{ searchEnabled: true }"
                    />
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="City">
                      <b-form-input type="text" placeholder="Enter city" />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <b-form-group label="Address">
                      <b-form-textarea rows="2" placeholder="Enter keywords" />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>

            <div class="text-end">
              <router-link :to="{ name: 'listings.added' }" class="btn btn-primary mb-0"
                >Add listing</router-link
              >
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BIconUpload } from 'bootstrap-icons-vue'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomDropzone from '@/components/CustomDropzone.vue'

const selectedState = ref('select-state')
const selectedState1 = ref('select-state')
const selectedCar = ref('select-item')

const selectedTitle = ref('select-title')

const titleOptions = [
  { value: 'select-title', text: 'Select Title' },
  { value: 'mr', text: 'Mr' },
  { value: 'mrs', text: 'Mrs' }
]

const stateOptions = [
  { value: 'select-state', text: 'Select state' },
  { value: 'india', text: 'India' },
  { value: 'usa', text: 'Usa' },
  { value: 'japan', text: 'Japan' },
  { value: 'united-kingdom', text: 'United Kingdom' }
]

const carOptions = [
  { value: 'select-item', text: 'Select item' },
  { value: 'sedan', text: 'Sedan' },
  { value: 'micro', text: 'Micro' },
  { value: 'cuv', text: 'CUV' },
  { value: 'suv', text: 'SUV' },
  { value: 'pick-up', text: 'Pick up' },
  { value: 'coupe', text: 'Coupe' }
]
</script>
