<template>
  <b-card no-body class="bg-transparent faq-card">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h3 class="mb-0">Frequently Asked Questions ?</h3>
    </b-card-header>

    <b-card-body v-if="faqsData.length === 0" class="text-center py-4">
      <h5 class="text-muted">No FAQs available.</h5>
    </b-card-body>

    <b-card-body v-else class="pt-4 p-0 overflow-hidden">
      <b-row v-for="(faq, index) in faqsData" :key="index" class="faq-item mb-3">
        <!-- Question -->
        <b-col>
          <h6 class="faq-question" @click="toggleAnswer(index)">
            <span class="faq-icon" :class="{'rotate': activeIndex === index}">
              <i class="fas fa-chevron-down"></i>
            </span>
            {{ faq.question }}
          </h6>
          <!-- Answer (toggle visibility) -->
          <transition name="faq-toggle">
            <p v-if="activeIndex === index" class="faq-answer">
              {{ faq.answer }}
            </p>
          </transition>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { HotelDetailStore } from '@/stores/auth';

// Get hotel details
let HotelDetails: any = HotelDetailStore();
HotelDetails = HotelDetails.getUserData().data;
const hotelFAQS = HotelDetails.faqs;

// Reactive data for FAQs
const faqsData = ref(hotelFAQS || []);

// State to track the active question
const activeIndex = ref<number | null>(null);

// Function to toggle answer visibility
const toggleAnswer = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* FAQ card container */
/* .faq-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

/* FAQ title */


/* FAQ question styling */
.faq-question {
  font-size: 18px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  display: flex;
  align-items: center;
}

/* Chevron icon rotation */
.faq-icon {
  margin-right: 10px;
  transition: transform 0.3s;
}

.faq-icon.rotate {
  transform: rotate(180deg);
}

/* Hover effect on question */
.faq-question:hover {
  color: #007bff;
}

/* FAQ answer styling */
.faq-answer {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  padding-left: 20px;
  border-left: 3px solid #007bff;
  transition: opacity 0.3s;
}

/* FAQ item margin and spacing */
.faq-item {
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

/* Transition for toggling answer */
.faq-toggle-enter-active,
.faq-toggle-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.faq-toggle-enter-from,
.faq-toggle-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq-toggle-enter-to,
.faq-toggle-leave-from {
  max-height: 300px; /* Adjust based on expected answer length */
  opacity: 1;
}
</style>
