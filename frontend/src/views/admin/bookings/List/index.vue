<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-2 mb-sm-0">Booking</h1>
        </div>
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <!-- Dynamically render StatisticCard with loading state -->
      <b-col v-for="(item, idx) in statisticData" md="6" xxl="3" :key="idx">
        <StatisticCard :item="item" />
      </b-col>
    </b-row>

    <h3> Booking List</h3>
    <div class="mt-3">
      <div class="">
        <b-spinner v-if="loading" small></b-spinner>
        <HotelList v-else />
      </div>
    </div>
  </AdminLayout>
</template>


<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCard from '@/views/admin/bookings/List/components/StatisticCard.vue'
import HotelList from '@/views/admin/bookings/List/components/HotelList.vue'
import { BIconBoxArrowRight, BIconBoxArrowInRight, BIconDoorOpen, BIconXCircle } from 'bootstrap-icons-vue'
import { onMounted, ref } from 'vue';
import { useAuthStore, hotelListData } from '@/stores/auth'
import { GetAllBooking } from '@/helpers/backend-api'
import type { BaseColorVariant } from 'bootstrap-vue-next'

const hotelList = hotelListData();
const useAuth = useAuthStore();
const userToken = useAuth.getUserToken();
const ListData: any = ref([]);
const error = ref('');
const loading = ref(true);


const statisticData = ref([
  {
    title: 'New Booked Rooms',
    stat: ListData.value ? ListData.value.completedOrders : 0, // Default value until data is fetched
    progress: 60,
    variant: 'primary',
    icon: BIconDoorOpen,
    text: `${0} new rooms booked`,
    subText: 'today'
  },
  {
    title: 'Up Coming Bookings',
    stat: ListData.value ? ListData.value.upcomingOrders : 0, // Default value until data is fetched
    progress: 60,
    variant: 'success',
    icon: BIconBoxArrowInRight,
    text: `${0} bookings`,
    subText: 'incoming'
  },
  {
    title: 'Pending Bookings',
    stat: ListData.value ? ListData.value.pendingOrders : 0, // Default value until data is fetched
    progress: 60,
    variant: 'warning',
    icon: BIconBoxArrowRight,
    text: `${0} reservation`,
    subText: 'outgoing'
  },
  {
    title: 'Cancelled Rooms',
    stat: ListData.value ? ListData.value.cancelledOrders : 0, // Default value until data is fetched
    progress: 60,
    variant: 'danger',
    icon: BIconXCircle,
    text: `${0} canceled rooms`,
    subText: 'today'
  }
]);


onMounted(() => {
  window.addEventListener('beforeunload', () => {
    hotelList.removeSession(); // Clear your store data here
  });
});

// Fetch the data from the backend on mounted
onMounted(async () => {
  let getListData = hotelList.getData();
  if (getListData) {
    loading.value = false;

    ListData.value = JSON.parse(JSON.stringify(getListData.cardsData));
    updateStatisticData(ListData.value);
  } else {
    try {
      console.log("User Data Are Fetch Now");
      const response = await GetAllBooking(userToken);
      if (response.status) {
        ListData.value = response.cardsData;
        hotelList.saveSession({
          data: response.data,
          cardsData: response.cardsData
        });
        updateStatisticData(response.cardsData);
      } else {
        error.value = response.message;
      }
    } catch (err: any) {
      error.value = 'Failed to load statistics, Please try again';
    } finally {
      loading.value = false;  // Set loading to false after data is fetched
    }
  }
});

// Update the statisticData with actual fetched data
function updateStatisticData(cardsData: any) {
  
  statisticData.value = [
    {
      title: 'New Booked Rooms',
      stat: cardsData.completedOrders != undefined ? cardsData.completedOrders : 0,
      progress: 60,
      variant: 'primary' as keyof BaseColorVariant,
      icon: BIconDoorOpen,
      text: `${ListData.value.todayCompletedOrders} new rooms booked`,
      subText: 'today'
    },
    {
      title: 'Up Coming Bookings',
      stat: cardsData.upcomingOrders != undefined ? cardsData.upcomingOrders : 0,
      progress: 60,
      variant: 'success' as keyof BaseColorVariant,
      icon: BIconBoxArrowInRight,
      text: `${ListData.value.todayUpcomingOrders} bookings`,
      subText: 'incoming'
    },
    {
      title: 'Pending Bookings',
      stat: cardsData.pendingOrders != undefined ? cardsData.pendingOrders : 0,
      progress: 60,
      variant: 'warning' as keyof BaseColorVariant,
      icon: BIconBoxArrowRight,
      text: `${ListData.value.todayCompletedOrders} reservation`,
      subText: 'outgoing'
    },
    {
      title: 'Cancelled Rooms',
      stat: cardsData.cancelledOrders != undefined ? cardsData.cancelledOrders : 0,
      progress: 60,
      variant: 'danger' as keyof BaseColorVariant,
      icon: BIconXCircle,
      text: `${ListData.value.todayCancelledOrders != undefined ? ListData.value.todayCancelledOrders : 0} canceled rooms`,
      subText: 'today'
    }
  ];
}
</script>
