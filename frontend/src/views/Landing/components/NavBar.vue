<template>
  <header class="navbar-light mx-md-5">
    <nav class="navbar navbar-expand-md">
      <b-container fluid>

        <LogoBox/>

        <!-- Responsive navbar toggler -->
        <button
            class="navbar-toggler ms-auto p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="d-none d-sm-inline-block small">Menu</span>
        </button>

        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll ms-auto">
            <li class="nav-item"><a class="nav-link" href="#demos">Demos</a></li>
            <li class="nav-item">
              <a class="nav-link" href="https://support.webestica.com/" target="_blank">Support</a>
            </li>
            <li class="nav-item">
              <router-link to="/docs/index.html" class="nav-link" target="_blank">Documentation</router-link>
            </li>
          </ul>
        </div>

        <div class="ms-xl-auto">
          <a
              href="https://themes.getbootstrap.com/product/booking-multipurpose-booking-and-directory-theme/"
              target="_blank"
              class="btn btn-sm btn-primary mb-0 ms-3"
          >Buy now</a
          >
        </div>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LogoBox from "@/components/LogoBox.vue";
</script>
