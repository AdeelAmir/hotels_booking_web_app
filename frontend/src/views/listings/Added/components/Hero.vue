<template>
  <section class="overflow-hidden pt-0 pt-lg-5">
    <b-container>
      <b-row>
        <b-col md="8" class="text-center mx-auto">
          <img :src="congImg" alt="conImg" class="h-300px my-4" />
          <h1 class="fs-3">Your listing has been submitted successfully. 🎉</h1>
          <p>
            We will review your item shortly. You will be informed by email that your listing has
            been accepted. Also, make sure your
            <a href="#">Payment and Tax information</a> is correct and valid.
          </p>
          <router-link :to="{ name: 'listings.add' }" class="btn btn-primary mb-5 me-2">
            Preview
          </router-link>
          <router-link :to="{ name: 'hotels.home' }" class="btn btn-light mb-5">
            Back to Homepage
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import congImg from '@/assets/images/element/congratulations.svg'
</script>
