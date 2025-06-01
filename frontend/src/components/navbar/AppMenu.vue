<template>
  <b-collapse class="navbar-collapse">
    <b-navbar-nav v-if="startBookingMenu" class="navbar-nav-scroll me-auto">
      <b-nav-item-dropdown class="" toggle-class="ps-md-3 m-0" menu-class="z-3" no-caret>
        <template v-slot:button-content>
          <a
              href="#"
              id="listingMenu"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
          >
            <span class="me-auto items-center gap-1">
              <font-awesome-icon :icon="faSuitcaseRolling"/> Travelers
              <font-awesome-icon :icon="faAngleDown" size="sm"/>
            </span>
          </a>
        </template>

        <template v-for="item in bookingHomeMenuItems" :key="item.key">
          <li class="mb-1">
            <router-link
                :to="{ name: item.link?.name }"
                class="dropdown-item bg-light-hover d-flex align-items-center rounded p-2"
                :class="{ active: item.link?.name === currentRouteName }"
            >
              <div class="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                <component :is="item.icon" class="fs-6"/>
              </div>
              <div class="ms-2">
                <h6 class="mb-0">{{ item.label }}</h6>
                <p class="small mb-0 text-body">Small description here</p>
              </div>
            </router-link>
          </li>
        </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <ul class="navbar-nav navbar-nav-scroll me-auto" :class="menuClass">
      <!-- <template v-for="item in menuItems" :key="item.key">
        <MenuItemWithChildren
            v-if="item.children"
            :item="item"
            :level="0"
            class="test-item"
            item-class="nav-item "
            link-class="nav-link arrow-none d-flex align-items-center gap-1 justify-content-between"
        />
        <MenuItem v-else :item="item" link-class="nav-link"/>
      </template> -->

      <!-- <li class="nav-item dropdown" v-if="showExtraPages">
        <a
            class="nav-link"
            href="#"
            id="advanceMenu"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
          <font-awesome-icon :icon="faEllipsis"/>
        </a>
        <ul class="dropdown-menu min-w-auto" data-bs-popper="none">
          <li>
            <a class="dropdown-item" href="https://support.webestica.com/" target="_blank">
              <BIconLifePreserver class="text-warning fa-fw me-2"/>
              Support
            </a>
          </li>
          <li>
            <router-link to="/docs/index.html" class="dropdown-item" target="_blank">
              <BIconCardText class="text-danger fa-fw me-2"/>
              Documentation
            </router-link>
          </li>
          <li>
            <hr class="dropdown-divider"/>
          </li>
          <li>
            <a
                class="dropdown-item"
                href="https://themes.getbootstrap.com/store/webestica/"
                target="_blank"
            >
              <BIconCloudDownloadFill class="text-success fa-fw me-2"/>
              Buy Booking!
            </a>
          </li>
          <li>
            <router-link to="/docs/icons.html" class="dropdown-item" target="_blank">
              <BIconPuzzleFill class="text-orange fa-fw me-2"/>
              Components
            </router-link>
          </li>
        </ul>
      </li> -->
    </ul>
  </b-collapse>
</template>

<script setup lang="ts">
import {faEllipsis, faSuitcaseRolling, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {
  BIconCardText,
  BIconCloudDownloadFill,
  BIconLifePreserver,
  BIconPuzzleFill
} from 'bootstrap-icons-vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {getAppMenuItems} from '@/helpers/menu'
import MenuItemWithChildren from '@/components/navbar/MenuItemWithChildren.vue'
import MenuItem from '@/components/navbar/MenuItem.vue'
import {bookingHomeMenuItems} from '@/assets/data/menu-items'
import router from '@/router'

type AppMenuProps = {
  showExtraPages?: boolean
  startBookingMenu?: boolean
  menuClass?: string
}

defineProps<AppMenuProps>()

const menuItems = getAppMenuItems()

const currentRouteName = router.currentRoute.value.name
</script>
