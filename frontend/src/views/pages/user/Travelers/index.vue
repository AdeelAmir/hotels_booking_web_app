<template>
  <UserLayout>
    <b-card no-body class="border">
      <b-card-header class="border-bottom">
        <h4 class="card-header-title">Travelers Detail</h4>
      </b-card-header>

      <b-card-body class="vstack gap-4">
        <!-- Loop through travelersArr -->
        <b-card v-for="(traveler, index) in travelersArr" :key="index">
          <b-card-header class="d-flex justify-content-between align-items-center p-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm">
                <BIconPersonCircle  class="signIn-icon" />
                <!-- <img class="avatar-img rounded-circle" :src="getAvatar(index)" alt="avatar" /> -->
              </div>
              <div class="ms-2">
                <h6 class="mb-0">{{ traveler.firstName }} {{ traveler.lastName }}</h6>
              </div>
            </div>
            <a href="#" class="btn btn-sm btn-link p-0 mb-0">Remove</a>
          </b-card-header>

          <form class="card-body p-0 pt-3">
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <div class="input-group">
                <b-form-input v-model="traveler.firstName" type="text" placeholder="First name" />
                <b-form-input v-model="traveler.lastName" type="text" placeholder="Last name" />
              </div>
            </div>

            <div>
              <CustomFlatpicker
                id="birthday"
                label="Date of Birth"
                placeholder="Enter your birth"
                v-model="traveler.dob"
                :options="{ dateFormat: 'd M Y' }"
              />
            </div>
          </form>
        </b-card>

        <hr />

        <div class="text-end">
          <b-button variant="primary" class="mb-0" v-b-modal.inquiryForm>
            <BIconPlusLg />
            Add New Traveler
          </b-button>
        </div>
      </b-card-body>
    </b-card>

    <!-- Modal for adding new traveler -->
    <b-modal id="inquiryForm" header-class="h5" hide-footer title="Add New Traveler">
      <template #modal-header>
        <b-button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></b-button>
      </template>

      <b-form @submit.prevent="handleUpdateTravelers">
        <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

        <!-- Data repeater for traveler details -->
        <div v-for="(newTraveler, index) in newTravelers" :key="index" class="mb-3">
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <b-input-group>
              <b-form-input v-model="newTraveler.firstName" type="text" placeholder="First name" />
              <b-form-input v-model="newTraveler.lastName" type="text" placeholder="Last name" />
            </b-input-group>
            <small>Enter this person's name exactly as it's written on their official travel document</small>
          </div>

          <div class="mb-3">
            <CustomFlatpicker
              :id="'dateOfBirth' + index"
              label="Date of Birth"
              placeholder="Enter your birth"
              v-model="newTraveler.dob"
              :options="{ dateFormat: 'd M Y' }"
            />
            <small>It's important to enter a correct date of birth because these details can be used for booking or ticketing purposes</small>
          </div>

          <div class="text-end">
            <b-button size="sm" variant="danger" @click="removeTraveler(index)">Remove Traveler</b-button>
          </div>
        </div>

        <!-- <div class="text-end mt-3">
          <b-button size="sm" variant="primary" class="mb-0 ml-2" @click="addNewTraveler">Add Another Traveler</b-button>
          <b-button size="sm" variant="dark" type="submit" class="mb-0 ml-2">Save Travelers</b-button>
        </div> -->
        <div>
          <b-button size="sm" variant="primary" class="mb-0 ml-2" @click="addNewTraveler">Add Another Traveler</b-button>
            <b-button :disabled="isLoading" size="sm" variant="dark" type="submit" class="mb-0 ml-2">
              <span v-if="!isLoading">Save Travelers</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
          </div>
      </b-form>
    </b-modal>
  </UserLayout>
</template>

<script setup lang="ts">
import { BIconPersonCircle, BIconPlusLg } from 'bootstrap-icons-vue'
import UserLayout from '@/layouts/UserLayout.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import avatar9Img from '@/assets/images/avatar/09.jpg'
import avatar1Img from '@/assets/images/avatar/01.jpg'
import { UpdateTravelers } from '@/helpers/backend-api'

const useAuth = useAuthStore();
const error = ref('')
let userDetails = useAuth.getUserData();
const isLoading = ref(false)
const toast = useToast()
const userToken = useAuth.getUserToken();

const newTravelers = reactive([
  { firstName: '', lastName: '', dob: '' } // Initial traveler object
]);

const updateTravelerSchema = yup.object({
  dob: yup.string().required('Please enter date of birth'),
  lastName: yup.string().required('Please enter last name'),
  firstName: yup.string().required('Please enter first name'),
});
let checkTraveler = userDetails? userDetails.travelers : []
const travelersArr = ref(checkTraveler);

const getAvatar = (index: number) => {
  return index % 2 === 0 ? avatar9Img : avatar1Img;
};

const handleUpdateTravelers = async () => {
  let travelers:any = null;
  try {
    await Promise.all(newTravelers.map(async (traveler) => {
      await updateTravelerSchema.validate(traveler, { abortEarly: false });
    }));
    error.value = '';
    travelers = newTravelers
  } catch (validationError: any) {
    error.value = validationError.errors.join(', ');
  }
  const plainData = JSON.parse(JSON.stringify(travelers));
  try {
    isLoading.value = true // Start loading
    const response = await UpdateTravelers(plainData, userToken);
    if (response.status === true) {
      useAuth.saveSession(response.data, null, 30);
      userDetails = useAuth.getUserData();
      toast.success('Successfully Save Travelers!'); // Show toast success
    } else {
      error.value = response.message
    }
  } catch (err: any) {
    error.value = 'Failed to register, Please try again'
  }finally {
    isLoading.value = false // End loading
  }
};

const addNewTraveler = () => {
  newTravelers.push({ firstName: '', lastName: '', dob: '' });
};

const removeTraveler = (index: number) => {
  newTravelers.splice(index, 1);
};
</script>

