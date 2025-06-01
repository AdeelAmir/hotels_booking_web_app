<template>
  <b-card no-body class="shadow h-100">
    <b-card-header class="border-bottom d-flex justify-content-between align-items-center">
      <h5 class="card-header-title">Room Notifications</h5>
      <router-link to="" class="btn btn-link p-0 mb-0"> View all </router-link>
    </b-card-header>

    <b-card-body>
      <template v-for="(room, idx) in roomNotifications" :key="idx">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
            <div class="flex-shrink-0">
              <img :src="room.image" class="rounded h-60px" alt="" />
            </div>

            <div class="ms-sm-3 mt-2 mt-sm-0">
              <h6 class="mb-1">{{ room.name }}</h6>
              <ul class="nav nav-divider small">
                <li class="nav-item">{{ room.date }}</li>
                <li class="nav-item">
                  <span :class="room.status == 'booked' ? 'text-success' : 'text-danger'">{{
                    toSentenceCase(room.status)
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
          <router-link to="" class="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
            View
          </router-link>
        </div>
        <hr v-if="roomNotifications.length - 1 != idx" />
      </template>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { roomNotifications } from '@/views/admin/Dashboard/data'
import { toSentenceCase } from '@/helpers/change-casting'
</script>
