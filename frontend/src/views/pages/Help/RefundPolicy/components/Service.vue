<template>
  <section class="pt-4 pt-lg-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center mb-4">
          <h6>AGREEMENT</h6>
          <h1 class="fs-2 mb-0">Terms Of Service</h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="10" class="mx-auto">
          <div class="vstack gap-3">
            <b-card no-body class="bg-transparent p-0">
              <b-card-body class="px-0 pt-4">
                <b-tabs
                  nav-class="nav-bottom-line nav-responsive gap-2 gap-sm-4 mb-0 border-0 nav card-header-undefined border-bottom"
                >
                  <b-tab id="tab-1" class="ps-3 ps-sm-0">
                    <template #title>
                      <font-awesome-icon :icon="faHotel" class="fa-fw me-2" />
                      Hotel
                    </template>
                    <b-card-body class="px-0 pt-4">
                      <Step1 />
                    </b-card-body>
                  </b-tab>

                  <b-tab id="tab-2">
                    <template #title>
                      <font-awesome-icon :icon="faPlane" class="fa-fw me-2" />
                      Flight
                    </template>

                    <b-card-body class="px-0 pt-4">
                      <Step2 />
                    </b-card-body>
                  </b-tab>

                  <b-tab>
                    <template #title>
                      <font-awesome-icon :icon="faGlobeAmericas" class="fa-fw me-2" />
                      Tour
                    </template>
                    <b-card-body class="px-0 pt-4">
                      <Step1 />
                    </b-card-body>
                  </b-tab>

                  <b-tab>
                    <template #title>
                      <font-awesome-icon :icon="faCar" class="fa-fw me-2" />
                      Cabs
                    </template>
                    <b-card-body class="px-0 pt-4">
                      <Step2 />
                    </b-card-body>
                  </b-tab>
                </b-tabs>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faPlane, faHotel, faCar, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import Step1 from '@/views/pages/Help/TermsOfServices/components/Step1.vue'
import Step2 from '@/views/pages/Help/TermsOfServices/components/Step2.vue'
</script>
