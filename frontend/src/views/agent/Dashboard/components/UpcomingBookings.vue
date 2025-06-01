<template>
  <b-card no-body class="border rounded-3">
    <b-card-header class="border-bottom">
      <div class="d-sm-flex justify-content-between align-items-center">
        <h5 class="mb-2 mb-sm-0">Upcoming Bookings</h5>
        <router-link to="" class="btn btn-sm btn-primary mb-0"> View All </router-link>
      </div>
    </b-card-header>
    <b-card-body class="pb-0">
      <b-row class="g-3 align-items-center justify-content-between mb-3">
        <b-col md="8">
          <b-form class="rounded position-relative">
            <b-form-input class="pe-5" type="search" placeholder="Search" aria-label="Search" />
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
              <th scope="col" class="border-0">status</th>
              <th scope="col" class="border-0">Payment</th>
              <th scope="col" class="border-0 rounded-end">Action</th>
            </tr>
          </thead>
          <tbody class="border-top-0">
            <tr v-for="(booking, idx) in upcomingBookings" :key="idx">
              <td>
                <h6 class="mb-0">{{ booking.id }}</h6>
              </td>
              <td>
                <h6 class="mb-0">
                  <router-link to="">{{ booking.name }}</router-link>
                </h6>
              </td>
              <td>{{ booking.type }}</td>
              <td>{{ booking.date }}</td>
              <td>
                <div
                  class="badge"
                  :class="booking.status == 'reserved' ? 'text-bg-info' : 'text-bg-success'"
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import SelectFormInput from '@/components/SelectFormInput.vue'

import { upcomingBookings } from '@/views/agent/Dashboard/data'
import { kebabToTitleCase, toSentenceCase } from '@/helpers/change-casting'

const selectedOption = ref('sort-by')
const sortOptions = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'free', text: 'Free' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' }
]
</script>
