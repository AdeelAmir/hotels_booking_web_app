<template>
  <router-link
    :to="{ name: item.link?.name, params: item.link?.params }"
    class="nav-link"
    :class="(item.link?.name === currentRouteName && 'active') || linkClass"
  >
    {{ item.label }}
  </router-link>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types/layout'
import router from '@/router'

type SubMenus = {
  item: MenuItemType
  itemClass?: string
  linkClass?: string
  activeMenuItems?: Array<string>
}

defineProps<SubMenus>()

const currentRouteName = router.currentRoute.value.name
</script>
