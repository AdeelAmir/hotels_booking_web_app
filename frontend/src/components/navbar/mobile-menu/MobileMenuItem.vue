<template>
  <li :class="itemClass">
    <MenuItemLink :item="item" :link-class="linkClass" />
  </li>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types/layout'
import MenuItemLink from '@/components/navbar/mobile-menu/MobileMenuItemLink.vue'

type SubMenus = {
  item: MenuItemType
  itemClass?: string
  linkClass?: string
  activeMenuItems?: Array<string>
}

defineProps<SubMenus>()
</script>
