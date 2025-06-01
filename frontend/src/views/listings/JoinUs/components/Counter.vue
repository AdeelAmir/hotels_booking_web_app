<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col sm="6" md="3">
          <h4 class="mb-0">Numbers In Worldwide</h4>
        </b-col>
        <b-col sm="6" md="3">
          <b-card class="text-center bg-light">
            <div class="d-flex justify-content-center">
              <h3 class="purecounter text-orange mb-0">
                <Vue3autocounter
                  ref="counter"
                  :startAmount="0"
                  :endAmount="28"
                  :duration="3"
                  suffix="M+"
                />
              </h3>
            </div>
            <h6 class="fw-normal mb-0">Total Users</h6>
          </b-card>
        </b-col>
        <b-col sm="6" md="3">
          <b-card class="text-center bg-light">
            <div class="d-flex justify-content-center">
              <h3 class="purecounter text-info mb-0">
                <Vue3autocounter
                  ref="counter"
                  :startAmount="0"
                  :endAmount="51"
                  :duration="3"
                  suffix="M+"
                />
              </h3>
            </div>
            <h6 class="fw-normal mb-0">Total Listing</h6>
          </b-card>
        </b-col>
        <b-col sm="6" md="3">
          <b-card class="text-center bg-light">
            <div class="d-flex justify-content-center">
              <h3 class="purecounter text-primary mb-0">
                <Vue3autocounter
                  ref="counter"
                  :startAmount="0"
                  :endAmount="41"
                  :duration="3"
                  suffix="+"
                />
              </h3>
            </div>
            <h6 class="fw-normal mb-0">Languages</h6>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter'
</script>
