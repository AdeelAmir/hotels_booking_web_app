<!-- <template>
    <div>
      <CustomTinySlider :settings="roomSliderSettings">
        <div v-for="(slide, index) in images" :key="index">
          <img :src="slide" alt="card-slide" />
        </div>
      </CustomTinySlider>
    </div>
  </template>
  
  <script setup lang="ts">
  import CustomTinySlider from '@/components/CustomTinySlider.vue'
  import { useLayoutStore } from '@/stores/layout'
  import type { TinySliderSettings } from 'tiny-slider'
  import hotel04 from '@/assets/images/category/hotel/4by3/04.jpg'
  import hotel02 from '@/assets/images/category/hotel/4by3/02.jpg'
  import hotel03 from '@/assets/images/category/hotel/4by3/03.jpg'
  import hotel01 from '@/assets/images/category/hotel/4by3/01.jpg'

  const images = [hotel04, hotel02, hotel03, hotel01]
  const useLayout = useLayoutStore()
  const roomSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
    items: 1,
    nav: false,
    autoplayDirection: useLayout.dir === 'ltr' ? 'forward' : 'backward'
  }
  </script> -->