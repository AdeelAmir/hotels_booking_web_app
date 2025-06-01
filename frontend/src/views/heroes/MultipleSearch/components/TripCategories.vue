<template>
  <section>
    <b-container>
      <b-row class="g-4">
        <b-col v-for="(item, idx) in tripCategories" sm="6" md="4" lg="3" xl="2" :key="idx">
          <b-card class="bg-light h-100 align-items-center justify-content-center">
            <div class="d-flex align-items-center">
              <img :src="item.image" class="h-30px me-3" alt="tripImg" />
              <b-card-title tag="h6" class="mb-0">
                <a href="#" class="stretched-link"> {{ item.name }} </a>
              </b-card-title>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { tripCategories } from '@/views/heroes/MultipleSearch/data'
</script>
