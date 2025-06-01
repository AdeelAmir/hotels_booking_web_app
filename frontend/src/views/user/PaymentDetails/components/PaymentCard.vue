<template>
  <b-card no-body>
    <div class="p-4 rounded-3" :class="`bg-${card.variant}`">
      <div class="d-flex justify-content-between align-items-start">
        <img class="w-40px" :src="card.companyLogo" alt="" />
        <div class="dropdown">
          <a
            class="text-white"
            href="#"
            id="creditcardDropdown"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <svg width="24" height="24" fill="none">
              <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5"></circle>
              <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5"></circle>
              <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5"></circle>
            </svg>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="creditcardDropdown">
            <li>
              <a class="dropdown-item" href="#"
                ><i class="bi bi-credit-card-2-front-fill me-2 fw-icon"></i>Edit card</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><i class="bi bi-calculator me-2 fw-icon"></i>Currency converter</a
              >
            </li>
          </ul>
        </div>
      </div>
      <h4 class="text-white mt-4">**** **** **** {{ card.number }}</h4>
      <div class="d-flex justify-content-between text-white">
        <span>Valid thru: {{ card.validDate }}</span>
        <span>CVV: ***</span>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { PaymentCardType } from '@/views/user/PaymentDetails/data'

defineProps({
  card: {
    type: Object as PropType<PaymentCardType>,
    required: true
  }
})
</script>
