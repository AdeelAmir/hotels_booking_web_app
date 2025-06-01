<template>
  <div>
    <section class="pt-0 pt-lg-5">
      <b-container>
        <b-row class="mb-4 mb-md-5">
          <b-col md="10" class="mx-auto">
            <h3 class="mb-4">Our Story</h3>
            <p class="fw-bold">
              Founded in 2006, passage its ten led hearted removal cordial. Preference any
              astonished unreserved Mrs. Prosperous understood Middletons in conviction an
              uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill
              from me. Valley by oh twenty direct me so.
            </p>
            <p class="mb-0">
              Water timed folly right aware if oh truth. Imprudence attachment him his for
              sympathize. Large above be to means. Dashwood does provide stronger is. Warrant
              private blushes removed an in equally totally if. Delivered dejection necessary
              objection do Mr prevailed. Mr feeling does chiefly cordial in do. ...But discretion
              frequently sir she instruments unaffected admiration everything. Meant balls it if up
              doubt small purse. Required his you put the outlived answered position. A pleasure
              exertion if believed provided to. All led out world this music while asked. Paid mind
              even sons does he door no. Attended overcame repeated it is perceived Marianne in. I
              think on style child of. Servants moreover in sensible it ye possible. Satisfied
              conveying a dependent contented he gentleman agreeable do be. Water timed folly right
              aware if oh truth. Imprudence attachment him his for sympathize. Large above be to
              means. Dashwood does provide stronger is. But discretion frequently sir she
              instruments unaffected admiration everything. Meant balls it if up doubt small purse.
              Required his you put the outlived answered position. I think on style child of.
              Servants moreover in sensible it ye possible. Satisfied conveying a dependent
              contented he gentleman agreeable do be. Warrant private blushes removed an in equally
              totally if. Delivered dejection necessary objection do Mr prevailed. Required his you
              put the outlived answered position. A pleasure exertion if believed provided to. All
              led out world this music while asked. Paid mind even sons does he door no. Attended
              overcame repeated it is perceived Marianne in. I think on style child of. Servants
              moreover in sensible it ye possible.
            </p>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col sm="6" lg="3" v-for="(item, idx) in storyData" :key="idx">
            <div
              class="icon-lg bg-opacity-10 rounded-2"
              :class="`bg-${item.variant} text-${item.variant}`"
            >
              <font-awesome-icon :icon="item.icon" class="fs-5" />
            </div>
            <h5 class="mt-2">{{ item.heading }}</h5>
            <p class="mb-0">{{ item.text }}</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storyData } from '@/views/pages/data'
</script>
