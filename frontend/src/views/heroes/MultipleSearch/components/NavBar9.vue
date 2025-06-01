<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl">
      <b-container>

        <LogoBox/>

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
          <li class="nav-item align-items-center d-none d-sm-flex position-relative me-sm-3">
            <a href="#" class="icon-md btn btn-light mb-0 p-0 flex-shrink-0">
              <BIconCloudDownloadFill class="fs-6"/>
            </a>
            <div class="ms-2 d-none d-md-block">
              <h6 class="mb-0"><a href="#" class="stretched-link">Download the app</a></h6>
              <p class="small mb-0 text-body">Get exciting welcome offers</p>
            </div>
          </li>

          <CustomDropDown is="li" custom-class="nav-item">
            <a
                class="icon-md btn btn-light mb-0 p-0"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-auto-close="outside"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
              <BIconGlobe class="fs-6"/>
            </a>
            <ul
                class="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto mt-2"
                aria-labelledby="languageDropdown"
            >
              <li>
                <a class="dropdown-item me-4" href="#"
                ><img class="fa-fw me-2" :src="flaguk" alt=""/>English</a
                >
              </li>
              <li>
                <a class="dropdown-item me-4" href="#"
                ><img class="fa-fw me-2" :src="flagsp" alt=""/>Español</a
                >
              </li>
              <li>
                <a class="dropdown-item me-4" href="#"
                ><img class="fa-fw me-2" :src="flagfr" alt=""/>Français</a
                >
              </li>
              <li>
                <a class="dropdown-item me-4" href="#"
                ><img class="fa-fw me-2" :src="flaggr" alt=""/>Deutsch</a
                >
              </li>
            </ul>
          </CustomDropDown>

          <li class="nav-item ms-3">
            <router-link :to="{ name: 'auth.sign-up' }" class="btn btn-sm btn-primary mb-0">
              <font-awesome-icon :icon="faRightToBracket" class="me-1"/>
              Sign up
            </router-link>
          </li>
        </ul>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import flagfr from '@/assets/images/flags/fr.svg'
import flaggr from '@/assets/images/flags/gr.svg'
import flagsp from '@/assets/images/flags/sp.svg'
import flaguk from '@/assets/images/flags/uk.svg'

import {BIconGlobe, BIconCloudDownloadFill} from 'bootstrap-icons-vue'
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import CustomDropDown from '@/components/CustomDropDown.vue'
import LogoBox from "@/components/LogoBox.vue";

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})
</script>
