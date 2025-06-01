<template>
  <b-row class="g-4">
    <b-col md="6" v-for="(card, idx) in paymentCards" :key="idx">
      <PaymentCard :card="card" />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import PaymentCard from '@/views/user/PaymentDetails/components/PaymentCard.vue'
import { paymentCards } from '@/views/user/PaymentDetails/data'
</script>
