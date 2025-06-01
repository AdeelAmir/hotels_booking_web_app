<template>
  <b-row
    class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-2 g-sm-4 align-items-md-center border-bottom px-2 py-4"
  >
    <b-col>
      <small class="d-block d-xxl-none">Booked By:</small>
      <div class="d-flex align-items-center">
        <div>
          <!-- <img :src="hotel.image" class="rounded" /> -->
          <BIconPersonCircle class="signIn-icon" />
        </div>
        
        <h6 class="mb-0 ">{{ hotel.extraDetail.mainGuest.name }}</h6>
      </div>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Arrival Time:</small>
      <h6 class="mb-0 fw-normal">{{ moment(hotel.checkIn).format("DD-MM-yyyy") }}</h6>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">End Time:</small>
      <h6 class="mb-0 fw-normal">{{ moment(hotel.checkOut).format("DD-MM-yyyy") }}</h6>
    </b-col>
    <b-col>
      <small class="d-block d-xxl-none">Amount:</small>
      <h6 class="text-success mb-0">
        {{ hotel.currencySymbol }}
        {{ hotel.payableAmount }}
      </h6>
    </b-col>
    <b-col>
      <b-button @click.prevent="handleClick(hotel.id)" class="btn btn-sm btn-light mb-0">
        View
      </b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { ref, type PropType } from 'vue'
import { BIconPersonCircle } from 'bootstrap-icons-vue'
import moment from 'moment';

const handleClick = async (id:any) => {
  window.open(`/booking_v/admin/bookings/detail/${id}`, '_blank');
};

const props = defineProps({
  hotel: {
    type: Object as PropType<any>,
    required: true
  }
})
</script>

<style>
.signIn-icon{
  font-size: 40px;
  margin: 0px 7px
}
</style>