<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Personal Information</h4>
    </b-card-header>

    <b-card-body>
      <b-form class="row g-3" @submit.prevent="handleUpdateProfile">
        <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>
        <b-col cols="12">
          <label class="form-label">Upload your profile photo<span class="text-danger">*</span></label>
          <div class="d-flex align-items-center">
            <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
              <span class="avatar avatar-xl">
                <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow"
                  :src="avatar1Img" alt="" />
              </span>
            </label>
            <label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
            <b-form-file id="uploadfile-1" class="form-control d-none" type="file" />
          </div>
        </b-col>

        <b-col md="6">
          <label class="form-label">First Name<span class="text-danger">*</span></label>
          <b-form-input type="text" v-model="personalInformation.first_name" placeholder="Enter your full name" />
        </b-col>

        <b-col md="6">
          <label class="form-label">Last Name<span class="text-danger">*</span></label>
          <b-form-input type="text" v-model="personalInformation.last_name" placeholder="Enter your last nmae" />
        </b-col>

        <b-col md="6">
          <label class="form-label">Mobile number<span class="text-danger">*</span></label>
          <b-form-input type="text" v-model="personalInformation.phone_number" placeholder="Enter your mobile number" />
        </b-col>

        <b-col md="6">
          <label class="form-label">Nationality<span class="text-danger">*</span></label>
          <SelectFormInput id="nationality" v-model="personalInformation.nationality" :options="options" />
        </b-col>

        <b-col md="6">
          <label class="form-label">Date of Birth<span class="text-danger">*</span></label>
          <CustomFlatpicker id="birthday" placeholder="Enter date of birth" v-model="personalInformation.dob"
            :options="{ dateFormat: 'd M Y' }" />
        </b-col>

        <b-col md="6">
          <label class="form-label">Select Gender<span class="text-danger">*</span></label>
          <div class="d-flex gap-4">
            <div class="radio-bg-light">
              <b-form-radio v-model="personalInformation.gender" name="flexRadioDefault" id="flexRadioDefault1"
                value="male">
                Male
              </b-form-radio>
            </div>
            <div class="radio-bg-light">
              <b-form-radio v-model="personalInformation.gender" name="flexRadioDefault" id="flexRadioDefault2"
                value="female">
                Female
              </b-form-radio>
            </div>
            <div class="radio-bg-light">
              <b-form-radio v-model="personalInformation.gender" name="flexRadioDefault" id="flexRadioDefault3"
                value="other">
                Others
              </b-form-radio>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Address">
            <b-form-textarea rows="3" v-model="personalInformation.address" spellcheck="false"></b-form-textarea>
          </b-form-group>
        </b-col>
        <div cols="12" class="text-end">
        <b-button :disabled="isLoading" variant="primary" type="submit" class="mb-0">
          <span v-if="!isLoading">Save Changes</span>
          <span v-else>
            <b-spinner small></b-spinner>
          </span>
        </b-button>
      </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import avatar1Img from '@/assets/images/avatar/01.jpg'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import router from '@/router'
import { UpdateBasicInformation } from '@/helpers/backend-api'

const options = [
  { value: null, text: 'Select your country' },
  { value: 'pakistan', text: 'Pakistan' },
  { value: 'usa', text: 'USA' },
  { value: 'uae', text: 'UAE' },
  { value: 'uk', text: 'UK' }
];
const error = ref('')
const route = useRoute()
const isLoading = ref(false)
const toast = useToast()
const query = route.query
const useAuth = useAuthStore();
let userDetails = useAuth.getUserData();
let userToken = useAuth.getUserToken();

const personalInformation = reactive({
  first_name: userDetails.firstName,
  last_name: userDetails.lastName,
  phone_number: userDetails.phoneNumber,
  nationality: userDetails.nationality,
  dob: userDetails.dateOfBirth,
  gender: userDetails.gender,
  address: userDetails.address
});

const updateInformationSchema = yup.object({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone_number: yup.string().required('Please enter your phone number'),
  nationality: yup.string().required('Please enter your nationality'),
  address: yup.string().required('Please enter your address'),
  gender: yup.string().required('Please select your gender'),
  dob: yup.date().required('Please enter your date of birth'),
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/user/profile')
}

const handleUpdateProfile = async () => {
  let user = {}
  try {
    user = await updateInformationSchema.validate(personalInformation)
  } catch (validationError: any) {
    error.value = validationError.message
    return 
  }
  const plainData = JSON.parse(JSON.stringify(user))
  try {
    isLoading.value = true // Start loading
    const response = await UpdateBasicInformation(plainData, userToken);
    if (response.status === true) {
      console.log(response.data);
      useAuth.saveSession(response.data, null, 30);
      redirectUser();
      toast.success('Successfully Update Changes!'); // Show toast success
    } else {
      error.value = response.message
    }
  } catch (err: any) {
    error.value = 'Failed to register, Please try again'
  }finally {
    isLoading.value = false // End loading
  }
}
</script>


