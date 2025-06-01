<template>
  <b-card no-body class="border p-4 h-100">
    <h6>
      {{ item.title }}
      <a v-if="item.tag" tabindex="0" v-b-tooltip.hover.top="{ title: item.tag }" class="h6 mb-0" role="button">
        <BIconInfoCircleFill class="small" />
      </a>
    </h6>
    <h2 :class="`text-${item.variant}`">{{ item.stat }}</h2>
    <p class="mb-2 items-center">
      <span class="me-1 items-center" :class="item.tag ? 'text-primary' : 'text-danger'">
        {{ item.change }}
        <BIconArrowUp v-if="item.tag" />
      </span>
      {{ item.changeLabel }}
    </p>
    <div class="mt-auto text-primary-hover">
      <router-link :to="{ name: item.link?.name }" class="text-decoration-underline p-0 mb-0">
        {{ item.linkLabel }}
      </router-link>
    </div>
  </b-card>
</template>
<script lang="ts" setup>
import { BIconInfoCircleFill, BIconArrowUp } from 'bootstrap-icons-vue';
import type { StatisticType } from '@/views/agent/Listings/data';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<StatisticType>,
    required: true
  }
});
</script>
