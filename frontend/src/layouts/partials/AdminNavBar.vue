<template>
  <nav class="navbar top-bar navbar-light py-0 py-xl-3">
    <b-container fluid class="p-0">
      <div class="d-flex align-items-center w-100">
        <div class="d-flex align-items-center d-xl-none">
          <LogoBox custom-class="h-40px" />
        </div>

        <div class="navbar-expand-xl sidebar-offcanvas-menu">
          <button class="navbar-toggler me-auto p-2" type="button" v-b-toggle.offcanvasSidebar>
            <BIconList class="text-primary fa-fw" />
          </button>
        </div>

        <!-- <div class="navbar-expand-lg ms-auto ms-xl-0">
          <button class="navbar-toggler ms-auto p-0" type="button" v-b-toggle.navbarTopContent>
            <BIconSearch/>
          </button>

          <b-collapse class="navbar-collapse w-100 z-index-1" id="navbarTopContent">
            <div class="nav my-3 my-xl-0 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <b-form class="position-relative">
                  <b-form-input
                      class="bg-light pe-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                  />
                  <button
                      class="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"
                  >
                    <font-awesome-icon :icon="faSearch" class="fs-6 text-primary"/>
                  </button>
                </b-form>
              </div>
            </div>
          </b-collapse>
        </div> -->

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
          <!-- <CustomDropDown is="li" custom-class="nav-item ms-3">
            <button
                class="nav-notification lh-0 btn btn-light p-0 mb-0"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
            >
              <BIconCircleHalf class="fs-6"/>
            </button>

            <ul class="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
              <template v-for="(mode, idx) in themeModes" :key="idx">
                <li :class="{ 'mb-1': idx != themeModes.length - 1 }">
                  <button
                      type="button"
                      class="dropdown-item d-flex align-items-center"
                      :class="{ active: mode.theme === useLayout.theme }"
                      @click="useLayout.setTheme(mode.theme)"
                  >
                    <component :is="mode.icon"/>
                    &nbsp;&nbsp;
                    {{ toSentenceCase(mode.theme) }}
                  </button>
                </li>
              </template>
