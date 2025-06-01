<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Active Logs</h5>
    </b-card-header>
    <b-card-body>
      <div class="table-responsive border-0">
        <table class="table align-middle p-4 mb-0 table-hover">
          <thead class="table-light">
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
      <form class="mt-4">
        <h6 class="mb-0">Active sessions</h6>
        <p class="mb-2">
          Selecting "Sign out" will sign you out from all devices except this one. This can take up
          to 10 minutes.
        </p>
        <b-button variant="danger" size="sm" class="mb-0"> Sign Out of all devices </b-button>
      </form>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { activeLogs } from '@/views/agent/Settings/data'
</script>
