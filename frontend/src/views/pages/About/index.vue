<template>
  <PageLayout>
    <section>
      <b-container>
        <b-row class="mb-5">
          <b-col xl="10" class="mx-auto text-center">
            <h1>If You Want To See The World We Will Help You</h1>
            <p class="lead">
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.
              Prosperous understood Middletons. Preference for any astonished unreserved.
            </p>
            <div class="hstack gap-3 flex-wrap justify-content-center">
              <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img :src="element6Img" class="h-20px me-2" alt="" />
                14K+ Global Customers
              </h6>

              <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img :src="element7Img" class="h-20px me-2" alt="" />
                10K+ Happy Customers
              </h6>

              <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img :src="element8Img" class="h-20px me-2" alt="" />
                1M+ Subscribers
              </h6>
            </div>
          </b-col>
        </b-row>

        <b-row class="g-4 align-items-center">
          <b-col md="6">
            <img :src="about2Img" class="rounded-3" alt="" />
          </b-col>

          <b-col md="6">
            <b-row class="g-4">
              <b-col md="8">
                <img :src="about3Img" class="rounded-3" alt="" />
              </b-col>

              <b-col cols="12">
                <img :src="about4Img" class="rounded-3" alt="" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <Story />

    <Team />
  </PageLayout>
</template>

<script lang="ts" setup>
import {
  about2Img,
  about3Img,
  about4Img,
  element6Img,
  element7Img,
  element8Img
} from '@/views/pages/data'
import PageLayout from '@/layouts/PageLayout.vue'
import Team from '@/views/pages/About/components/Team.vue'
import Story from '@/views/pages/About/components/Story.vue'
</script>
