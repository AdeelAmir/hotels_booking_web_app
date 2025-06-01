<template>
  <section class="bg-light">
    <b-container>
      <b-row class="g-4">
        <b-col md="4" xxl="4" v-for="(service, idx) in serviceData" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
        <b-col md="4" xxl="4">
          <div class="bg-body d-flex rounded-3 h-100 p-4">
            <h3 class="d-flex align-items-center">
              <font-awesome-icon :icon="faHandHoldingHand"/>
            </h3>
            <div class="ms-3">
              <h5>Helping Hands</h5>
              <p class="mb-0">All time here to help your booking</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { serviceData } from '@/views/hotels/Home/data'
import ServiceCard from '@/views/hotels/Home/components/ServiceCard.vue'
import { faHandHoldingDollar, faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';
</script>
