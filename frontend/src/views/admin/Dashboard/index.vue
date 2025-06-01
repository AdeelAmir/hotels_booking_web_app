<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
        </div>
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <!-- Show loader when data is loading -->
      <b-col v-if="loading" cols="12" class="d-flex justify-content-center align-items-center">
        <b-spinner label="Loading statistics..."></b-spinner>
      </b-col>

      <!-- Show statistics once data is loaded -->
      <b-col v-else v-for="(item, idx) in statisticData" md="6" xxl="3" :key="idx">
        <StatisticCard :item="item" />
      </b-col>
    </b-row>
  </AdminLayout>
</template>


<script lang="ts" setup>
import { BIconPlusLg } from 'bootstrap-icons-vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCard from '@/views/admin/Dashboard/components/StatisticCard.vue'
import { statisticData } from '@/views/admin/Dashboard/data'
import { ref, onMounted } from 'vue'
import { useAuthStore, DashboardStats } from '@/stores/auth';
import { StatisticDashboard } from '@/helpers/backend-api'

const useAuth = useAuthStore();
const statics = DashboardStats();
const userToken = useAuth.getUserToken();
const error = ref('');
const loading = ref(true); // Initialize loading state to true

// Function to map the API response to the statistic data format
const mapResponseToStatistics = (response: any) => {
  const mapping = [
    { title: 'Total User', stat: response.totalUser },
    { title: 'Total Income', stat: `$${response.totalIncome || 0}` },
    { title: 'Total Order', stat: response.totalOrder },
    { title: 'Completed Order', stat: response.completedOrders }
  ];

  statisticData.forEach(stat => {
    const match = mapping.find(item => item.title === stat.title);
    if (match) {
      stat.stat = match.stat;
    }
  });
};

onMounted(() => {
  // Listen for the beforeunload event and clear the store
  window.addEventListener('beforeunload', () => {
    console.log("Session is cleardd");
    statics.removeSession(); // Clear your store data here
  });
});

// Fetch data logic
const fetchStatistics = async () => {
  // Check if data is available in the Pinia store
  let dashboardStats = statics.getData();

  if (dashboardStats) {
    // Map existing store data to the UI
    mapResponseToStatistics(dashboardStats);
    loading.value = false; // Set loading to false since data is ready
  } else {
    try {
      // Make an API call to fetch data
      const response = await StatisticDashboard(userToken);
      if (response.status) {
        // Map response data to statistics
        mapResponseToStatistics(response.data);
        // Save data in Pinia store for future use
        statics.saveSession(response.data);
      } else {
        error.value = response.message;
      }
    } catch (err: any) {
      error.value = 'Failed to load statistics, Please try again';
    } finally {
      loading.value = false; // Set loading to false once data fetching is done
    }
  }
};

onMounted(() => {
  fetchStatistics(); // Call the function on component mount
});
</script>

