<template>
  <HelpLayout>
    <Hero />

    <Faqs />

    <ActionBoxes />

    <PopularArticle />
  </HelpLayout>
</template>

<script setup lang="ts">
import HelpLayout from '@/layouts/HelpLayout.vue'
import Hero from '@/views/pages/Help/Center/components/Hero.vue'
import Faqs from '@/views/pages/Help/Center/components/Faqs.vue'
import ActionBoxes from '@/views/pages/Help/Center/components/ActionBoxes.vue'
import PopularArticle from '@/views/pages/Help/Center/components/PopularArticle.vue'
</script>
