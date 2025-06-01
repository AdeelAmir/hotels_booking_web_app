<template>
  <section>
    <b-container>
      <div ref="stepperRef" id="stepper" class="bs-stepper stepper-outline">
        <div class="bs-stepper-header" role="tablist">
          <div class="step" data-target="#step-1">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger1"
                aria-controls="step-1"
              >
                <span class="bs-stepper-circle">1</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Basic Information</h6>
            </div>
          </div>
          <div class="line"></div>

          <div class="step" data-target="#step-2">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger2"
                aria-controls="step-2"
              >
                <span class="bs-stepper-circle">2</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Detailed Information</h6>
            </div>
          </div>
          <div class="line"></div>

          <div class="step" data-target="#step-3">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger3"
                aria-controls="step-3"
              >
                <span class="bs-stepper-circle">3</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Price & Policy</h6>
            </div>
          </div>
        </div>

        <div class="bs-stepper-content p-0 pt-4 pt-md-5">
          <b-row class="g-4">
            <b-col cols="12">
              <b-form>
                <Step1 :stepper-instance="stepperInstance" />

                <Step2 :stepper-instance="stepperInstance" />

                <Step3 :stepper-instance="stepperInstance" />
              </b-form>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import Stepper from 'bs-stepper'
import type { default as StepperType } from 'bs-stepper'

import Step1 from '@/views/listings/AddListing/components/Step1.vue'
import Step2 from '@/views/listings/AddListing/components/Step2.vue'
import Step3 from '@/views/listings/AddListing/components/Step3.vue'

const stepperRef = ref<HTMLElement | null>(null)

let stepperInstance = ref<StepperType>()

onMounted(() => {
  if (stepperRef.value) {
    stepperInstance.value = new Stepper(stepperRef.value, {
      linear: false,
      animation: true
    })
  }
})
</script>
