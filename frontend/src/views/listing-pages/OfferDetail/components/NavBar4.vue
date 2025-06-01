<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl cursor-pointer ">
      <b-container>

        <LogoBox />

        <!-- Responsive category toggler -->
        <!-- <button class="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2" type="button"
          v-b-toggle="'navbar-category-collapse'">
          <BIconGrid3x3GapFill class="fa-fw" />
          <span class="d-none d-sm-inline-block small">Category</span>
        </button> -->

        <MobileMenu v-if="isMobileMenu" show-extra-pages />
        <AppMenu v-else show-extra-pages />

        <!-- <b-collapse class="navbar-collapse" id="navbar-category-collapse">
          <ul
              class="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0"
          >
            <li v-for="(item, idx) in bookingHomeMenuItems" :key="idx" class="nav-item">
              <router-link
                  :to="{ name: item.link?.name, params: item.link?.params }"
                  class="nav-link"
                  :class="{ active: currentRouteName === item.link?.name }"
              >
                <component :is="item.icon" class="me-1"/>
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </b-collapse> -->

        <b-nav class="flex-row align-items-center list-unstyled ms-xl-auto">
          <div class="main-icons d-none d-md-flex">
            <h6 class="icon_btn2">EUR</h6>
            <img class="flag" :src="logoFlag" alt="logo" />
            <!-- <BIconQuestionCircle class="fa-fw large-icon icon_btn" /> -->
          </div>
          <!-- Notification -->
          <!-- <CustomDropDown is="li" custom-class="nav-item ms-0">
            <a class="nav-notification w-10 p-0 mb-0 icon_btn" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside">
              <BIconBell class="fa-fw large-icon" />
            </a>
            <span class="notif-badge animation-blink icon_btn"></span>

            <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
              <b-card class="bg-transparent" body-class="p-0">
                <b-card-header class="bg-transparent d-flex justify-content-between align-items-center border-bottom">
                  <h6 class="m-0">
                    Notifications
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                  </h6>
                  <a class="small" href="#">Clear all</a>
                </b-card-header>

                <b-card-body class="p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <li v-for="(item, idx) in notificationData" :key="idx">
                      <a href="#" class="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                        :class="{ 'notif-unread': idx === 0 }">
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

          <!-- Responsive navbar toggler -->
          <button class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2" type="button" v-b-toggle="'navbar-collapse'">
            <span class="navbar-toggler-animation py-1 d-md-none d-sm-inline-block mr-4 ">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <!-- <span class="d-md-none d-sm-inline-block mr-4 ms-1 text-black">Menu</span> -->
          </button>

          <!-- <h6 class="icon_btn2 d-none d-lg-block">List Your Property</h6> -->

          <!-- Profile -->
          <CustomDropDown is="li" custom-class="nav-item ms-3">
            <!-- <a class="avatar avatar-sm p-0" href="#" role="button" data-bs-auto-close="outside" data-bs-display="static"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img class="avatar-img rounded-2" :src="avatar1" alt="avatar" />
            </a> -->
            <a class="pb-2" href="#" role="button" data-bs-auto-close="outside" data-bs-display="static"
              data-bs-toggle="dropdown" aria-expanded="false">
              <div class="d-flex align-items-center">
                <div v-if="userDetails === 'None'" class="gap-5" @click.prevent="SignOut('/sign-in')">
                  <!-- <img class="avatar-img rounded-circle shadow" :src="avatar1" alt="avatar" /> -->
                  <a href="#" class="btn btn-md mb-0 mr-2">Login</a>
                  <a href="#" class="btn btn-md mb-0">Sign Up</a>
                </div>

                <div v-else class="avatar me-1 mt-2">
                  <BIconPersonCircle v-if="displayDetails === 'None'" class="signIn-icon" />
                  <img v-else class="avatar-img rounded-circle shadow" :src="displayDetails?.profilePicture" alt="avatar" />
                </div>


                <div v-if="userDetails === 'None'">
                  <!-- <a class="h6 mt-md-2 mb-md-0 mt-sm-0 d-none d-md-block text-white" href="#" @click.prevent="SignOut('/sign-in')">Login Account</a> -->
                </div>
                <div v-else-if="userDetails === 'Admin'">
                  <a class="h6 mt-md-2 mb-md-0  mt-sm-0 d-none d-md-block text-white" href="#">Your Account</a>
                  <p class="small m-0 d-none d-md-block text-white">{{ userDetails.firstName + ' ' +
                    userDetails.lastName }}</p>
                </div>
                <div v-else>
                  <a class="h6 mt-md-2 mb-md-0  mt-sm-0 d-none d-md-block text-white" href="#">Your Account</a>
                  <p class="small m-0 d-none d-md-block text-white">{{ userDetails.firstName + ' ' +
                    userDetails.lastName }}</p>
                </div>
              </div>
            </a>

            <ul v-if="userDetails === 'None'">
            </ul>

            <ul v-else-if="userDetails.role === 'Admin'"
              class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <!-- <li class="px-2 pb-2">
                <div class="d-flex align-items-center">
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle shadow" :src="avatar1" alt="avatar" />
                  </div>
                  <div>
                    <a class="h6 mt-2 mt-sm-0" href="#">{{ userDetails.firstName + ' ' + userDetails.lastName }}</a>
                    <p class="small m-0">{{ userDetails.email }}</p>
                  </div>
                </div>
              </li> -->

              <!-- <li>
                <hr class="dropdown-divider" />
              </li> -->

              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/admin/dashboard')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item bg-danger-soft-hover" @click.prevent="SignOut('/sign-in')">
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

            <ul v-else class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <!-- <li class="px-2 pb-2">
                <div class="d-flex align-items-center">
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle shadow" :src="avatar1" alt="avatar" />
                  </div>
                  <div>
                    <a class="h6 mt-2 mt-sm-0" href="#">{{ userDetails.firstName + ' ' + userDetails.lastName }}</a>
                    <p class="small m-0">{{ userDetails.email }}</p>
                  </div>
                </div>
              </li> -->

              <!-- <li>
                <hr class="dropdown-divider" />
              </li> -->

              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/user/profile')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="navigateToRoute('/user/bookings')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  My Bookings
                </a>
              </li>
              <li>
                <a class="dropdown-item bg-danger-soft-hover" @click.prevent="SignOut('/sign-in')">
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
        </b-nav>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  BIconGrid3x3GapFill,
  BIconBell,
  BIconBookmarkCheck,
  BIconHeart,
  BIconGear,
  BIconInfoCircle,
  BIconPower,
  BIconSun,
  BIconMoonStars,
  BIconCircleHalf,
  BIconQuestionCircle
} from 'bootstrap-icons-vue'

