<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0 items-center gap-1">
              <BIconStar class="fa-fw" />
              Reviews
            </h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <ReviewMetrics />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <UserReviews />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import { BIconStar } from 'bootstrap-icons-vue'
import AgentLayout from '@/layouts/AgentLayout.vue'
import ReviewMetrics from '@/views/agent/Reviews/components/ReviewMetrics.vue'
import UserReviews from '@/views/agent/Reviews/components/UserReviews.vue'
</script>
