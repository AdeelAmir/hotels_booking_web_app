<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-3 mb-sm-0">Guest List</h1>
          <div class="d-grid">
            <router-link to="" class="btn btn-primary mb-0 items-center">
              <BIconFiletypePdf class="me-2" />
              Generate Report
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="g-4 align-items-center">
      <b-col lg="6">
        <b-nav defaultActiveKey="1" class="nav nav-pills-shadow nav-responsive">
          <b-nav-item link-class="mb-0 active"> All Guests </b-nav-item>
          <!-- <b-nav-item link-class="mb-0"> Booked </b-nav-item>
          <b-nav-item link-class="mb-0"> Canceled </b-nav-item>
          <b-nav-item link-class="mb-0"> Pending </b-nav-item> -->
        </b-nav>
      </b-col>
      <b-col md="6" lg="3">
        <b-form class="rounded position-relative">
          <b-form-input
            class="bg-transparent"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
            type="submit"
          >
            <font-awesome-icon :icon="faSearch" class="mb-1" />
          </button>
        </b-form>
      </b-col>
      <b-col md="6" lg="3">
        <b-form>
          <SelectFormInput
            id="sort-by-hotels"
            v-model="selectedOption"
            :options="sortOptions"
            :choice-options="{ searchEnabled: false }"
          />
        </b-form>
      </b-col>
    </b-row>
    <b-card no-body class="shadow mt-5">
      <b-card-body>
        <div class="bg-light rounded p-3 d-none d-lg-block">
          <b-row class="row-cols-7 g-4">
            <b-col>
              <h6 class="mb-0">Guest</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Booking Date</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Check-In</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Check-Out</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Room No</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Status</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0">Action</h6>
            </b-col>
          </b-row>
        </div>

        <b-row
          v-for="(guest, idx) in guestsList"
          :key="idx"
          class="row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4"
        >
          <b-col>
            <small class="d-block d-lg-none">Booked by:</small>
            <div class="d-flex align-items-center">
              <div class="avatar avatar-xs flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="guest.image" alt="avatar" />
              </div>
              <div class="ms-2">
                <h6 class="mb-0 fw-light">{{ guest.name }}</h6>
              </div>
            </div>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Booking date:</small>
            <h6 class="mb-0 fw-normal">{{ guest.date }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Check-in:</small>
            <h6 class="mb-0 fw-normal">{{ moment(guest.checkIn).format("DD-MM-yyyy") }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Check-out:</small>
            <h6 class="mb-0 fw-normal">{{ moment(guest.checkOut).format("DD-MM-yyyy") }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Room no:</small>
            <h6 class="mb-0 fw-normal">{{ guest.roomNo }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Payment:</small>

            <div
              v-if="guest.status === 'booked'"
              class="badge bg-success bg-opacity-10 text-success"
            >
              Booked
            </div>
            <div
              v-else-if="guest.status === 'pending'"
              class="badge bg-orange bg-opacity-10 text-orange"
            >
              Pending
            </div>
            <div v-else class="badge bg-danger bg-opacity-10 text-danger">Canceled</div>
          </b-col>
          <b-col>
            <router-link :to="{ name: 'admin.guests.detail' }" class="btn btn-sm btn-light mb-0">
              View
            </router-link>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer class="pt-0">
        <Pagination />
      </b-card-footer>
    </b-card>
  </AdminLayout>
</template>

<script lang="ts" setup>
import { BIconFiletypePdf } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { onMounted, ref } from 'vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import Pagination from '@/views/admin/Users/List/components/Pagination.vue'
import { GetAllBooking, GetAllUSers } from '@/helpers/backend-api'
import { useAuthStore } from '@/stores/auth';
import { guestsList } from '@/views/admin/Users/List/data'
import moment from 'moment'


const selectedOption = ref('sort-by-hotels');
const guestsListData = ref([]);
const useAuth = useAuthStore();
const userToken = useAuth.getUserToken();
const error = ref('');
const loading = ref(true);

const sortOptions = [
  { value: 'sort-by-hotels', text: 'Sort by hotels' },
  { value: '1', text: 'Pride moon Village Resort & Spa' },
  { value: '2', text: 'Courtyard by Marriott New York' },
  { value: '3', text: 'Park Plaza Lodge Hotel' },
  { value: '4', text: 'Royal Beach Resort' }
]


onMounted(async () => {
  try {
    const response = await GetAllUSers(userToken);
    if (response.status) {
      guestsListData.value = response.data
      console.log(response.data);
    } else {
      error.value = response.message;
    }
  } catch (err: any) {
    error.value = 'Failed to load statistics, Please try again';
  } finally {
    loading.value = false; 
  }
});
</script>
