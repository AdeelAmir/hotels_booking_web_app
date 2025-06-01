<template>
  <component :is="is ?? 'div'" :id="id" :class="customClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import Dropzone from 'dropzone'
import { onMounted } from 'vue'

type DropzonePropType = {
  customClass?: string
  id: string
  options?: object
  is?: string
}

const props = defineProps<DropzonePropType>()

onMounted(() => {
  const ele = document.getElementById(props.id)

  if (ele) {
    new Dropzone(ele, {
      ...props.options
    })
  }
})
</script>
