<template>
  <section id="demos">
    <b-container fluid class="px-md-5">
      <b-row class="mb-4 position-relative">
        <b-col xl="6" class="mx-auto text-center">
          <h2>Carefully crafted demo sites.</h2>
          <p>
            Created with detailed research on a particular domain niche to fulfill all the required
            features, designs, and pages. You can also mix and match sections to create a website
            related to listing and directory domains.
          </p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-7 demo-grid">
        <b-col
          sm="6"
          lg="4"
          xxl="3"
          v-for="demo in demoData"
          :key="demo.title"
          class="demo-grid-item"
        >
          <b-card no-body class="card-hover-shadow border">
            <img :src="demo.image" class="card-img-top" alt="" />

            <b-card-body class="border-top">
              <h6 class="mb-0">
                <router-link
                  :to="{ name: demo.link.name, params: demo.link.params }"
                  class="stretched-link"
                  >{{ demo.title }}
                </router-link>
              </h6>
              <small>{{ demo.description }}</small>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Isotope from 'isotope-layout'
import { onMounted } from 'vue'

import { demoData } from '@/views/Landing/data'

onMounted(() => {
  let grid = document.querySelector<HTMLElement>('.demo-grid')
  if (grid) {
    let iso = new Isotope(grid, {
      itemSelector: '.demo-grid-item',
      percentPosition: true
    })

    setTimeout(() => {
      iso.arrange({})
    }, 100)
  }
})
</script>
