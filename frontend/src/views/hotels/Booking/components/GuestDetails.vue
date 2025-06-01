<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <b-card-title class="mb-0">
        <BIconPeopleFill class="mb-1" />
        Enter your details
      </b-card-title>
    </b-card-header>

    <b-card-body class="p-4">
      <b-form class="row g-4">
        <b-col md="12">
          <b-form-group label="Name" label-for="name">
            <b-form-input id="name" type="text" v-model="name" size="lg" placeholder="Enter your first & last name" />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label=" Email Address" label-for="email">
            <b-form-input id="email" type="text" size="lg" v-model="email" placeholder="Enter your email" />
            <b-form-text>(Booking voucher will be sent to this  Email Address)</b-form-text>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Mobile number" label-for="mobile">
            <b-form-input id="mobile" type="tel" size="lg" v-model="phoneNumber"
              placeholder="Enter your mobile number" />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <div class="bg-light rounded-2 px-4 py-3 d-flex">
            <BIconPeopleFill class="mr-2" />
            <h6 class="mb-0">Guest Details</h6>
          </div>
        </b-col>

        <!-- Dynamic guest fields -->
        <b-col v-for="(guest, index) in guests" :key="index" md="12">
          <b-row>
            <b-col md="2">
              <div class="form-size-lg">
                <SelectFormInput label="Title" :id="'title-' + index" v-model="guest.title" :options="titleOptions"
                  :choice-options="{ searchEnabled: true }" />
              </div>
            </b-col>

            <b-col md="5">
              <b-form-group :label="'First Name ' + (index + 1)" :label-for="'first-name-' + index">
                <b-form-input :id="'first-name-' + index" type="text" size="lg" placeholder="Enter your first name"
                  v-model="guest.firstName" />
              </b-form-group>
            </b-col>

            <b-col md="5">
              <b-form-group :label="'Last Name ' + (index + 1)" :label-for="'last-name-' + index">
                <b-form-input :id="'last-name-' + index" type="text" size="lg" placeholder="Enter your last name"
                  v-model="guest.lastName" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="6">
          <a href="#" class="btn btn-link mb-0 p-0" @click.prevent="addGuest">
            <font-awesome-icon :icon="faPlus" class="me-1" />
            Add New Guest
          </a>
        </b-col>
        <b-col cols="6" class="d-flex justify-content-end">
          <a href="#" class="d-flex-end btn btn-link mb-0 p-0 text-danger" @click.prevent="deleteGuest">
            <font-awesome-icon :icon="faMinus" class="me-1" />
            Delete Guest
          </a>
        </b-col>

        <div v-if="userDetails == 'None'" class="alert alert-info my-4" role="alert">
          <router-link :to="{ name: 'auth.sign-in' }" class="alert-heading h6">Login</router-link>
          to prefill all details and get access to secret deals
        </div>

        <b-card no-body class="border mt-4">
          <b-card-header class="border-bottom">
            <b-card-title tag="h5" class="mb-0">Special request</b-card-title>
          </b-card-header>

          <b-card-body>
            <b-form class="hstack flex-wrap gap-3">
              <b-form-checkbox
                v-for="option in specialRequests"
                :key="option.id"
                :id="option.id"
                v-model="specialRequestValues[option.id]"
              >
                {{ option.text }}
              </b-form-checkbox>
            </b-form>
          </b-card-body>
        </b-card>
        <!-- Button to collect and log data -->
      </b-form>
    </b-card-body>
  </b-card>
</template>


<script setup lang="ts">
import SelectFormInput from '@/components/SelectFormInput.vue';
import { useAuthStore } from '@/stores/auth';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { BIconPeopleFill } from 'bootstrap-icons-vue'
import { ref, watch } from 'vue';

const emit = defineEmits();
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const specialRequestArr = ref();
const guests = ref([{ title: '', firstName: '', lastName: '' }]);
const titleOptions = [
  { value: 'title', text: 'Title' },
  { value: 'Mr', text: 'Mr' },
  { value: 'Mrs', text: 'Mrs' }
];
const specialRequests = ref([
  { id: 'hotelType1', text: 'Smoking room' },
  { id: 'hotelType2', text: 'Late check-in' },
  { id: 'hotelType3', text: 'Early check-in' },
  { id: 'hotelType4', text: 'Room on a high floor' },
  { id: 'hotelType5', text: 'Large bed' },
  { id: 'hotelType6', text: 'Airport transfer' },
  { id: 'hotelType7', text: 'Twin beds' }
]);

// Initialize special request values
const specialRequestValues = ref<{ [key: string]: boolean }>(
  specialRequests.value.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
);

// Fetch user data
const useAuth = useAuthStore();
let userDetails = useAuth.getUserData();
name.value = userDetails ? userDetails.firstName + ' ' + userDetails.lastName : '';
email.value = userDetails ? userDetails.email : '';
phoneNumber.value = userDetails ? userDetails.phoneNumber : '';
const travelers = userDetails ? userDetails.travelers : '';
guests.value = travelers.length > 0 ? travelers : [{ title: '', firstName: '', lastName: '' }];


if (userDetails == null || userDetails == undefined) {
  userDetails = 'None'
  // router.push('/sign-in');
}

// Watch for changes in form fields and log them
watch([name, email, phoneNumber], () => {
  logFormData();
}, { deep: true }); // Ensure nested changes are detected

watch(guests, () => {
  logFormData();
}, { deep: true });

watch(specialRequestValues, () => {
  const updatedRequests = specialRequests.value
    .filter(({ id }) => specialRequestValues.value[id])
    .map(({ text }) => text);
    specialRequestArr.value = updatedRequests;
  console.log('Selected Special Requests:', updatedRequests);
  logFormData();
}, { deep: true });

// Function to log form data
function logFormData() {
  const formData = {
    loginEmail: userDetails ? userDetails.email : email.value,
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    guestDetails: guests.value,
    specialRequests: specialRequestArr.value
  };
  console.log(formData);
  emit('form-data-changed', formData);
}
logFormData();

function addGuest() {
  guests.value.push({ title: 'Mr', firstName: '', lastName: '' });
}

function deleteGuest() {
  if (guests.value.length > 0) {
    guests.value.pop();
  }
}
</script>


<style>
.dGuest {
  display: flex;
  justify-items: end;
}
</style>