</ul>
</CustomDropDown> -->

          <!-- <CustomDropDown is="li" custom-class="nav-item ms-3">
            <a
                class="nav-notification btn btn-light p-0 mb-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
            >
              <BIconBell class="fa-fw"/>
            </a>
            <span class="notif-badge animation-blink"></span>

            <div
                class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0"
            >
              <b-card class="bg-transparent" body-class="p-0">
                <b-card-header
                    class="bg-transparent d-flex justify-content-between align-items-center border-bottom"
                >
                  <h6 class="m-0">
                    Notifications
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                  </h6>
                  <a class="small" href="#">Clear all</a>
                </b-card-header>

                <b-card-body class="p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <li v-for="(item, idx) in notificationData" :key="idx">
                      <a
                          href="#"
                          class="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                          :class="{ 'notif-unread': idx === 0 }"
                      >
                        <h6 class="mb-2">{{ item.title }}</h6>
                        <p class="mb-0 small">{{ item.content }}</p>
                        <span>{{ item.time }}</span>
                      </a>
                    </li>
                  </ul>
                </b-card-body>

                <b-card-footer class="bg-transparent text-center border-top">
                  <a href="#" class="btn btn-sm btn-link mb-0 p-0">See all incoming activity</a>
                </b-card-footer>
              </b-card>
            </div>
          </CustomDropDown> -->

          <CustomDropDown is="li" custom-class="nav-item ms-3">
            <div class="d-flex" data-bs-display="static" data-bs-toggle="dropdown">
              <a class="avatar avatar-sm p-0" href="#" role="button" data-bs-auto-close="outside"
                data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <BIconPersonCircle class="signIn-icon" />
                <!-- <img class="avatar-img rounded-2" :src="avatar1" alt="avatar"/> -->
              </a>
              <div class="ml-3">
                <a class="h6 mt-2 mt-sm-0" href="#">{{ userDetails.firstName + ' ' + userDetails.lastName }}</a>
                <p class="small m-0">{{ userDetails.email }}</p>
              </div>
            </div>

            <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow" aria-labelledby="profileDropdown">
              <!-- <li class="px-2 pb-2">
                <div class="d-flex align-items-center">
                  <div class="avatar me-3">
                    <BIconPersonCircle class="avatar-img rounded-circle shadow" />
                  </div>
                  <div>
                    <a class="h6 mt-2 mt-sm-0" href="#">{{ userDetails.firstName + ' ' + userDetails.lastName }}</a>
                    <p class="small m-0">{{ userDetails.email }}</p>
                  </div>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li> -->

              <li>
                <a class="dropdown-item" href="#" @click.prevent="navigateToRoute('/admin/dashboard')">
                  <BIconDashSquare class="fa-fw me-2" />
                  Dashboard
                </a>
              </li>
              <!-- <li>
                <a class="dropdown-item">
                  <BIconHeart class="fa-fw me-2"/>
                  My Wishlist
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  <BIconGear class="fa-fw me-2"/>
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  <BIconInfoCircle class="fa-fw me-2"/>
                  Help Center
                </a>
              </li> -->
              <li>
                <a class="dropdown-item bg-danger-soft-hover" href="#" @click.prevent="navigateToRoute('/sign-in')">
                  <BIconPower class="fa-fw me-2" />
                  Sign Out
                </a>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <!-- Dark mode options -->
              <li>
                <div
                  class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                  <span>Mode:</span>
                  <button v-for="mode in themeModes" :key="mode.theme" type="button"
                    class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                    :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)"
                    v-b-tooltip.hover :title="mode.theme">
                    <component :is="mode.icon" />
                  </button>
                </div>
              </li>
            </ul>
          </CustomDropDown>
        </ul>
      </div>
    </b-container>
  </nav>
</template>

<script lang="ts" setup>
import avatar1 from '@/assets/images/avatar/01.jpg'

import {
  // BIconBookmarkCheck,
  // BIconGear,
  BIconList,
  BIconSearch,
  // BIconHeart,
  // BIconInfoCircle,
  BIconPower,
  // BIconBell,
  BIconCircleHalf,
  BIconSun,
  BIconMoonStars,
  BIconDashSquare,
  BIconPersonCircle
} from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CustomDropDown from '@/components/CustomDropDown.vue'
import { toSentenceCase } from '@/helpers/change-casting'
import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import LogoBox from "@/components/LogoBox.vue";
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { computed, ref, watch } from 'vue'

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSun,
    theme: 'light'
  },
  {
    icon: BIconMoonStars,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
]

const useLayout = useLayoutStore()

// type NotificationType = {
//   title: string
//   content?: string
//   time: string
// }

// const notificationData: NotificationType[] = [
//   {
//     title: 'New! Booking flights from New York ✈️',
//     content: 'Find the flexible ticket on flights around the world. Start searching today',
//     time: '05 Feb 2024'
//   },
//   {
//     title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
//     time: '24 Aug 2024'
//   }
// ]

const navigateToRoute = (route: string) => {
  router.push(route);
}

const useAuth = useAuthStore();
const userDetail = computed(() => useAuth.getUserData());

const userDetails = ref(userDetail.value || 'None');
watch(
  () => userDetail.value,
  (newValue: any, oldValue: any) => {
    if (newValue) {
      userDetails.value = newValue;
    } else {
      userDetails.value = 'None';
    }
  },
  { immediate: true }
);
</script>
<style>
.signIn-icon {
  font-size: 45px;
}

.dropdown-menu.dropdown-animation.show {
  top: 0% !important;
}

/* .dropdown-menu {
    transform: translate(-15px, 10px) !important;
} */
</style>