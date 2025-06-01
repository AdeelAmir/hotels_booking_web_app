<template>
  <b-card no-body class="shadow mt-5">
    <b-card-header class="border-bottom">
      <b-card-title tag="h5" class="mb-0">Payment History</b-card-title>
    </b-card-header>
    <b-card-body>
      <div class="bg-light rounded p-3 d-none d-sm-block">
        <b-row class="row-cols-7 g-4">
          <b-col>
            <h6 class="mb-0">Invoice ID</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Date</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Amount</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Status</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Action</h6>
          </b-col>
        </b-row>
      </div>

      <b-row
        v-for="(payment, idx) in paymentHistory"
        :key="idx"
        class="row-cols-xl-7 g-4 align-items-sm-center border-bottom px-2 py-4"
      >
        <b-col>
          <small class="d-block d-sm-none">Booked by:</small>
          <h6 class="fw-light mb-0">#{{ payment.id }}</h6>
        </b-col>
        <b-col>
          <small class="d-block d-sm-none">Date:</small>
          <h6 class="mb-0 fw-normal">{{ payment.date }}</h6>
        </b-col>
        <b-col class="position-relative">
          <small class="d-block d-sm-none">Amount:</small>
          <div class="d-flex align-items-center">
            <h6 class="mb-0 me-1">
              {{ currency }}
              {{ payment.amount }}
            </h6>
            <b-dropdown
              no-caret
              toggle-class="m-0 p-0"
              menu-class="dropdown-w-sm min-w-auto shadow rounded"
              variant="link"
            >
              <template #button-content>
                <a class="h6 mb-1 arrow-none" role="button">
                  <BIconInfoCircleFill class="mb-1" />
                </a>
              </template>
              <li>
                <div class="d-flex justify-content-between">
                  <span class="small">Commission</span>
                  <span class="h6 mb-0 small ms-2">{{ currency }}86</span>
                </div>
                <hr class="my-1" />
              </li>
              <li>
                <div class="d-flex justify-content-between">
                  <span class="me-4 small">Tax</span>
                  <span class="text-danger small ms-2">-{{ currency }}0.00</span>
                </div>
                <hr class="my-1" />
              </li>
              <li>
                <div class="d-flex justify-content-between">
                  <span class="small">Earning</span>
                  <span class="h6 mb-0 small ms-2">{{ currency }}86</span>
                </div>
              </li>
            </b-dropdown>
          </div>
        </b-col>
        <b-col>
          <small class="d-block d-sm-none">Status:</small>
          <div
            class="badge bg-opacity-10"
            :class="
              payment.status == 'cancelled'
                ? 'text-danger bg-danger'
                : payment.status == 'pending'
                  ? 'text-warning bg-warning'
                  : 'text-success bg-success'
            "
          >
            {{ toSentenceCase(payment.status) }}
          </div>
        </b-col>
        <b-col>
          <router-link to="" class="btn btn-light btn-round mb-0 flex-centered">
            <BIconCloudDownload />
          </router-link>
        </b-col>
      </b-row>
    </b-card-body>

    <b-card-footer class="pt-0">
      <Pagination />
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import Pagination from '@/views/admin/Earnings/components/Pagination.vue'
import { BIconCloudDownload, BIconInfoCircleFill } from 'bootstrap-icons-vue'
import { paymentHistory } from '@/views/admin/Earnings/data'

import { currency } from '@/helpers/constants'
import { toSentenceCase } from '@/helpers/change-casting'
</script>
