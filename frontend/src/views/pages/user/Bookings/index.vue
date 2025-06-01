<template>
  <UserLayout>
    <div>
      <b-card no-body class="border bg-transparent">
        <b-card-header class="bg-transparent border-bottom">
          <h4 class="card-header-title">My Bookings</h4>
        </b-card-header>

        <Tabs />
      </b-card>
    </div>
  </UserLayout>
</template>

<script lang="ts" setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Tabs from '@/views/user/Bookings/components/Tabs.vue'
</script>
