<template>
  <PageLayout>
    <Blog />

    <Article />

    <Newsletter />
  </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '@/layouts/PageLayout.vue'
import Blog from '@/views/pages/Blogs/Blog/components/Blog.vue'
import Article from '@/views/pages/Blogs/Blog/components/Article.vue'
import Newsletter from '@/views/pages/Blogs/Blog/components/Newsletter.vue'
</script>
