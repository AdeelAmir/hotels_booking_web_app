<template>
  <component :is="is ?? 'div'" :id="id" :class="customClass" v-bind="$attrs">
    <slot/>
  </component>
</template>

<script setup lang="ts">
// import * as Sticky from 'sticky-js'
// import 'sticky-js/dist/sticky.min'
import {onMounted} from 'vue'

type StickyElementPropType = {
  customClass?: string
  id?: string
  is?: string
}

const props = defineProps<StickyElementPropType>()

onMounted(() => {
  // @ts-ignore
  new Sticky('[data-sticky]');
})

</script>
