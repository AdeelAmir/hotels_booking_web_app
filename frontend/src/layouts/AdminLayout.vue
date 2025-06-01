<template>
  <main>
    <nav class="navbar sidebar navbar-expand-xl navbar-light">
      <div class="d-flex align-items-center">
        <AdminLogoBox />
      </div>

      <div class="flex-row custom-scrollbar h-100" tabIndex="{-1}">
        <div class="sidebar-content d-flex flex-column pt-4">
          <AdminSideBar />
        </div>
      </div>

      <b-offcanvas id="offcanvasSidebar" placement="start" no-header class="custom-scrollbar">
        <AdminSideBar id="sidebar-sm" />
      </b-offcanvas>
    </nav>
    <div class="page-content">
      <AdminNavBar id="sidebar-xl" />

      <div class="page-content-wrapper p-xxl-4">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import AdminSideBar from '@/layouts/partials/AdminSideBar.vue'
import AdminNavBar from '@/layouts/partials/AdminNavBar.vue'
import AdminLogoBox from '@/components/AdminLogoBox.vue';
</script>
