<template>
  <section class="pt-4 pt-md-5">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="7">
          <h1 class="mb-4 display-5">
            List Your Property at <span class="text-primary">Booking</span>
          </h1>
          <p class="mb-4">
            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy
            man children rejoiced.
          </p>
          <router-link :to="{ name: 'listings.add' }" class="btn btn-primary-soft mb-4">
            <div class="d-flex align-items-center gap-1">
              Add Listing
              <font-awesome-icon :icon="faArrowRightLong" class="fa-fw" />
            </div>
          </router-link>
          <h6 class="fw-normal mb-1">Create New Listing</h6>
          <ul class="list-group list-group-borderless mb-0 small">
            <li class="list-group-item d-flex mb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-2 mt-1" />
              More than 5.1 million holiday rentals already listed
            </li>
            <li class="list-group-item d-flex mb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-2 mt-1" />
              Bed one supposing breakfast day fulfilled off depending questions.
            </li>
            <li class="list-group-item d-flex mb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-2 mt-1" />
              The difference in the cost shall be borne by the client in case.
            </li>
          </ul>
        </b-col>
        <b-col lg="5" class="text-center">
          <img :src="joinUsImg" alt="join-img" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faCheckCircle, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import joinUsImg from '@/assets/images/element/join-us.svg'
</script>
