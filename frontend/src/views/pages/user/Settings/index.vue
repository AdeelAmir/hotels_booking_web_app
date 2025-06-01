<template>
  <UserLayout>
    <div class="vstack gap-4">
      <NotificationSetting />

      <SecuritySetting />
    </div>
  </UserLayout>
</template>

<script lang="ts" setup>
import UserLayout from '@/layouts/UserLayout.vue'
import NotificationSetting from '@/views/user/Settings/components/NotifictionSetting.vue'
import SecuritySetting from '@/views/user/Settings/components/SecuritySetting.vue'
</script>
