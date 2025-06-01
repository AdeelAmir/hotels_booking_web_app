<template>
  <div class="bg-body d-flex rounded-3 h-100 p-4">
    <h3 class="d-flex align-items-center">
      <font-awesome-icon :icon="service.icon" />
    </h3>
    <div class="ms-3">
      <h5>{{ service.title }}</h5>
      <p class="mb-0">{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ServiceType } from '@/views/hotels/Home/type'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
