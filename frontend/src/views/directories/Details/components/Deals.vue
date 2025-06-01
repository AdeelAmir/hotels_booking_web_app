<template>
  <b-row class="g-4">
    <b-col lg="8">
      <b-card class="border mb-4">
        <div class="d-sm-flex justify-content-between mb-2">
          <div class="mb-2 mb-sm-0">
            <div class="badge text-bg-dark me-1">
              <BIconScissors class="fa-fw text-warning"></BIconScissors>
              Salon
            </div>
            <div class="badge text-bg-success">40% off</div>
          </div>
          <span class="text-success">Free Cancellation</span>
        </div>

        <b-card-title tag="h5" class="mb-2">
          <a href="#"
            >Monsoon Offer: Men: Global Hair Color With Free Manicure / Pedicure / Haircut</a
          >
        </b-card-title>

        <div class="d-flex align-items-center flex-wrap">
          <span class="me-2">Valid for:</span>
          <ul class="nav nav-divider h6 fw-light mb-0">
            <li class="nav-item">
              <BIconPerson class="me-1" />
              1 Male
            </li>
            <li class="nav-item">
              <BIconCalendar class="me-1" />
              Mon - Fri
            </li>
            <li class="nav-item">
              <BIconClock class="me-1" />
              11 AM - 6 PM
            </li>
          </ul>
        </div>

        <div class="d-sm-flex justify-content-between mt-4">
          <div class="hstack gap-1">
            <h5 class="mb-0">$1500</h5>
            <span class="text-decoration-line-through">$1800</span>
          </div>
          <div class="mt-2 mt-sm-0">
            <a
              href="#"
              class="btn btn-sm btn-light mb-0 me-1"
              data-bs-toggle="modal"
              data-bs-target="#detailModal"
              >View Details</a
            >
            <a href="#" class="btn btn-sm btn-primary mb-0">
              <BIconPlusLg />
              Add</a
            >
          </div>
        </div>
      </b-card>

      <b-card class="border mb-4">
        <div class="d-sm-flex justify-content-between mb-2">
          <div class="mb-2 mb-sm-0">
            <div class="badge text-bg-dark me-1">
              <font-awesome-icon :icon="faSpa" class="fa-fw text-warning"></font-awesome-icon>
              Spa
            </div>
            <div class="badge text-bg-success">30% off</div>
          </div>
          <span class="text-success">Free Cancellation</span>
        </div>

        <b-card-title tag="h5" class="mb-2">
          <a href="#">Women Special Offer (Aroma Therapy - 30 min)</a>
        </b-card-title>

        <div class="d-flex align-items-center flex-wrap">
          <span class="me-2">Valid for:</span>
          <ul class="nav nav-divider h6 fw-light mb-0">
            <li class="nav-item">
              <BIconPerson class="me-1" />
              1 Female
            </li>
            <li class="nav-item">
              <BIconCalendar class="me-1" />
              Mon - Fri
            </li>
            <li class="nav-item">
              <BIconClock class="me-1" />
              11 AM - 6 PM
            </li>
          </ul>
        </div>

        <div class="d-sm-flex justify-content-between mt-4">
          <div class="hstack gap-1">
            <h5 class="mb-0">$820</h5>
            <span class="text-decoration-line-through">$900</span>
          </div>
          <div class="mt-2 mt-sm-0">
            <a
              href="#"
              class="btn btn-sm btn-light mb-0 me-1"
              data-bs-toggle="modal"
              data-bs-target="#detailModal"
              >View Details</a
            >
            <a href="#" class="btn btn-sm btn-primary mb-0">
              <BIconPlusLg />
              Add</a
            >
          </div>
        </div>
      </b-card>
    </b-col>

    <b-col lg="4">
      <OrderTotal />
      <CouponCode />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import {
  BIconCalendar,
  BIconClock,
  BIconPerson,
  BIconPlusLg,
  BIconScissors
} from 'bootstrap-icons-vue'

import OrderTotal from '@/views/directories/Details/components/OrderTotal.vue'
import CouponCode from '@/views/directories/Details/components/CouponCode.vue'
</script>
