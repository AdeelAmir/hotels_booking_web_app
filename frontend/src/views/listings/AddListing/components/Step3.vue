<template>
  <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
    <div class="vstack gap-4">
      <h4 class="mb-0">Price & Policy</h4>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Listing Price</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="6">
              <SelectFormInput
                id="currency"
                label="Currency"
                v-model="selectedCurrency"
                :options="currencyOptions"
                custom-class="border-0 z-index-9 bg-transparent"
              />
            </b-col>

            <b-col md="6">
              <b-form-group label="Base Price *">
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
                id="rating"
                label="Rating"
                v-model="selectedRating"
                :options="ratingOptions"
                custom-class="border-0 z-index-9 bg-transparent"
              />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="shadow">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Listing Policy</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
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

            <b-col md="6">
              <SelectFormInput
                id="cancellation"
                label="Cancellation options"
                v-model="selectedCancellationOption"
                :options="cancellationOptions"
                custom-class="border-0 z-index-9 bg-transparent"
              />
            </b-col>

            <b-col md="6">
              <b-form-group label="Charges *">
                <b-form-input type="text" placeholder="Enter charges" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <div class="d-flex justify-content-between">
        <b-button variant="secondary" class="prev-btn mb-0" @click="stepperInstance?.previous()"
          >Previous</b-button
        >
        <router-link :to="{ name: 'listings.added' }" class="btn btn-success mb-0"
          >Add Listing</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StepPropsType } from '@/views/tour/Booking/type'
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { QuillEditor } from '@vueup/vue-quill'

defineProps<StepPropsType>()

const selectedCurrency = ref('select-item')
const currencyOptions = [
  { value: 'select-item', text: 'Select item' },
  { value: 'USD', text: 'USD' },
  { value: 'EURO', text: 'EURO' },
  { value: 'VND', text: 'VND' }
]

const selectedRating = ref('0')

const ratingOptions = [
  { value: '0', text: 'Select item' },
  { value: '5', text: '★★★★★' },
  { value: '4', text: '★★★★☆' },
  { value: '3', text: '★★★☆☆' },
  { value: '2', text: '★★☆☆☆' },
  { value: '1', text: '★☆☆☆☆' }
]

const selectedCancellationOption = ref('select-item')

const cancellationOptions = [
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
