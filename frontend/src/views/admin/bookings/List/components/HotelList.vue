<template>
  <b-card no-body class="shadow">
    <b-card-body>
      <div class="bg-light rounded p-3 d-none d-xxl-block">
        <b-row class="row-cols-5 g-4">
          <b-col>
            <h6 class="mb-0">Booked By</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Arrival Time</h6>
          </b-col>
          <!-- <b-col>
            <h6 class="mb-0">Room Floor</h6>
          </b-col> -->
          <b-col>
            <h6 class="mb-0">End Time</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Amount</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Action</h6>
          </b-col>
        </b-row>
      </div>

      <HotelListCard v-for="(hotel, idx) in ListData" :key="idx" :hotel="hotel" />
    </b-card-body>

    <b-card-footer class="pt-0">
      <Pagination />
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import HotelListCard from '@/views/admin/bookings/List/components/HotelListCard.vue'
import Pagination from '@/views/admin/bookings/List/components/Pagination.vue'
// import { hotelList } from '@/views/admin/bookings/List/data'
import { ref } from 'vue';
import { hotelListData } from '@/stores/auth'


const ListData: any = ref([]);
const hotelList = hotelListData();
let getListData = hotelList.getData();
ListData.value = getListData.data || [];
console.log(ListData.value);


</script>
