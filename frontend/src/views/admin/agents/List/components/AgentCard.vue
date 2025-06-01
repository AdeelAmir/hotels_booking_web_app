<template>
  <b-card no-body class="border h-100">
    <b-dropdown
      end
      no-caret
      toggle-class="m-0 p-0"
      variant="link"
      class="position-absolute top-0 end-0 m-3"
      menu-class="dropdown-w-sm min-w-auto shadow rounded"
    >
      <template #button-content>
        <b-button size="sm" variant="light" class="btn-round small mb-0 arrow-none flex-centered">
          <BIconThreeDots />
        </b-button>
      </template>

      <b-dropdown-item href="">
        <BIconPencilSquare class="me-2" />
        Edit
      </b-dropdown-item>
      <b-dropdown-item href="">
        <BIconTrash class="me-2" />
        Remove
      </b-dropdown-item>
    </b-dropdown>
    <b-card-body class="text-center pb-0">
      <div class="avatar avatar-xl flex-shrink-0 mb-3">
        <img v-if="agent.image" class="avatar-img rounded-circle" :src="agent.image" alt="avatar" />

        <div
          v-if="agent.textAvatar"
          :class="`avatar-img rounded-circle bg-${agent.textAvatar.variant} bg-opacity-10`"
        >
          <span
            :class="`text-${agent.textAvatar.variant} position-absolute top-50 start-50 translate-middle fw-bold`"
            >{{ agent.textAvatar.label }}</span
          >
        </div>
      </div>
      <h5 class="mb-1">{{ agent.name }}</h5>
      <small class="flex-centered">
        <BIconGeoAlt class="me-1" />
        {{ agent.location }}
      </small>
      <div class="d-flex justify-content-between mt-3">
        <h6 class="mb-0 small">
          <span class="fw-light">Total listings:</span> {{ agent.totalListing }}
        </h6>
        <h6 class="mb-0 small items-center">
          {{ agent.rating }}
          <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
        </h6>
      </div>
    </b-card-body>
    <b-card-footer class="d-flex gap-3 align-items-center">
      <router-link :to="{ name: agent.link?.name }" class="btn btn-sm btn-primary-soft mb-0 w-100">
        View detail
      </router-link>
      <router-link to="" class="btn btn-sm btn-light flex-shrink-0 mb-0 flex-centered">
        <BIconEnvelope />
      </router-link>
    </b-card-footer>
  </b-card>
</template>
<script lang="ts" setup>
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {
  BIconEnvelope,
  BIconGeoAlt,
  BIconPencilSquare,
  BIconThreeDots,
  BIconTrash
} from 'bootstrap-icons-vue'

import type { PropType } from 'vue'
import type { AgentType } from '@/views/admin/agents/List/data'

defineProps({
  agent: {
    type: Object as PropType<AgentType>,
    required: true
  }
})
</script>
