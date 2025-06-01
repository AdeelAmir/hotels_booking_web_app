<template>
  <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
    <div class="vstack gap-4">
      <h4 class="mb-0">Detailed Information</h4>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Overview</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col cols="12">
              <SelectFormInput
                id="amenities"
                label="Select amenities *"
                :v-model="selectedAmenities"
                :options="amenitiesOptions"
                :choice-options="{ searchEnabled: false }"
              />

              <small
                >Maximum of 14 keywords. Keywords should all be in lowercase and separated by
                commas. e.g. javascript, react, marketing</small
              >
            </b-col>

            <b-col cols="12">
              <label class="form-label">Add description *</label>
              <QuillEditor
                theme="snow"
                class="bg-light border py-3 quilltoolbar"
                :toolbar="toolbar"
                :content="content"
                content-type="html"
              />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Size Of Your Listing</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="4">
              <b-form-group label="Total Floor *">
                <b-form-input type="text" placeholder="Enter total floors" />
              </b-form-group>
            </b-col>

            <b-col md="4">
              <b-form-group label="Total Room *">
                <b-form-input type="text" placeholder="Enter total rooms" />
              </b-form-group>
            </b-col>

            <b-col md="4">
              <b-form-group label="Room area *">
                <b-form-input type="text" placeholder="Enter area in sq.ft" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Room Options</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="6">
              <b-form-group label="Room name *">
                <b-form-input type="text" placeholder="Enter name" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Room thumbnail image *">
                <b-form-file type="file" accept="image/gif, image/jpeg, image/png" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Room Price *">
                <b-form-input type="text" placeholder="Enter price" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Discount *">
                <b-form-input type="text" placeholder="Enter discount" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <SelectFormInput
                id="additional-info"
                label="Additional info"
                custom-class="border-0 z-index-9 bg-transparent"
                v-model="selectedAdditionalInfo"
                :options="additionalInfoOptions"
              />
            </b-col>

            <b-col cols="12">
              <a href="#" class="btn btn-sm btn-primary-soft mb-0">
                <BIconPlusCircle class="me-2" />
                Add New Room
              </a>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <div class="hstack gap-2 flex-wrap justify-content-between">
        <b-button variant="secondary" class="prev-btn mb-0" @click="stepperInstance?.previous()"
          >Previous</b-button
        >
        <b-button variant="primary" class="next-btn mb-0" @click="stepperInstance?.next()"
          >Next</b-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BIconPlusCircle } from 'bootstrap-icons-vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import { QuillEditor } from '@vueup/vue-quill'

import type { StepPropsType } from '@/views/tour/Booking/type'

defineProps<StepPropsType>()

const selectedAmenities = ref('0')
const amenitiesOptions = [
  { value: '0', text: 'Select amenities' },
  { value: '1', text: 'Swimming pool' },
  { value: '2', text: 'Spa' },
  { value: '3', text: "Kid's play area" },
  { value: '4', text: 'Gym' },
  { value: '5', text: 'Ironing Service' },
  { value: '6', text: 'Concierge' },
  { value: '7', text: 'Lift' },
  { value: '8', text: 'Dry cleaning' },
  { value: '9', text: 'Room Service' },
  { value: '10', text: 'Waiting Area' },
  { value: '11', text: 'Secrete smoking area' }
]

const selectedAdditionalInfo = ref('select-item')

const additionalInfoOptions = [
  { value: 'select-item', text: 'Select item' },
  { value: 'non-refundable', text: 'Non Refundable' },
  { value: 'free-cancellation', text: 'Free Cancellation' }
]

const toolbar = [
  [{ font: [] }, { size: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'super' }, { script: 'sub' }],
  [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['direction', { align: [] }],
  ['link', 'image', 'video'],
  ['clean']
]

const content = `<h1>Quill Rich Text Editor</h1>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.</p>
<p>Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
<p>Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on.</p>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.</p>
<p>Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
<p>Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on.</p>`
</script>
