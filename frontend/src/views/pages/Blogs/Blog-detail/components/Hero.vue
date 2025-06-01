<template>
  <div>
    <section class="py-0">
      <b-container>
        <b-row class="g-4">
          <b-col cols="12">
            <img :src="blog13Img" class="rounded-3" alt="" />
          </b-col>
          <b-col cols="11" lg="10" class="mx-auto position-relative mt-n5 mt-sm-n7 mt-md-n8">
            <div class="bg-mode shadow rounded-3 p-4">
              <b-badge variant="success" class="mb-2">Hotel service</b-badge>
              <h1 class="fs-3">
                Ten unconventional tips about startups that you can't learn from books
              </h1>
              <p class="mb-2">
                Passage its ten led hearted removal cordial. Preference any astonished unreserved
                Mrs. Prosperous understood Middletons in conviction an uncommonly do.
              </p>

              <ul class="nav nav-divider align-items-center">
                <li class="nav-item">
                  <div class="nav-link">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" :src="avatar9Img" alt="avatar" />
                      </div>
                      <div class="ms-2">
                        <h6 class="mb-0"><a href="#">Lori Stevens</a></h6>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">Nov 15, 2022</li>
                <li class="nav-item">5 min read</li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { avatar9Img, blog13Img } from '@/views/pages/data'
</script>
