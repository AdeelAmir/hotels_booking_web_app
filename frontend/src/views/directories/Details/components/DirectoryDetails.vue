<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card no-body class="bg-light p-0 pb-0">
            <b-card-body class="d-flex justify-content-between flex-wrap">
              <div>
                <div class="badge text-bg-dark me-1">
                  <font-awesome-icon :icon="faSpa" class="fa-fw text-warning" />
                  Spa
                </div>
                <div class="badge text-bg-dark me-1">
                  <BIconScissors class="fa-fw text-warning"></BIconScissors>
                  Salon
                </div>
                <div class="badge text-bg-dark">
                  <font-awesome-icon :icon="faStar" class="fa-fw text-warning"></font-awesome-icon>
                  4.5
                </div>

                <h1 class="h3 mt-2 mb-1">Emperor Salon & Spa</h1>
                <p class="mb-2 mb-sm-0">
                  <BIconGeoAlt class="me-1 text-primary"></BIconGeoAlt>
                  5855 W Century Blvd, Los Angeles - 90045
                </p>
              </div>

              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <button class="btn btn-sm btn-white px-2">
                    <font-awesome-icon :icon="faHeart" class="fa-fw" />
                  </button>
                </li>

                <b-dropdown
                  menu-class="min-w-auto shadow rounded"
                  toggle-class="m-0 p-0"
                  no-caret
                  variant="link"
                  class="list-inline-item"
                >
                  <template #button-content>
                    <b-button size="sm" class="btn-white px-2" role="button" id="dropdownShare">
                      <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                    </b-button>
                  </template>

                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                    Twitter
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                    Facebook
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faLinkedin" class="me-2" />
                    LinkedIn
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faCopy" class="me-2" />
                    Copy link
                  </b-dropdown-item>
                </b-dropdown>

                <li class="list-inline-item">
                  <button class="btn btn-sm btn-white px-2">
                    <BIconExclamationTriangleFill class="fa-fw" />
                  </button>
                </li>
              </ul>
            </b-card-body>

            <b-card-footer class="bg-transparent border-top py-0">
              <ul class="nav nav-tabs nav-bottom-line nav-responsive border-0" role="tablist">
                <li class="nav-item">
                  <router-link
                    class="nav-link mb-0"
                    :class="show === 'about' && 'active'"
                    @click="show = 'about'"
                    data-bs-toggle="tab"
                    to="#"
                    >About
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link mb-0"
                    :class="show === 'deals' && 'active'"
                    @click="show = 'deals'"
                    data-bs-toggle="tab"
                    to="#"
                    >Deals
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link mb-0"
                    :class="show === 'services' && 'active'"
                    @click="show = 'services'"
                    data-bs-toggle="tab"
                    to="#"
                    >Services
                  </router-link>
                </li>
              </ul>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="pt-0">
    <b-container>
      <div class="tab-content mb-0" id="tour-pills-tabContent">
        <div
          class="tab-pane fade"
          :class="show === 'about' && 'show active'"
          id="tab-1"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          <About />
        </div>

        <div
          class="tab-pane fade"
          :class="show === 'deals' && 'show active'"
          id="tab-2"
          role="tabpanel"
          aria-labelledby="tab-2"
        >
          <Deals />
        </div>

        <div
          class="tab-pane fade"
          :class="show === 'services' && 'show active'"
          id="tab-3"
          role="tabpanel"
          aria-labelledby="tab-3"
        >
          <Services />
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faHeart, faShareAlt, faSpa, faStar } from '@fortawesome/free-solid-svg-icons'
import { BIconExclamationTriangleFill, BIconGeoAlt, BIconScissors } from 'bootstrap-icons-vue'
import About from '@/views/directories/Details/components/About.vue'
import Deals from '@/views/directories/Details/components/Deals.vue'
import Services from '@/views/directories/Details/components/Services.vue'

const show = ref('about')
</script>
