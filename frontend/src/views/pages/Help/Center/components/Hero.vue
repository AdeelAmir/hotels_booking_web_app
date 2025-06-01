<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card
            no-body
            class="bg-primary justify-content-center text-center px-4 px-sm-5 pt-6 pt-md-8 pb-8"
            :style="{ backgroundImage: `url('${img}')` }"
            style="
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <h1 class="fs-2 text-white mb-4">How Can We Help You?</h1>
            <b-form class="col-md-6 bg-body rounded mx-auto p-2 mb-3">
              <b-input-group>
                <b-form-input class="border-0 me-1" type="text" placeholder="Search question..." />
                <b-button variant="dark" class="rounded mb-0">Search</b-button>
              </b-input-group>
            </b-form>

            <b-row class="align-items-center mt-4 mb-2">
              <b-col md="9" class="mx-auto">
                <h6 class="text-white mb-3">Popular questions</h6>
                <div class="list-group hstack gap-3 justify-content-center flex-wrap mb-0">
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How can we help?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How to upload data to the system?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    Installation Guide?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How to view expired tickets?
                  </router-link>
                  <a class="btn btn-link text-white p-0 mb-0" href="#!">View all question</a>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="g-4 mt-n8">
        <b-col cols="10" lg="11" xl="10" class="mx-auto">
          <b-row class="g-4">
            <b-col lg="4">
              <b-card no-body class="shadow h-100">
                <b-card-header class="d-flex align-items-center pb-0">
                  <BIconEmojiSmile class="fs-2 text-success me-2" />
                  <b-card-title tag="h5" class="mb-0">Get Started</b-card-title>
                </b-card-header>

                <b-card-body class="pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Gulp and Customization
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Color Scheme and Logo Settings
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Dark mode, RTL Version, and Lazy Load
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Updates and Support
                      </router-link>
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4">
              <b-card no-body class="shadow h-100">
                <b-card-header class="border-0 d-flex align-items-center pb-0">
                  <BIconLayers class="fs-2 text-warning me-2" />
                  <b-card-title tag="h5" class="mb-0">Account Setup:</b-card-title>
                </b-card-header>
                <b-card-body class="pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Connecting to your Account
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Edit your profile information
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Connecting to other Social Media Accounts
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Adding your profile picture
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Describing your store
                      </router-link>
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4">
              <b-card no-body class="shadow h-100">
                <b-card-header class="border-0 d-flex align-items-center pb-0">
                  <BIconInfoCircle class="fs-2 text-info me-2" />
                  <b-card-title tag="h5" class="mb-0">Other Topics</b-card-title>
                </b-card-header>

                <b-card-body class="pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Security &amp; Privacy
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Author, Publisher &amp; Admin Guides
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Pricing plans
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Sales Tax &amp; Regulatory Fees
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link d-flex" :to="{ name: 'pages.help.detail' }">
                        <font-awesome-icon :icon="faAngleRight" class="text-primary pt-1 me-2" />
                        Promotions &amp; Deals
                      </router-link>
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import img from '@/assets/images/element/bg-pattern.png'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { BIconEmojiSmile, BIconInfoCircle, BIconLayers } from 'bootstrap-icons-vue'
</script>
