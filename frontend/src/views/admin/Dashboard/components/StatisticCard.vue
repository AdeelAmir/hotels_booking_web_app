<template>
  <b-card
    no-body
    :class="`card-body bg-${item.variant} bg-opacity-10 border border-${item.variant} border-opacity-25 p-4 h-100`"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h4 class="mb-0">{{ item.stat }}</h4>
        <span class="h6 fw-light mb-0">{{ item.title }}</span>
      </div>
      <div :class="`icon-lg rounded-circle bg-${item.variant} text-white mb-0`">
        <font-awesome-icon :icon="item.icon" />
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { StatisticType } from '@/views/admin/Dashboard/types'

defineProps({
  item: {
    type: Object as PropType<StatisticType>,
    required: true
  }
})
</script>
