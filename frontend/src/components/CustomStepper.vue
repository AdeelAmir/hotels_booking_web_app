<template>
  <component :is="is ?? 'div'" :id="id" :class="customClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import { onMounted } from 'vue'

type StepperPropType = {
  customClass?: string
  id: string
  options?: object
  is?: string
}

const props = defineProps<StepperPropType>()

onMounted(() => {
  const ele = document.getElementById(props.id)

  if (ele) {
    new Stepper(ele, {
      linear: false,
      animation: true,
      ...props.options
    })
  }
})
</script>
