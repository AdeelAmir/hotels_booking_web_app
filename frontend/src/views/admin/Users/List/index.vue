<template>
  <AdminLayout>
    <!-- Loader section -->
    <!-- Main Content -->
    <div>
      <b-row>
        <b-col cols="12" class="mb-3 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-3 mb-sm-0">User List</h1>
            <!-- <div class="d-grid">
              <router-link to="" class="btn btn-primary mb-0 items-center">
                <BIconFiletypePdf class="me-2" />
                Generate Report
              </router-link>
            </div> -->
          </div>
        </b-col>
      </b-row>
      <b-row class="g-4 d-flex justify-content-end align-items-end">
        <!-- <b-col lg="6">
          <b-nav defaultActiveKey="1" class="nav nav-pills-shadow nav-responsive">
            <b-nav-item link-class="mb-0 active"> All Users </b-nav-item>
          </b-nav>
        </b-col> -->
        <!-- <b-col md="6" lg="3">
          <b-form>
            <SelectFormInput id="sort-by-hotels" v-model="selectedOption" :options="sortOptions"
              :choice-options="{ searchEnabled: false }" />
          </b-form>
        </b-col> -->
        <!-- <b-col md="12" lg="3">
          <b-form class="rounded position-relative">
            <b-form-input class="bg-transparent" type="search" placeholder="Search" aria-label="Search" />
            <button
              class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit">
              <font-awesome-icon :icon="faSearch" class="" />
            </button>
          </b-form>
        </b-col> -->
      </b-row>
      <b-card no-body class="shadow mt-3">
        <b-card-body>
          <div class="bg-light rounded p-3 d-none d-lg-block">
            <b-row class="row-cols-7 g-4">
              <b-col>
                <h6 class="mb-0">First Name</h6>
              </b-col>
              <b-col>
                <h6 class="mb-0">Last Name</h6>
              </b-col>
              <b-col>
                <h6 class="mb-0">Phone Number</h6>
              </b-col>
              <b-col>
                <h6 class="mb-0">Address</h6>
              </b-col>
              <b-col>
                <h6 class="mb-0">Status</h6>
              </b-col>
              <!-- <b-col>
                <h6 class="mb-0">Action</h6>
              </b-col> -->
            </b-row>
          </div>

          <div v-if="loading" class="d-flex justify-content-center align-items-center mt-4">
            <b-spinner label="Loading..." variant="primary" />
          </div>

          <!-- Table body rows with borders -->
          <b-row v-else v-for="(guest, idx) in guestsListData" :key="idx"
            class="row-cols-xl-7 align-items-lg-center g-4 px-2 py-4 border-bottom">
            <b-col>
              <div class="d-flex align-items-center">
                <!-- <div class="avatar avatar-xs flex-shrink-0">
                  <BIconPersonCircle class="signIn-icon" />
                </div> -->
                <div class="avatar me-1 mt-2">
                  <BIconPersonCircle v-if="guest.profilePicture == ''" class="signIn-icon" />
                  <img v-else class="avatar-img rounded-circle shadow" :src="guest.profilePicture" alt="avatar" />
                </div>
                <div class="ms-2">
                  <h6 class="mb-0 fw-light">{{ guest.firstName }}</h6>
                </div>
              </div>
            </b-col>
            <b-col>
              <h6 class="mb-0 fw-normal">{{ guest.lastName }}</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0 fw-normal">{{ guest.phoneNumber }}</h6>
            </b-col>
            <b-col>
              <h6 class="mb-0 fw-normal">{{ guest.address }}</h6>
            </b-col>
            <b-col>
              <div v-if="guest.accountStatus === 'active'" class="badge bg-success bg-opacity-10 text-success">
                Active
              </div>
              <div v-else class="badge bg-danger bg-opacity-10 text-danger">Deactive</div>
            </b-col>
            <!-- <b-col>
              <router-link :to="{ name: 'admin.guests.detail' }" class="btn btn-sm btn-light mb-0">
                View
              </router-link>
            </b-col> -->
          </b-row>
        </b-card-body>
        <b-card-footer class="pt-0">
          <Pagination />
        </b-card-footer>
      </b-card>
    </div>
  </AdminLayout>
</template>

<script lang="ts" setup>
import { BIconFiletypePdf, BIconPersonCircle } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { onMounted, ref } from 'vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import Pagination from '@/views/admin/guests/List/components/Pagination.vue'
import { GetAllUSers } from '@/helpers/backend-api'
import { useAuthStore } from '@/stores/auth'

const selectedOption = ref('sort-by-hotels');
const guestsListData: any = ref([]);
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
    console.log("User Data Are Fetch Now");
    const response = await GetAllUSers(userToken);
    if (response.status) {
      guestsListData.value = response.data;
      console.log(response.data);
    } else {
      loading.value = false;
      error.value = response.message;
    }
  } catch (err: any) {
    loading.value = false;
    error.value = 'Failed to load statistics, Please try again';
  } finally {
    loading.value = false;
  }
});
</script>

<style>
.signIn-icon {
  font-size: 35px;
}
</style>
