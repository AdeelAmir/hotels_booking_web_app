<template>
  <section>
    <!-- Top Loader -->
    <div class="d-flex justify-content-between flex-wrap">
      <div class="d-flex flex-column">
        <ContentLoader :height="'250'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="250" />
        </ContentLoader>
        <ContentLoader :height="'40'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="40" />
        </ContentLoader>
        <ContentLoader :height="'30'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="30" />
        </ContentLoader>
        <ContentLoader :height="'70'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="70" />
        </ContentLoader>
      </div>
      <div class="d-flex flex-column">
        <ContentLoader :height="'250'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="250" />
        </ContentLoader>
        <ContentLoader :height="'40'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="40" />
        </ContentLoader>
        <ContentLoader :height="'30'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="30" />
        </ContentLoader>
        <ContentLoader :height="'70'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="70" />
        </ContentLoader>
      </div>
      <div class="d-flex flex-column">
        <ContentLoader :height="'250'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="250" />
        </ContentLoader>
        <ContentLoader :height="'40'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="40" />
        </ContentLoader>
        <ContentLoader :height="'30'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="30" />
        </ContentLoader>
        <ContentLoader :height="'70'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="70" />
        </ContentLoader>
      </div>
      <div class="d-flex flex-column">
        <ContentLoader :height="'250'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="250" />
        </ContentLoader>
        <ContentLoader :height="'40'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="40" />
        </ContentLoader>
        <ContentLoader :height="'30'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="30" />
        </ContentLoader>
        <ContentLoader :height="'70'" :width="'280px'">
          <rect x="2" y="10" rx="2" ry="5" width="280px" height="70" />
        </ContentLoader>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader';
</script>

<style scoped>
@media (max-width: 768px) {
  .content-loader-rect {
    height: 75px !important;
    width: 90% !important;
  }

  .content-loader-rect-small {
    height: 30px !important;
    width: 80% !important;
  }

  .content-loader-rect-main {
    height: 200px !important;
    width: 100% !important;
  }

  .content-loader-rect-footer {
    height: 300px !important;
    width: 100% !important;
  }
}
</style>
