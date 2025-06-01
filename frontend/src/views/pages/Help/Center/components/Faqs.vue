<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center mb-4">
          <h2 class="mb-0">Frequently Asked Questions</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="10" class="mx-auto">
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
            <b-accordion-item
              v-for="(faq, idx) in helpFaqs"
              :title="faq.title"
              class="mb-3"
              header-tag="h6"
              button-class="fw-bold rounded d-inline-block"
              header-class="font-base"
              :key="idx"
            >
              <div class="mt-3">
                {{ faq.description }}
              </div>
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { helpFaqs } from '@/views/pages/Help/Center/data'
</script>
