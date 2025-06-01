<template>
  <UserLayout>
    <b-card no-body class="border">
      <b-card-header class="border-bottom">
        <h4 class="card-header-title">Delete Account</h4>
      </b-card-header>

      <b-card-body>
        <h6>Before you go...</h6>
        <ul>
          <li>Take a backup of your data <a href="#">Here</a></li>
          <li>If you delete your account, you will lose your all data.</li>
        </ul>
        <div class="form-check-md my-4">
          <b-form-checkbox>Yes, I'd like to delete my account</b-form-checkbox>
        </div>
        <a href="#" class="btn btn-success-soft btn-sm mb-2 mb-sm-0">Keep my account</a>
        <a href="#" class="btn btn-danger btn-sm mb-0 ms-2">Delete my account</a>
      </b-card-body>
    </b-card>
  </UserLayout>
</template>

<script lang="ts" setup>
import UserLayout from '@/layouts/UserLayout.vue'
</script>
