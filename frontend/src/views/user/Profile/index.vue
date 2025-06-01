<template>
  <UserLayout>
    <b-row>
      <div class="vstack gap-4">
        <!-- <ProfileProgress /> -->

        <PersonalInformation />

        <UpdateEmail />

        <UpdatePassword />
      </div>
    </b-row>
  </UserLayout>
</template>

<script lang="ts" setup>
import UserLayout from '@/layouts/UserLayout.vue'
import ProfileProgress from '@/views/user/Profile/components/ProfileProgress.vue'
import PersonalInformation from '@/views/user/Profile/components/PersonalInformation.vue'
import UpdateEmail from '@/views/user/Profile/components/UpdateEmail.vue'
import UpdatePassword from '@/views/user/Profile/components/UpdatePassword.vue'
</script>