import logoFlag from "@/assets/images/pngegg.png";
import avatar1 from '@/assets/images/avatar/01.jpg'

import { computed, onBeforeMount, onMounted, ref, watch } from 'vue'
import router from '@/router'

import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'

import { notificationData } from '@/views/hotels/Home/data'
import { bookingHomeMenuItems } from '@/assets/data/menu-items'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import AppMenu from '@/components/navbar/AppMenu.vue'
import { useAuthStore } from '@/stores/auth'
import CustomDropDown from '@/components/CustomDropDown.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import LogoBox from "@/components/LogoBox.vue";

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

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const useLayout = useLayoutStore()

const currentRouteName = router.currentRoute.value.name

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
});
const useAuth = useAuthStore();
const userDetail = computed(() => useAuth.getUserData());

const userDetails = ref(userDetail.value || 'None');
watch(
  () => userDetail.value,
  (newValue:any, oldValue:any) => {
    if (newValue) {
      userDetails.value = newValue; 
    } else {
      userDetails.value = 'None'; 
    }
  },
  { immediate: true }
);


const navigateToRoute = (route: string) => {
  router.push(route);
};

const SignOut = (route: string) => {
  useAuth.removeSession();
  router.push(route);
};
</script>

<style scoped>
.header-sticky.header-sticky-on {
  box-shadow: 1px 1px 10px rgba(95, 95, 95, 0.6);
}
.navbar{
  background-color: #3D3ED0;
  padding: 8px 0px;
}
.h6{
  color: white;
}

.btn{
  background-color: white;
  color: black;
}

.signIn-icon{
  font-size: 40px;
  color: white;
  margin-top: 7px;

}

.large-icon {
  color: white;
  font-size: 1.5rem;
}

.icon_btn {
  color: white;
  margin-right: 20px;
}

.main-icons {
  color: white;
  justify-content: center;
  align-items: center;
}

.icon_btn2 {
  /* display: contents; */
  margin-right: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  color: white;
}

.flag {
  width: 40px;
  margin-right: 20px;
}
</style>