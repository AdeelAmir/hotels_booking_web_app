<template>
  <b-card
    no-body
    :class="`card-body border border-${item.variant} bg-${item.variant} bg-opacity-10 border-opacity-25 p-4 h-100`"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h3 class="mb-0 fw-bold">{{ item.stat }}</h3>
        <span class="mb-0 h6 fw-light">{{ item.title }}</span>
      </div>
      <div
        :class="`icon-lg rounded-circle flex-shrink-0 bg-${item.variant} text-white mb-0 flex-centered`"
      >
        <font-awesome-icon :icon="item.icon" />
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { StatisticType } from '@/views/admin/agents/Detail/types'

defineProps({
  item: {
    type: Object as PropType<StatisticType>,
    required: true
  }
})
</script>
