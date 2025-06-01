<template>
  <b-row class="g-4 g-lg-5">
    <b-col lg="7" xl="8">
      <b-card no-body class="bg-transparent mb-4">
        <b-card-header class="bg-transparent border-bottom px-0 pt-0">
          <h4 class="mb-0">Description</h4>
        </b-card-header>
        <b-card-body class="px-0 pb-0">
          <p class="mb-3">
            Demesne far-hearted suppose venture excited see had has. Dependent on so extremely
            delivered by. Yet no jokes worse her why.
            <b>Bed one supposing breakfast day fulfilled off depending questions.</b> As it so
            contrasted oh estimating instrument. Size like body some one had. Are conduct viewing
            boy minutes warrant the expense? Tolerably behavior may admit daughters offending her
            ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard
            had. Do he it part more last in. We understand that theory is important to build a solid
            foundation, we understand that theory alone isn’t going to get the job done so that’s
            why this is packed with practical hands-on examples that you can follow step by step.
          </p>
          <p class="mb-0">
            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial
            in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does
            provide stronger is.
          </p>
        </b-card-body>
      </b-card>
      <b-card no-body class="bg-transparent">
        <b-card-header class="bg-transparent border-bottom px-0">
          <h4 class="mb-0">Image Gallery</h4>
        </b-card-header>
        <b-card-body class="px-0 pb-0">
          <b-row class="g-4">
            <b-col v-for="(image, idx) in galleryImages" md="4" :key="idx">
              <CustomGLightbox :link="image" className="w-100 h-100">
                <b-card no-body class="card-element-hover card-overlay-hover overflow-hidden">
                  <img :src="image" class="card-img" alt="" />
                  <div class="hover-element w-100 h-100">
                    <div
                      class="position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    >
                      <BIconFullscreen class="fs-6 text-white" />
                    </div>
                  </div>
                </b-card>
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="5" xl="4">
      <GetDirection />

      <WorkingHours />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import directory2 from '@/assets/images/category/directory/02.jpg'
import directory3 from '@/assets/images/category/directory/03.jpg'
import directory7 from '@/assets/images/category/directory/07.jpg'
import directory8 from '@/assets/images/category/directory/08.jpg'
import directory9 from '@/assets/images/category/directory/09.jpg'
import directory10 from '@/assets/images/category/directory/10.jpg'
import directory11 from '@/assets/images/category/directory/11.jpg'
import { BIconFullscreen } from 'bootstrap-icons-vue'

import CustomGLightbox from '@/components/CustomGLightbox.vue'
import GetDirection from '@/views/directories/Details/components/GetDirection.vue'
import WorkingHours from '@/views/directories/Details/components/WorkingHours.vue'

const galleryImages = [
  directory11,
  directory9,
  directory2,
  directory3,
  directory10,
  directory8,
  directory7
]
</script>
