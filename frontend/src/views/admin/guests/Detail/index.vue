<template>
  <AdminLayout>
    <b-card no-body class="shadow">
      <b-card-header class="border-bottom d-sm-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center flex-shrink-0">
          <div class="avatar avatar-lg">
            <img class="avatar-img rounded-circle" :src="avatar9" alt="avatar" />
          </div>
          <div class="ms-3">
            <h5 class="mb-0">Lori Stevens</h5>
          </div>
        </div>
        <div class="d-block d-lg-flex gap-lg-5 flex-wrap mt-3 mt-lg-0">
          <h6 class="mb-2 mb-lg-0 items-center gap-1">
            <BIconEnvelopeFill class="fa-fw" />
            Email id:
            <router-link to="" class="fw-normal"> hello@gmail.com </router-link>
          </h6>
          <h6 class="mb-0 items-center gap-1">
            <BIconHeadset class="fa-fw" />
            Contact no:
            <router-link to="" class="fw-normal"> +1(404) 586-854 </router-link>
          </h6>
        </div>
      </b-card-header>
      <b-card-body>
        <h5 class="mb-3">Booking History</h5>
        <div class="bg-light rounded p-3 d-none d-lg-block">
          <b-row class="row-cols-6 justify-content-between g-4">
            <b-col>
              <h6 class="mb-0">Room Name</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Bed type</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Room Floor</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Book Date</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Action</h6>
            </b-col>
          </b-row>
        </div>
        <b-row
          v-for="(room, idx) in roomDetailList"
          :key="idx"
          class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-2 g-sm-4 align-items-md-center justify-content-between border-bottom px-2 py-4"
        >
          <b-col>
            <small class="d-block d-lg-none">Room name:</small>
            <div class="d-flex align-items-center">
              <div class="w-80px flex-shrink-0">
                <img :src="room.image" class="rounded" alt="" />
              </div>
              <h6 class="mb-0 ms-2">{{ room.name }}</h6>
            </div>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Bed type:</small>
            <h6 class="mb-0 fw-normal">{{ room.bedType }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Room Floor:</small>
            <h6 class="mb-0 fw-normal">{{ room.roomFloor }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Book date:</small>
            <h6 class="text-success mb-0">{{ room.date }}</h6>
          </b-col>
          <b-col>
            <router-link to="" class="btn btn-sm btn-light mb-0">View </router-link>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </AdminLayout>
</template>

<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import avatar9 from '@/assets/images/avatar/09.jpg'
import { BIconEnvelopeFill, BIconHeadset } from 'bootstrap-icons-vue'
import { roomDetailList } from '@/views/admin/Users/Detail/data'
</script>
