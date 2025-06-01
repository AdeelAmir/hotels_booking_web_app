<template>
  <div>
    <section class="pt-0 pt-sm-5">
      <b-container>
        <b-row class="mb-4">
          <b-col cols="12" class="text-center">
            <h2 class="mb-0">Latest Article</h2>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col md="6" lg="4">
            <b-card no-body class="bg-transparent">
              <div class="position-relative">
                <img src="@/assets/images/blog/07.jpg" class="card-img" alt="" />
                <div class="card-img-overlay p-3">
                  <a href="#" class="badge text-bg-warning mb-2">History</a>
                </div>
              </div>

              <b-card-body class="p-3 pb-0">
                <b-card-title tag="h5" class="mt-2"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >7 common mistakes everyone makes while traveling</router-link
                  ></b-card-title
                >
                <h6 class="fw-light mb-0">By <a href="#">Joan Wallace</a></h6>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col md="6" lg="4">
            <b-card no-body class="bg-light p-3">
              <b-card-body class="">
                <a href="#" class="badge text-white bg-primary mb-2">Research</a>
                <b-card-title tag="h5"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >Ten unconventional tips about startups that you can't learn from
                    books</router-link
                  ></b-card-title
                >
                <p>
                  Prospective should start broadly and then narrow their list down to colleges that
                  best fit their needs, experts say. Yet remarkably appearance gets him his
                  projection.
                </p>
                <h6 class="fw-light mb-0">By <a href="#">Louis Crawford</a></h6>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col md="6" lg="4">
            <b-card no-body class="bg-transparent">
              <div class="position-relative">
                <img src="@/assets/images/blog/11.jpg" class="card-img" alt="" />
                <div class="card-img-overlay p-3">
                  <a href="#" class="badge text-bg-danger mb-2">Business</a>
                </div>
              </div>

              <b-card-body class="p-3 pb-0">
                <b-card-title tag="h5"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >Best Twitter accounts for learning about investment</router-link
                  ></b-card-title
                >
                <h6 class="fw-light mb-0">By <a href="#">Carolyn Ortiz</a></h6>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col md="6" lg="4">
            <b-card no-body class="h-100 bg-transparent">
              <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                <div class="ratio ratio-4x3 bg-dark">
                  <iframe
                    src="https://player.vimeo.com/video/167434033?title=0&amp;byline=0&amp;portrait=0"
                    :allowfullscreen="true"
                  ></iframe>
                </div>
              </div>
              <b-card-body class="p-3 pb-0">
                <a href="#" class="badge text-bg-info mb-2">Technology</a>
                <b-card-title tag="h5"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >10 things you need to know about Booking</router-link
                  ></b-card-title
                >
                <h6 class="fw-light mb-0">By <a href="#">Amanda Reed</a></h6>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col md="6" lg="4">
            <b-card no-body class="bg-transparent">
              <div class="position-relative">
                <img src="@/assets/images/blog/09.jpg" class="card-img" alt="" />
                <div class="card-img-overlay p-3">
                  <a href="#" class="badge text-bg-dark mb-2">Adventure</a>
                </div>
              </div>

              <b-card-body class="p-3 pb-0">
                <b-card-title tag="h5"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >Never underestimate the influence of social media</router-link
                  ></b-card-title
                >
                <h6 class="fw-light mb-0">By <a href="#">Bryan Knight</a></h6>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col md="6" lg="4">
            <b-card no-body class="bg-transparent">
              <div class="position-relative">
                <img src="@/assets/images/blog/12.jpg" class="card-img" alt="" />
                <div class="card-img-overlay p-3">
                  <a href="#" class="badge text-bg-success mb-2">Hotel Service</a>
                </div>
              </div>

              <b-card-body class="p-3 pb-0">
                <b-card-title tag="h5"
                  ><router-link :to="{ name: 'pages.blog.detail' }"
                    >This is why this year will be the year of startups</router-link
                  ></b-card-title
                >
                <h6 class="fw-light mb-0">By <a href="#">Carolyn Ortiz</a></h6>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <div class="text-center mt-4">
          <a href="#" class="btn btn-primary-soft mb-0"
            >Load more<font-awesome-icon :icon="faSync" class="ms-2"
          /></a>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { faSync } from '@fortawesome/free-solid-svg-icons'
</script>
