<template>
  <b-card no-body class="card-body bg-transparent border p-4 mb-1">
    <h6 class="text-primary fw-normal mb-2">{{ article.total }} Articles</h6>
    <b-card-title tag="h5" class="mb-md-4"
      ><a href="#" class="stretched-link">{{ article.title }}</a>
    </b-card-title>
    <div class="d-sm-flex justify-content-sm-between align-items-center">
      <span>{{ article.time }}</span>
      <div class="hstack gap-3 flex-wrap fw-bold">
        <span><font-awesome-icon :icon="faThumbsUp" class="me-2" />{{ article.like }}</span>
        <span><font-awesome-icon :icon="faComments" class="me-2" />{{ article.comment }}</span>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import type { PropType } from 'vue'
import type { ArticleType } from '@/views/pages/Help/Center/type'

defineProps({
  article: {
    type: Object as PropType<ArticleType>,
    required: true
  }
})
</script>
