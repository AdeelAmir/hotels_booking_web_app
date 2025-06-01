<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="bg-light p-4 p-sm-5 rounded-3">
            <h2 class="fs-3 text-center mb-4 mb-sm-5">Why Working with us</h2>
            <b-row class="g-4">
              <b-col v-for="(benefit, idx) in benefits" md="6" :key="idx">
                <b-card no-body class="p-4">
                  <div>
                    <img :src="benefit.image" class="h-70px mb-3" alt="benefit-img" />
                  </div>
                  <h5>{{ benefit.title }}</h5>
                  <p class="mb-0">{{ benefit.description }}</p>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { benefits } from '@/views/listings/JoinUs/data'
</script>
