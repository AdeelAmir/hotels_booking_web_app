<template>
  <b-card class="border">
    <div class="items-center">
      <div :class="`bg-${card.variant}`" class="icon-xl rounded-3 text-white flex-centered">
        <component :is="card.icon" />
      </div>
      <div class="ms-3">
        <h4>{{ card.stat }}</h4>
        <span>{{ card.title }}</span>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { StatisticType } from '@/views/agent/Dashboard/data'

defineProps({
  card: {
    type: Object as PropType<StatisticType>,
    required: true
  }
})
</script>
