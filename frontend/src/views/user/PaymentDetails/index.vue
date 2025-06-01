<template>
  <UserLayout>
    <b-card no-body class="bg-transparent border">
      <b-card-header class="bg-transparent border-bottom">
        <h4 class="card-header-title">Payment Details</h4>
      </b-card-header>

      <b-card-body class="p-2 p-sm-4">
        <h5>Saved Card</h5>
        <PaymentCards />

        <AddCardForm />
      </b-card-body>
    </b-card>
  </UserLayout>
</template>

<script lang="ts" setup>
import UserLayout from '@/layouts/UserLayout.vue'
import PaymentCards from '@/views/user/PaymentDetails/components/PaymentCards.vue'
import AddCardForm from '@/views/user/PaymentDetails/components/AddCardForm.vue'
</script>
