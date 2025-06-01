<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0 items-center gap-1">
              <BIconBookmarkHeart class="fa-fw me-1" />
              Bookings
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-card no-body class="border">
              <b-card-header class="border-bottom">
                <h5 class="card-header-title">
                  Bookings<span class="badge bg-primary bg-opacity-10 text-primary ms-2"
                    >20 Rooms</span
                  >
                </h5>
              </b-card-header>
              <b-card-body class="pb-0">
                <b-row class="g-3 align-items-center justify-content-between mb-3">
                  <b-col md="8">
                    <b-form class="rounded position-relative">
                      <b-form-input
                        class="pe-5"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit"
                      >
                        <font-awesome-icon :icon="faSearch" />
                      </button>
                    </b-form>
                  </b-col>
                  <b-col md="3">
                    <b-form>
                      <SelectFormInput
                        id="sort-by"
                        v-model="selectedOption"
                        :options="sortOptions"
                        :choice-options="{ searchEnabled: false }"
                      />
                    </b-form>
                  </b-col>
                </b-row>
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                    <thead class="table-light">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">#</th>
                        <th scope="col" class="border-0">Name</th>
                        <th scope="col" class="border-0">Type</th>
                        <th scope="col" class="border-0">Date</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0">Payment</th>
                        <th scope="col" class="border-0 rounded-end">Action</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0">
                      <tr v-for="(booking, idx) in bookings" :key="idx">
                        <td>
                          <h6 class="mb-0">{{ booking.id }}</h6>
                        </td>
                        <td>
                          <h6 class="mb-0">
                            <router-link to="">{{ booking.name }}</router-link>
                          </h6>
                        </td>
                        <td>{{ booking.type }}</td>
                        <td>
                          <h6 class="mb-0 fw-light">{{ booking.date }}</h6>
                        </td>
                        <td>
                          <div
                            :class="
                              booking.status == 'booked'
                                ? 'bg-success'
                                : booking.status == 'available'
                                  ? 'bg-warning'
                                  : booking.status == 'reserved'
                                    ? 'bg-info'
                                    : 'bg-danger'
                            "
                            class="badge"
                          >
                            {{ toSentenceCase(booking.status) }}
                          </div>
                        </td>
                        <td>
                          <div
                            class="badge bg-opacity-10"
                            :class="
                              booking.payment == 'full-payment'
                                ? 'bg-success text-success'
                                : booking.payment == 'half-payment'
                                  ? 'bg-info text-info'
                                  : 'bg-warning text-warning'
                            "
                          >
                            {{ kebabToTitleCase(booking.payment) }}
                          </div>
                        </td>
                        <td>
                          <router-link to="" class="btn btn-sm btn-light mb-0"> View </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-card-body>
              <b-card-footer class="pt-0">
                <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
                  <p class="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>

                  <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
                    <ul class="pagination pagination-sm pagination-primary-soft mb-0">
                      <li class="page-item disabled">
                        <router-link class="page-link" to="#" tabindex="-1">Prev</router-link>
                      </li>
                      <li class="page-item">
                        <router-link class="page-link" to="#">1</router-link>
                      </li>
                      <li class="page-item active">
                        <router-link class="page-link" to="#">2</router-link>
                      </li>
                      <li class="page-item disabled">
                        <router-link class="page-link" to="#">..</router-link>
                      </li>
                      <li class="page-item">
                        <router-link class="page-link" to="#">15</router-link>
                      </li>
                      <li class="page-item">
                        <router-link class="page-link" to="#">Next</router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </b-card-footer>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BIconBookmarkHeart } from 'bootstrap-icons-vue'

import AgentLayout from '@/layouts/AgentLayout.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

import { bookings } from '@/views/agent/Bookings/data'

import { kebabToTitleCase, toSentenceCase } from '@/helpers/change-casting'

const selectedOption = ref('sort-by')
const sortOptions = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'free', text: 'Free' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' }
]
</script>
