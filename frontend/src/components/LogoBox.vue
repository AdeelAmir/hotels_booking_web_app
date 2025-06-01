<template>
  <router-link :to="{ name: 'hotels.home' }" class="navbar-brand">
    <template v-if="!onlyLight">
      <div class="d-flex align-items-center justify-content-center logoBox">
        <img class="logo" :class="customClass" :src="logo" alt="logo" />
        <!-- <h5 class="ml-2 mt-1 d-none d-md-block text-white mb-3">Your Room, Your Price</h5> -->
      </div>
      <img class="dark-mode-item navbar-brand-item d-sm-block d-md-none" :class="customClass" :src="logoLight" alt="logo" />
    </template>

    <img v-if="onlyLight" class="navbar-brand-item d-sm-block d-md-none" :src="logoLight" alt="logo" />
  </router-link>
</template>

<script setup lang="ts">
import logo from "@/assets/images/final logo.png";
// import logo from "@/assets/images/logo.png";
import logoLight from "@/assets/images/logo-light.svg";

defineProps({
  customClass: String,
  onlyLight: {
    type: Boolean,
    default: false
  },
})
</script>

<style>
/* Default styles for larger screens */
.logoBox {
  position: absolute;
  top: 20px;
}

.logo {
  height: 100px;
}

/* Mobile-specific styles */
@media (max-width: 767px) {
  .logoBox {
    /* margin-left: 20px; */
    /* position: absolute; */
    top: 21px; /* Or adjust as needed */
  }
  
  .logo {
    height: 90px;
  }
}
</style>