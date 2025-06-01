<template>
  <b-row class="g-4">
    <b-col sm="6" xxl="3">
      <b-card no-body class="bg-light p-4 h-100">
        <h6 class="mb-0">Average daily earning</h6>
        <h3 class="mb-2 mt-2">$112</h3>
        <p class="mt-auto mb-0">
          Increase
          <span class="badge bg-success bg-opacity-10 text-success"
            >10%
            <BIconGraphUp />
          </span>
        </p>
      </b-card>
    </b-col>

    <b-col sm="6" xxl="3">
      <b-card no-body class="bg-light p-4 h-100">
        <h6 class="mb-0">Revenue this month</h6>
        <h3 class="mb-2 mt-2">$899.95</h3>
        <p class="mt-auto mb-0">
          Increase from last month
          <span class="badge bg-success bg-opacity-10 text-success"
            >21%
            <BIconGraphUp />
          </span>
        </p>
      </b-card>
    </b-col>

    <b-col sm="6" xxl="3">
      <b-card no-body class="bg-light p-4 h-100">
        <h6>
          On hold
          <a
            tabindex="0"
            v-b-tooltip.hover.top="{ title: 'After US royalty withholding tax' }"
            class="h6 mb-0"
          >
            <BIconInfoCircleFill class="small" />
          </a>
        </h6>
        <h3>$15,356</h3>
        <p class="mb-0 mt-auto">Expected payout on 05/10/2022</p>
      </b-card>
    </b-col>

    <b-col sm="6" xxl="3">
      <b-card no-body class="bg-primary p-4">
        <div class="d-flex justify-content-between align-items-start text-white">
          <img class="w-40px" :src="visa" alt="" />

          <b-dropdown variant="link" toggle-class="m-0 p-0" no-caret menu-class="dropdown-menu-end">
            <template #button-content>
              <a class="text-white" href="#" role="button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5"></circle>
                  <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5"></circle>
                  <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5"></circle>
                </svg>
              </a>
            </template>

            <b-dropdown-item href="#">
              <BIconCreditCard2FrontFill class="me-2 fw-icon" />
              Edit card
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <BIconCreditCard class="me-2 fw-icon"></BIconCreditCard>
              Add new card
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <BIconArrowBarDown class="me-2 fw-icon" />
              Withdrawal money
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <BIconCalculator class="me-2 fw-icon" />
              Currency converter
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="mt-4 text-white">
          <span>Total Balance</span>
          <h3 class="text-white mb-0">$32,000</h3>
        </div>
        <h5 class="text-white mt-4">**** **** **** 1569</h5>
        <div class="d-flex justify-content-between text-white">
          <span>Valid thru: 12/26</span>
          <span>CVV: ***</span>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import {
  BIconArrowBarDown,
  BIconCalculator,
  BIconCreditCard,
  BIconCreditCard2FrontFill,
  BIconGraphUp,
  BIconInfoCircleFill
} from 'bootstrap-icons-vue'
import visa from '@/assets/images/element/visa.svg'
</script>
