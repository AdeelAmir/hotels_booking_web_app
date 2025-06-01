<template>
  <b-card no-body class="border rounded-3">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Invoice history</h5>
    </b-card-header>
    <b-card-body class="pb-0">
      <b-row class="g-3 align-items-center justify-content-between mb-3">
        <b-col md="8">
          <form class="rounded position-relative">
            <input
              class="form-control pe-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y"
              type="submit"
            >
              <font-awesome-icon :icon="faSearch" class="fs-6" />
            </button>
          </form>
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
              <th scope="col" class="border-0 rounded-start">Invoice ID</th>
              <th scope="col" class="border-0">Date</th>
              <th scope="col" class="border-0">Amount</th>
              <th scope="col" class="border-0">Status</th>
              <th scope="col" class="border-0 rounded-end">Action</th>
            </tr>
          </thead>
          <tbody class="border-top-0">
            <tr v-for="(invoice, idx) in invoiceHistory" :key="idx">
              <td>#{{ invoice.id }}</td>
              <td>{{ invoice.date }}</td>
              <td>
                <div class="items-center">
                  {{ currency }}{{ invoice.amount }}
                  <b-dropdown
                    no-caret
                    toggle-class="m-0 p-0"
                    menu-class="dropdown-w-sm min-w-auto shadow rounded"
                    variant="link"
                  >
                    <template #button-content>
                      <a class="h6 mb-1 arrow-none" role="button">
                        <BIconInfoCircleFill class="mb-1 ms-1" />
                      </a>
                    </template>
                    <li>
                      <div class="d-flex justify-content-between">
                        <span class="small">Commission</span>
                        <span class="h6 mb-0 small ms-2">{{ currency }}86</span>
                      </div>
                      <hr class="my-1" />
                    </li>
                    <li>
                      <div class="d-flex justify-content-between">
                        <span class="me-4 small">Us royalty withholding</span>
                        <span class="text-danger small">-{{ currency }}0.00</span>
                      </div>
                      <hr class="my-1" />
                    </li>
                    <li>
                      <div class="d-flex justify-content-between">
                        <span class="small">Earning</span>
                        <span class="h6 mb-0 small ms-2">{{ currency }}86</span>
                      </div>
                    </li>
                  </b-dropdown>
                </div>
              </td>
              <td>
                <div
                  class="badge bg-opacity-10"
                  :class="
                    invoice.status == 'paid'
                      ? 'text-success bg-success'
                      : invoice.status == 'pending'
                        ? 'text-warning bg-warning'
                        : 'bg-danger text-danger'
                  "
                >
                  {{ toSentenceCase(invoice.status) }}
                </div>
              </td>
              <td>
                <router-link
                  to=""
                  v-b-tooltip.hover
                  title="Download"
                  class="btn btn-light btn-round mb-0 flex-centered"
                >
                  <BIconCloudDownload />
                </router-link>
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
import { BIconCloudDownload, BIconInfoCircleFill } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'
import { currency } from '@/helpers/constants'
import { invoiceHistory } from '@/views/agent/Earnings/data'

import SelectFormInput from '@/components/SelectFormInput.vue'
import { toSentenceCase } from '../../../../helpers/change-casting'

const selectedOption = ref('sort-by')
const sortOptions = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'free', text: 'Free' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' }
]
</script>
