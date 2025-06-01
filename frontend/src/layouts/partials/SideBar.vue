<template>
  <b-col lg="4" xl="3">
    <b-card no-body class="bg-light w-100">
      <div class="position-absolute top-0 end-0 p-3">
        <a href="#" class="text-primary-hover" v-b-tooltip="'Edit profile'">
          <BIconPencilSquare />
        </a>
      </div>

      <b-card-body class="p-3">
        <div class="text-center mb-3">
          <div class="avatar avatar-xl mb-2">
              <BIconPersonCircle v-if="userDetails.profilePicture == ''" class="signIn-icon" />
              <img v-else class="avatar-img rounded-circle border border-2 border-white" :src="userDetails.profilePicture" alt="avatar" />
          </div>
          <h6 class="mb-0">{{ userDetails.firstName + " " +  userDetails.lastName}}</h6>
          <a href="#" class="text-reset text-primary-hover small">{{ userDetails.email }}</a>
          <hr />
        </div>

        <ul class="nav nav-pills-primary-soft flex-column" id="nav-sidebar">
          <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: item.link?.name }"
              :class="{ active: currentRouteName === item.link?.name }"
            >
              <component :is="item.icon" class="fa-fw me-2" />
              {{ item.label }}
            </router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link text-danger bg-danger-soft-hover" href="#">
              <font-awesome-icon :icon="faSignOutAlt" class="fa-fw me-2" />
              Sign Out</a
            >
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import router from '@/router'

import { BIconPencilSquare, BIconPersonCircle } from 'bootstrap-icons-vue'
import avatar1Img from '@/assets/images/avatar/01.jpg'

import { getUserMenuItems } from '@/helpers/menu'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuthStore } from '@/stores/auth'
import { computed, ref, watch } from 'vue'

const currentRouteName = router.currentRoute.value.name

const menuItems = getUserMenuItems()

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
</script>
