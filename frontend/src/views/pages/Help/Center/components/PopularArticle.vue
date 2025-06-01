<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center mb-4">
          <h2 class="mb-0">Popular Article</h2>
        </b-col>
      </b-row>

      <b-row>
        <div class="tiny-slider arrow-round arrow-blur arrow-hover">
          <CustomTinySlider id="tiny-slider-inner" :settings="articleSliderSettings">
            <div v-for="(article, idx) in articleData" :key="idx">
              <ArticleCard :article="article" />
            </div>
          </CustomTinySlider>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomTinySlider from '@/components/CustomTinySlider.vue'
import type { TinySliderSettings } from 'tiny-slider'
import { useLayoutStore } from '@/stores/layout'

import ArticleCard from '@/views/pages/Help/Center/components/ArticleCard.vue'
import { articleData } from '@/views/pages/Help/Center/data'

const useLayout = useLayoutStore()

const articleSliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  gutter: 30,
  controls: true,
  edgePadding: 2,
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 3,
  autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward',
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
}
</script>
