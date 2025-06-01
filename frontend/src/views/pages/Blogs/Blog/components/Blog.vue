<template>
  <div>
    <section class="pt-4 pt-md-5">
      <b-container>
        <b-row class="mb-5">
          <b-col cols="12" class="text-center">
            <h1 class="display-1 mb-0">The Blog</h1>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col lg="6">
            <b-card no-body class="bg-transparent mb-4 mb-sm-0">
              <div class="position-relative">
                <img :src="blog10Img" class="card-img" alt="" />
                <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                  <a href="#" class="badge bg-dark">Adventure</a>
                </div>
              </div>
              <b-card-body class="px-3 pb-0">
                <span><BIconCalendar2Plus class="me-2" />April 28, 2022</span>

                <b-card-title tag="h5">
                  <router-link :to="{ name: 'pages.blog.detail' }"
                    >7 common mistakes everyone makes while traveling
                  </router-link>
                </b-card-title>
                <p class="mb-0">
                  Prospective agents should start broadly and then narrow their list down to.
                </p>

                <div class="d-flex justify-content-between align-items-center mt-2">
                  <h6 class="mb-0">By <a href="#">Joan Wallace</a></h6>
                  <router-link :to="{ name: 'pages.blog.detail' }" class="btn btn-link p-0 mb-0"
                    >Read more
                    <BIconArrowUpRight />
                  </router-link>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6" class="ps-lg-5">
            <div class="vstack gap-4">
              <b-card no-body class="bg-transparent" v-for="(blog, idx) in blogData" :key="idx">
                <b-row class="g-3 g-sm-4 align-items-sm-center">
                  <b-col cols="4">
                    <img :src="blog.avatar" class="card-img" alt="" />
                  </b-col>
                  <b-col cols="8">
                    <b-card-body class="p-0">
                      <b-card-title tag="h5" class="mb-sm-3">
                        <router-link :to="{ name: 'pages.blog.detail' }" class="stretched-link"
                          >{{ blog.heading }}
                        </router-link>
                      </b-card-title>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="small"
                          ><BIconCalendar2Plus class="me-2" />{{ blog.date }}</span
                        >
                        <router-link
                          :to="{ name: 'pages.blog.detail' }"
                          class="btn btn-link p-0 mb-0"
                          >Read more
                          <BIconArrowUpRight />
                        </router-link>
                      </div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
              <hr class="my-0" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BIconArrowUpRight, BIconCalendar2Plus } from 'bootstrap-icons-vue'
import { blog10Img, blogData } from '@/views/pages/data'
</script>
