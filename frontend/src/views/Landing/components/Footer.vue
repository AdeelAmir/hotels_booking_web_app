<template>
  <footer class="bg-dark pt-8 pb-5">
    <b-container>
      <b-row>
        <b-col lg="8" class="mx-auto text-center">
          <h2 class="h1 text-white">Build Successful Websites With Booking</h2>
          <a
            class="btn btn-lg btn-primary"
            href="https://themes.getbootstrap.com/product/booking-multipurpose-booking-and-directory-theme/"
            target="_blank"
            >Buy Booking now!</a
          >
          <div class="text-primary-hover text-body-secondary pt-5">
            Made with ❤️ by
            <a :href="developedByLink" class="text-body-secondary"><u>{{ developedBy }}</u></a>.
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import {developedBy, developedByLink} from "@/helpers/constants";
</script>