<template>
  <b-card no-body class="shadow p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="me-2">
        <span>{{ item.title }}</span>
        <!-- Show a spinner if stat is undefined -->
        <h3 class="mb-0 mt-2">
          <b-spinner small v-if="item.loading" /> 
          <span v-else>{{ item.stat }}</span>
        </h3>
      </div>
      <div
        :class="`icon-lg rounded-circle flex-shrink-0 bg-${item.variant} bg-opacity-10 text-${item.variant} mb-0 flex-centered`"
      >
        <component :is="item.icon" />
      </div>
    </div>

    <!-- Progress bar with a fallback to default values -->
    <b-progress :value="item.progress || 0" :variant="item.variant" class="progress-xs mb-2" />
    <span>
      <span :class="`text-${item.variant}`">{{ item.text || 0 }}</span>
      &nbsp;{{ item.subText || '' }}
    </span>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<{
      title: string;
      stat: number | string | undefined;
      progress: number;
      variant: any;
      icon: string | Object;
      text: string | undefined;
      subText: string | undefined;
      loading: boolean;
    }>,
    required: true,
  },
});
</script>
