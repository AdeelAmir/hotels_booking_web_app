<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { onMounted } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { changeHTMLAttribute } from '@/helpers/layout'

const useLayout = useLayoutStore()

onMounted(() => {
  changeHTMLAttribute('data-bs-theme', useLayout.theme)
})
</script>
