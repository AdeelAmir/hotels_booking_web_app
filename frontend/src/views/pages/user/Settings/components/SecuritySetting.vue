<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Security settings</h4>
    </b-card-header>

    <b-card-body>
      <b-form class="mb-3">
        <h6>Two-factor authentication</h6>
        <b-form-group label="Add a phone number to set up two-factor authentication">
          <b-form-input type="text" class="mb-2" placeholder="enter your mobile number" />
        </b-form-group>
        <b-button size="sm" variant="primary">Send Code</b-button>
      </b-form>

      <b-form>
        <h6>Active sessions</h6>
        <p class="mb-2">
          Selecting "Sign out" will sign you out from all devices except this one. This can take up
          to 10 minutes.
        </p>
        <b-button class="mb-0" size="sm" variant="danger">Sign Out</b-button>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts"></script>
