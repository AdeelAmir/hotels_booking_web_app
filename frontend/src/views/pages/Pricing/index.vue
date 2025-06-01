<template>
  <PageLayout>
    <PricingPlan />

    <CompanySlider />

    <Faq />

    <section class="pt-0">
      <b-container>
        <div class="bg-light p-4 p-sm-5 rounded-3">
          <b-row class="g-3 g-xl-4 align-items-center">
            <b-col xl="8">
              <div class="d-sm-flex align-items-center mb-2">
                <h3 class="mb-2 mb-sm-0">Still, have a question?</h3>
                <ul class="avatar-group mb-0 ms-sm-3">
                  <li class="avatar avatar-xs" v-for="(avatar, idx) in avatars" :key="idx">
                    <img class="avatar-img rounded-circle" :src="avatar" alt="avatar" />
                  </li>
                </ul>
              </div>
              <p class="mb-0">
                He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
                difficulty gay assistance joy.
              </p>
            </b-col>
            <b-col xl="4" class="text-xl-end">
              <router-link :to="{ name: 'pages.contact' }" class="btn btn-primary mb-0"
                >Contact us
                <BIconArrowRightCircle class="ms-2" />
              </router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'

import { BIconArrowRightCircle } from 'bootstrap-icons-vue'
import { avatar1Img, avatar2Img, avatar3Img, avatar5Img, avatar6Img } from '@/views/pages/data'

import PricingPlan from '@/views/pages/Pricing/components/PricingPlan.vue'
import CompanySlider from '@/views/pages/Pricing/components/CompanySlider.vue'
import Faq from '@/views/pages/Pricing/components/Faq.vue'

const avatars = [avatar1Img, avatar2Img, avatar3Img, avatar5Img, avatar6Img]
</script>
