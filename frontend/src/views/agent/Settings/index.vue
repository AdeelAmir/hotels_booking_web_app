<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0">
              <BIconGear class="fa-fw" />
              Settings
            </h1>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col cols="12">
            <b-tabs
              nav-class="nav-bottom-line nav-responsive border-0 nav-justified bg-light pb-0 px-2 px-lg-0 rounded-top"
            >
              <b-tab>
                <template #title>
                  <font-awesome-icon :icon="faCog" class="fa-fw me-1" />
                  Edit Profile
                </template>
                <EditProfile />
              </b-tab>
              <b-tab>
                <template #title>
                  <font-awesome-icon :icon="faBell" class="fa-fw me-1" />
                  Notification Settings
                </template>
                <NotificationSettings />
              </b-tab>
              <b-tab>
                <template #title>
                  <font-awesome-icon :icon="faUserCircle" class="fa-fw me-1" />
                  Account Settings
                </template>
                <AccountSettings />
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import AgentLayout from '@/layouts/AgentLayout.vue'
import EditProfile from '@/views/agent/Settings/components/EditProfile.vue'
import NotificationSettings from '@/views/agent/Settings/components/NotificationSettings.vue'
import AccountSettings from '@/views/agent/Settings/components/AccountSettings.vue'

import { BIconGear } from 'bootstrap-icons-vue'
import { faBell, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons'
</script>
