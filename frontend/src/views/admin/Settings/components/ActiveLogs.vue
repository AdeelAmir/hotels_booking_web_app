<template>
  <b-col lg="6">
    <div class="bg-light rounded-3 p-4 mb-3">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="h5">Activity Logs</h6>
          <p class="mb-1 mb-md-0">
            You can save your all activity logs including unusual activity detected.
          </p>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy9" defaultChecked />
        </div>
      </div>
    </div>
    <div class="bg-light rounded-3 p-4 mb-3">
      <div class="d-md-flex justify-content-between align-items-center flex-wrap">
        <div>
          <h6 class="h5">Change Password</h6>
          <p class="mb-1 mb-md-0">Set a unique password to protect your account.</p>
        </div>

        <div>
          <b-button variant="primary" class="mb-1"> Change Password </b-button>
          <p class="mb-0 small h6">Last change 10 Aug 2020</p>
        </div>
      </div>
    </div>

    <div class="bg-light rounded-3 p-4">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="h5">2 Step Verification</h6>
          <p class="mb-1 mb-md-0">
            Secure your account with 2 Step security. When it is activated you will need to enter
            not only your password, but also a special code using app. You can receive this code by
            in mobile app.
          </p>
        </div>
        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy13" defaultChecked />
        </div>
      </div>
    </div>

    <b-card no-body class="shadow mt-4">
      <b-card-header class="border-bottom">
        <h5 class="card-header-title">Active Logs</h5>
      </b-card-header>

      <b-card-body>
        <div class="table-responsive border-0">
          <table class="table align-middle p-4 mb-0 table-hover">
            <thead class="table-dark">
              <tr>
                <th scope="col" class="border-0 rounded-start">Browser</th>
                <th scope="col" class="border-0">IP</th>
                <th scope="col" class="border-0">Time</th>
                <th scope="col" class="border-0 rounded-end">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(active, idx) in activeLogs" :key="idx">
                <td>{{ active.browser }}</td>
                <td>{{ active.ip }}</td>
                <td>{{ active.time }}</td>
                <td>
                  <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script lang="ts" setup>
import { activeLogs } from '@/views/admin/Settings/data'
</script>

<style scoped>
.form-check {
  padding-left: 0 !important;
}
</style>
