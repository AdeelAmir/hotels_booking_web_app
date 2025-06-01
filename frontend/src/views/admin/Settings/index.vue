<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <h1 class="h3 mb-0">Settings</h1>
      </b-col>
    </b-row>

    <b-row class="g-4">
      <b-col lg="12">
        <ProfileSettings />
      </b-col>

    </b-row>
  </AdminLayout>
</template>

<script lang="ts" setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import ProfileSettings from '@/views/admin/Settings/components/ProfileSettings.vue'
import EmailNotification from '@/views/admin/Settings/components/EmailNotification.vue'
import GeneralPermission from '@/views/admin/Settings/components/GeneralPermission.vue'
import ModeSettings from '@/views/admin/Settings/components/ModeSettings.vue'
import WebsiteSettings from '@/views/admin/Settings/components/WebsiteSettings.vue'
import ActiveLogs from '@/views/admin/Settings/components/ActiveLogs.vue'

</script>
