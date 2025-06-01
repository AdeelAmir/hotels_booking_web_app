<template>
  <ul class="navbar-nav flex-column" id="navbar-sidebar">
    <template v-for="item in menuItems" :key="item.key">
      <li v-if="item.children" class="nav-item">
        <a
          class="nav-link d-flex align-items-center justify-content-between"
          :class="{ active: menuItemActive(item.key) }"
          v-b-toggle="`${id}-${item.key}`"
        >
          {{ item.label }}
          <font-awesome-icon :icon="faChevronDown" size="xs" />
        </a>

        <b-collapse class="nav flex-column flex-nowrap" :id="`${id}-${item.key}`">
          <li v-for="child in item.children" :key="child.key" class="nav-item">
            <router-link
              :to="{ name: child.link?.name, params: child.link?.params }"
              class="nav-link"
              :class="child.link?.name === currentRouteName && 'active'"
            >
              {{ child.label }}
            </router-link>
          </li>
        </b-collapse>
      </li>

      <li v-else class="nav-item">
        <router-link
          class="nav-link"
          :class="item.link?.name === currentRouteName && 'active'"
          :to="{ name: item.link?.name, params: item.link?.params }"
          >{{ item.label }}
        </router-link>
      </li>
    </template>
  </ul>

  <!-- <div class="d-flex align-items-center justify-content-between text-primary-hover mt-auto py-3">
    <router-link
      :to="{ name: 'auth.sign-in' }"
      class="h6 fw-light mb-0 text-body"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      aria-label="Sign out"
    >
      <font-awesome-icon :icon="faArrowRightFromBracket" />
      Log out
    </router-link>
    <router-link :to="{ name: 'admin.settings' }" class="h6 mb-0 text-body">
      <BIconGearFill />
    </router-link>
  </div> -->
</template>

<script lang="ts" setup>
import { faArrowRightFromBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { BIconGearFill } from 'bootstrap-icons-vue'
import { getAdminMenuItems } from '@/helpers/menu'
import router from '@/router'

const menuItems = getAdminMenuItems()

const currentRouteName = router.currentRoute.value.name

const menuItemActive = (key: string) => {
  return currentRouteName?.toString().includes(key)
}

defineProps({
  id: {
    type: String,
    require: true
  }
})
</script>
