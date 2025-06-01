<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row class="g-4">
        <b-col md="6" class="position-relative overflow-hidden">
          <div class="bg-primary bg-opacity-10 rounded-3 h-100 p-4">
            <div class="d-flex">
              <div class="icon-lg text-white bg-primary rounded-circle flex-shrink-0">
                <BIconHeadset />
              </div>
              <div class="ms-3">
                <h4 class="mb-1">Contact Support?</h4>
                <p class="mb-3">Not finding the help you need?</p>
                <router-link :to="{ name: 'pages.contact-2' }" class="btn btn-dark mb-0"
                  >Contact Us</router-link
                >
              </div>
            </div>
          </div>
        </b-col>

        <b-col md="6" class="position-relative overflow-hidden">
          <div class="bg-secondary bg-opacity-10 rounded-3 h-100 p-4">
            <div class="d-flex">
              <div class="icon-lg text-dark bg-warning rounded-circle flex-shrink-0">
                <font-awesome-icon :icon="faTicket" />
              </div>
              <div class="ms-3">
                <h4 class="mb-1">Submit a Ticket</h4>
                <p class="mb-3">Prosperous impression had conviction For every delay</p>
                <a href="#" class="btn btn-dark mb-0">Submit ticket</a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconHeadset } from 'bootstrap-icons-vue'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
</script>
