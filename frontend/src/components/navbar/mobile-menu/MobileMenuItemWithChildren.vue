<template>
  <li :class="level === 1 ? 'nav-item py-2' : 'px-3'">
    <a
      :class="{ active: menuItemActive(item.key) }"
      class="nav-link py-2"
      href="#"
      v-b-toggle.collapse="item.key"
    >
      {{ item.label }}
      <font-awesome-icon v-if="level1" :icon="faChevronDown" size="xs" class="float-end" />
      <font-awesome-icon v-else :icon="faEllipsis" class="float-end" />
    </a>

    <b-collapse :id="item.key">
      <template v-for="child in item.children" :key="child.key">
        <MenuItemWithChildren
          v-if="child.children"
          :item="child"
          :level="level + 1"
          item-class="mx-3"
          link-class="py-2"
        />

        <MenuItem v-else :item="child" :item-class="itemClass" class="mx-3" link-class="py-2" />
      </template>
    </b-collapse>
  </li>
</template>

<script setup lang="ts">
import { faChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'

import type { MenuItemType } from '@/types/layout'
import MenuItem from '@/components/navbar/mobile-menu/MobileMenuItem.vue'
import router from '@/router'

type SubMenus = {
  item: MenuItemType
  itemClass?: string
  linkClass?: string
  level: number
}

const props = defineProps<SubMenus>()

const level1 = props.level === 1

const currentRouteName = router.currentRoute.value.name

const menuItemActive = (key: string) => {
  return currentRouteName?.toString().includes(key)
}
</script>
