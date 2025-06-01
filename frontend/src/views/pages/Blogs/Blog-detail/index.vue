<template>
  <PageLayout>
    <Hero />

    <BlogDetail />
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
import Hero from '@/views/pages/Blogs/Blog-detail/components/Hero.vue'
import BlogDetail from '@/views/pages/Blogs/Blog-detail/components/BlogDetail.vue'
</script>
