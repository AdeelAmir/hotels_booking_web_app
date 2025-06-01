<!-- <template>
  <ul class="navbar-nav navbar-offcanvas-menu">
    <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
      <router-link
        class="nav-link"
        :to="{ name: item.link?.name }"
        :class="{ active: currentRouteName === item.link?.name }"
      >
        <component :is="item.icon" class="fa-fw mb-1" />
        {{ item.label }}
      </router-link>
    </li>

    <b-nav-item-dropdown is="li" no-caret toggle-class="p-0 m-0">
      <template v-slot:button-content>
        <a class="nav-link" href="#">
          <BIconListUl class="fa-fw" />
          Dropdown
          <font-awesome-icon :icon="faChevronDown" size="xs" />
        </a>
      </template>

      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
    </b-nav-item-dropdown>
  </ul>
</template>

<script setup lang="ts">
import { BIconListUl } from 'bootstrap-icons-vue'
import { getAgentMenuItems } from '@/helpers/menu'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import router from '@/router'

const menuItems = getAgentMenuItems()

const currentRouteName = router.currentRoute.value.name
</script> -->
