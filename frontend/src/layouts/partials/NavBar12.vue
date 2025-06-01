<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl cursor-pointer ">
      <b-container>
        <LogoBox />
        <MobileMenu v-if="isMobileMenu" show-extra-pages />
        <AppMenu v-else show-extra-pages />
        <b-nav class="flex-row align-items-center list-unstyled ms-xl-auto">
          <div class="d-md-flex d-none">
            <b-dropdown id="dropdown-1" text="" v-model="isDropdownOpen" ref="dropdown" :toggle-class="'d-none'">
              <b-dropdown-item v-for="(country, index) in famousCountries" :key="index" @click="selectCountry(country)"
                class="custom-dropdown-menu">
                <img :src="country.flag" alt="flag" class="flag me-2" />
                <span>{{ country.name }} - {{ country.currencySymbol }}</span>
              </b-dropdown-item>
            </b-dropdown>

            <div class="main-icons mr-md-4 d-md-flex align-items-center">
              <h6 class="icon_btn2" @click="toggleDropdown" ref="flagDropdown">{{ selectedCurrency }}</h6>
              <img class="flag me-2" :src="selectedFlag || 'path_to_default_flag_image'" alt="Selected Flag"
                @click="toggleDropdown" ref="flagDropdown" />
            </div>
          </div>
          <!-- Responsive navbar toggler -->
          <button class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2" type="button" v-b-toggle="'navbar-collapse'">
            <span class="navbar-toggler-animation py-1 d-md-none d-sm-inline-block mr-4 ">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <!-- Profile -->
          <CustomDropDown is="li" custom-class="nav-item ms-3">
            <a class="pb-2" href="#" role="button" data-bs-auto-close="outside" data-bs-display="static"
              data-bs-toggle="dropdown" aria-expanded="false">
              <div class="d-flex align-items-center">
                <div v-if="userDetails === 'None'" class="gap-5">
                  <a href="#" class="btn btn-md mb-0 mr-2">
                    <BIconList class="icon mr-3" />
                    <BIconPersonCircle class="icon" />
                  </a>
                </div>
                <div v-else class="avatar me-1 mt-2">
                  <BIconPersonCircle v-if="userDetails === 'None'" class="signIn-icon" />
                  <img v-else class="avatar-img rounded-circle shadow" :src="userDetails.profilePicture" alt="avatar" />
                </div>
                <div v-if="userDetails === 'None'">
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

            <ul v-if="userDetails === 'None'"
              class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
              <li>
                <a class="dropdown-item" @click.prevent="SignOut('/sign-up')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  Sign Up
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="SignOut('/sign-in')">
                  <BIconBookmarkCheck class="fa-fw me-2" />
                  Sign In
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

            <ul v-else-if="userDetails.role === 'Admin'"
              class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 cursor-pointer"
              aria-labelledby="profileDropdown">
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
  BIconBookmarkCheck,
  BIconPower,
  BIconSun,
  BIconMoonStars,
  BIconCircleHalf,
  BIconList,
  BIconPersonCircle,
} from 'bootstrap-icons-vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import { computed, onMounted, ref, watch } from 'vue'
import router from '@/router'
import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import AppMenu from '@/components/navbar/AppMenu.vue'
import { useAuthStore, useCurrencyCode } from '@/stores/auth'
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

const useCurrency = useCurrencyCode()
const currencyData = useCurrency.getData()
const useLayout = useLayoutStore()
const isDropdownOpen = ref(false);
const dropdown = ref();
const selectedCurrency = ref(currencyData?.symbol || '$');
const selectedFlag = ref(currencyData?.flag || 'https://flagcdn.com/w320/us.png');


const famousCountries = ref([
  { name: 'United States', currency_code: 'USD', currencySymbol: '$', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'United Kingdom', currency_code: 'GBP', currencySymbol: '£', flag: 'https://flagcdn.com/w320/gb.png' },
  { name: 'European Union', currency_code: 'EUR', currencySymbol: '€', flag: 'https://flagcdn.com/w320/eu.png' },
  { name: 'Canada', currency_code: 'CAD', currencySymbol: 'C$', flag: 'https://flagcdn.com/w320/ca.png' },
  { name: 'Australia', currency_code: 'AUD', currencySymbol: 'A$', flag: 'https://flagcdn.com/w320/au.png' },
]);

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
console.log(userDetails);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectedCountry = ref(famousCountries.value[0].currency_code);
const selectCountry = (country: { name: string; currency_code: string; currencySymbol: string; flag: string }) => {
  selectedCurrency.value = country.currencySymbol;
  selectedFlag.value = country.flag;
  selectedCountry.value = country.currency_code;
  isDropdownOpen.value = false;
  let currencyData = {
    symbol: selectedCurrency.value,
    flag: selectedFlag.value,
    code: selectedCountry.value,
  }
  console.log('Currency : ' + currencyData);
  useCurrency.saveSession(currencyData);
};

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

.mainFilter {
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: 1060;
  width: 50%;
  margin: auto;
  padding: 4px;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 5px #cfcfcf;
}

.mainNav {
  position: relative;
  max-width: 95% !important;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
}

.navbar {
  background-color: #3D3ED0;
  padding: 8px 0px;
}

.flag {
  width: 24px;
  height: 16px;
  margin-right: 8px;
}

.h6 {
  color: white;
}

.btn {
  background-color: white;
  color: black;
  border-radius: 20px
}

.large-icon {
  color: white;
  font-size: 1.5rem;
}

.btn-group.btn {
  margin-bottom: 0px !important;
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

.icon {
  font-size: 26px
}
.signIn-icon{
  font-size: 40px;
  color: white;
  margin-top: 7px;

}
.icon_btn2 {
  /* display: contents; */
  margin-right: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 22px;
  color: white;
}

.flag {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.autocomplete-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 0.25rem;
  background-color: #fff;
  z-index: 1000;
  padding: 8px;
  box-shadow: 1px 2px 20px rgba(61, 61, 61, 0.3);
}

.autocomplete-item {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.autocomplete-item i {
  margin-right: 8px;
}

.autocomplete-item small {
  color: #9b9b9b;
  font: bold;
}

.autocomplete-item:hover {
  background-color: rgba(81, 67, 217, 0.15);
}

.mainDropDown {
  position: relative;
}

.b-dropdown.show .dropdown-menu {
  display: block;
}

.dropdown-menu.dropdown-animation.show {
  top: 0% !important;
}

@media (max-width: 639px) {
  .dropdown-menu.dropdown-animation.show {
    top: -20% !important;
    right: -10px !important;
  }
}
</style>