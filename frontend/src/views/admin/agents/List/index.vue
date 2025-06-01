<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-3 mb-sm-0">Agent List</h1>
          <div class="d-grid">
            <router-link to="" class="btn btn-primary mb-0">
              <BIconFiletypePdf class="me-2" />
              Generate Report
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="g-3 align-items-center justify-content-between mb-5">
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
    <b-row class="g-4">
      <b-col v-for="(agent, idx) in agentsList" :key="idx" md="6" lg="4" xxl="3">
        <AgentCard :agent="agent" />
      </b-col>

      <Pagination />
    </b-row>
  </AdminLayout>
</template>

<script lang="ts" setup>
import { BIconFiletypePdf } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import AgentCard from './components/AgentCard.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import Pagination from '@/views/admin/agents/List/components/Pagination.vue'

import { ref } from 'vue'

import { agentsList } from '@/views/admin/agents/List/data'

const selectedOption = ref('sort-by')
const sortOptions = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'free', text: 'Free' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' }
]
</script>
