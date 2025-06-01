<template>
  <b-card no-body class="shadow h-100">
    <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-3">
      <h5 class="card-header-title">Upcoming Arrivals</h5>
      <router-link to="" class="btn btn-link p-0 mb-0"> View all </router-link>
    </b-card-header>

    <b-card-body class="p-3">
      <template v-for="(item, idx) in upcomingArrivals" :key="idx">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
            <div class="avatar avatar-md flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
            </div>

            <div class="ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-1">{{ item.name }}</h6>
              <ul class="nav nav-divider small">
                <li v-for="(info, idx) in item.hotelInfo" :key="idx" class="nav-item">
                  {{ info }}
                </li>
              </ul>
            </div>
          </div>

          <router-link to="" class="btn btn-sm btn-light mb-0 ms-3 px-2">
            <font-awesome-icon :icon="faChevronRight" class="fa-fw" />
          </router-link>
        </div>
        <hr v-if="upcomingArrivals.length - 1 != idx" />
      </template>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { upcomingArrivals } from '@/views/admin/Dashboard/data'
</script>
