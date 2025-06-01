<template>
  <h5 class="mb-3">
    <font-awesome-icon :icon="faSpa" class="fa-fw text-warning"></font-awesome-icon>
    Spa Services
  </h5>
  <b-row>
    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Foot Treatments
          </a>
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Body Massage
          </a>
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Our Special Massage</a
          >
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Head & Foot Treatments
          </a>
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Body Spa - Scrubs</a
          >
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Body DE-Tanning</a
          >
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Body Polishing
          </a>
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Back Treatments
          </a>
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Manicure & Pedicure</a
          >
        </li>
      </ul>
    </b-col>
  </b-row>

  <h5 class="mb-3 mt-5">
    <BIconScissors class="fa-fw text-warning" />
    Salon Services
  </h5>
  <b-row>
    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Threading</a
          >
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Bleach</a
          >
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Waxing</a
          >
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Blow Dry</a
          >
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Hair Colour</a
          >
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Facial & Cleanup</a
          >
        </li>
      </ul>
    </b-col>

    <b-col sm="6" lg="4" xl="3">
      <ul class="list-group list-group-borderless mb-0">
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Pre Bridal</a
          >
        </li>
        <li class="list-group-item h6 fw-normal mb-0">
          <a href="#" class="mb-0">
            <BIconArrowRight class="fa-fw me-1" />
            Bridal Makeup</a
          >
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconScissors } from 'bootstrap-icons-vue'
</script>
