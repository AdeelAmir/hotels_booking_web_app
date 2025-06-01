<template>
    <section>
      <!-- Top Loader -->
      <ContentLoader :height="'150'" :width="'100%'" class="content-loader-rect">
        <rect x="40" y="0" rx="4" ry="50" width="100%" height="150" />
      </ContentLoader>
  
      <!-- Text Loaders -->
      <div class="mt-10">
        <ContentLoader :height="'60'" :width="'60%'" class="content-loader-rect-small">
          <rect x="40" y="20" rx="4" ry="50" width="100%" height="50" />
        </ContentLoader>
        <ContentLoader :height="'20'" :width="'60%'" class="content-loader-rect-small">
          <rect x="40" y="5" rx="4" ry="50" width="100%" height="30" />
        </ContentLoader>
      </div>
  
      <!-- Main Section Loaders -->
      <div class="d-flex col-12 mt-10">
        <div class="col-md-6 col-sm-12">
          <ContentLoader :height="'400'" :width="'100%'" class="content-loader-rect-main">
            <rect x="10" y="20" rx="4" ry="10" width="100%" height="400" />
          </ContentLoader>
        </div>
        <div class="col-md-6 col-sm-12">
          <ContentLoader :height="'195'" :width="'100%'" class="content-loader-rect-main">
            <rect x="0" y="20" rx="4" ry="50" width="100%" height="195" />
          </ContentLoader>
          <ContentLoader :height="'195'" :width="'100%'" class="content-loader-rect-main">
            <rect x="0" y="5" rx="4" ry="50" width="100%" height="195" />
          </ContentLoader>
        </div>
      </div>
  
      <!-- Bottom Section Loaders -->
      <div>
        <ContentLoader :height="'90'" :width="'50%'" class="content-loader-rect-footer">
          <rect x="40" y="40" rx="4" ry="50" width="100%" height="90" />
        </ContentLoader>
        <div class="d-flex w-50 justify-content-around my-10">
          <ContentLoader :height="'60'" :width="'60px'" class="content-loader-rect-footer">
            <rect x="20" y="10" rx="4" ry="5" width="100%" height="60" />
          </ContentLoader>
          <ContentLoader :height="'60'" :width="'60px'" class="content-loader-rect-footer">
            <rect x="0" y="10" rx="4" ry="5" width="100%" height="60" />
          </ContentLoader>
          <ContentLoader :height="'60'" :width="'60px'" class="content-loader-rect-footer">
            <rect x="0" y="10" rx="4" ry="5" width="100%" height="60" />
          </ContentLoader>
          <ContentLoader :height="'60'" :width="'60px'" class="content-loader-rect-footer">
            <rect x="0" y="10" rx="4" ry="5" width="100%" height="60" />
          </ContentLoader>
        </div>
      </div>
  
      <!-- Footer Loader -->
      <ContentLoader :height="'400'" :width="'100%'" class="content-loader-rect-footer">
        <rect x="40" y="40" rx="4" ry="50" width="100%" height="400" />
      </ContentLoader>
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
