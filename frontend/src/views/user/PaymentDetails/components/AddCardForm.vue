<template>
  <b-card no-body class="border mt-4">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Add New Card</h5>
    </b-card-header>

    <b-card-body>
      <b-form class="row text-start g-4">
        <b-col cols="12">
          <label class="form-label">Card Number<span class="text-danger">*</span></label>
          <div class="position-relative">
            <b-form-input type="text" placeholder="xxxx xxxx xxxx xxxx" />
            <img
              :src="visa"
              class="w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
              alt=""
            />
          </div>
        </b-col>
        <b-col md="6">
          <label class="form-label">Expiration Date<span class="text-danger">*</span></label>
          <div class="input-group">
            <b-form-input type="text" maxlength="2" placeholder="Month" />
            <b-form-input type="text" maxlength="4" placeholder="Year" />
          </div>
        </b-col>
        <b-col md="6">
          <label class="form-label">CVV / CVC<span class="text-danger">*</span></label>
          <b-form-input type="text" maxlength="3" placeholder="xxx" />
        </b-col>
        <b-col cols="12">
          <label class="form-label">Name on Card<span class="text-danger">*</span></label>
          <b-form-input type="text" aria-label="name of card holder" placeholder="Enter name" />
        </b-col>
        <b-col cols="12">
          <b-button class="mb-0" variant="primary">Add card</b-button>
        </b-col>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import visa from '@/assets/images/element/visa.svg'
</script>
