<template>
  <b-row class="g-4 pt-4">
    <b-col cols="12">
      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="card-header-title">Security settings</h5>
        </b-card-header>
        <b-card-body>
          <b-form class="mb-3">
            <h6>Two-factor authentication</h6>
            <b-form-group label="Add a phone number to set up two-factor authentication">
              <b-form-input type="text" class="mb-2" placeholder="Enter your mobile number" />
            </b-form-group>
            <b-button size="sm" variant="primary" class="btn btn-sm btn-primary mb-0"
              >Send Code</b-button
            >
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col lg="6">
      <LinkedAccount />
    </b-col>

    <b-col lg="6">
      <SocialMediaProfile />
    </b-col>

    <b-col cols="12">
      <ActiveLogs />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import LinkedAccount from '@/views/agent/Settings/components/LinkedAccount.vue'
import SocialMediaProfile from '@/views/agent/Settings/components/SocialMediaProfile.vue'
import ActiveLogs from '@/views/agent/Settings/components/ActiveLogs.vue'
</script>
