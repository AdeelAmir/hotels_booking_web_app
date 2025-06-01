<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Update Email</h4>
    </b-card-header>

    <b-card-body>
      <b-form @submit.prevent="handleUpdateEmail">
        <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

        <label class="form-label">Enter your new email<span class="text-danger">*</span></label>
        <b-form-input type="email" v-model="personalInformation.email" placeholder="Enter your email" />

        <div cols="12" class="text-end mt-3">
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
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import * as yup from 'yup'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useToast } from 'vue-toastification'
import { UpdateEmail } from '@/helpers/backend-api'

const useAuth = useAuthStore();
const error = ref('')
const route = useRoute()
const query = route.query
const toast = useToast()
const isLoading = ref(false)
let userDetails = useAuth.getUserData();
let userToken = useAuth.getUserToken();



const personalInformation = reactive({
  email: userDetails.email
});

const updateInformationSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/user/profile')
}

const handleUpdateEmail = async () => {
  let user = {}
  try {
    user = await updateInformationSchema.validate(personalInformation)
    error.value = ''
  } catch (validationError: any) {
    error.value = validationError.message
    return 
  }
  const plainData = JSON.parse(JSON.stringify(user))
  try {
    isLoading.value = true // Start loading
    const response = await UpdateEmail(plainData, userToken);
    if (response.status === true) {
      useAuth.saveSession(response.data,null, 30);
      redirectUser();
      toast.success('Successfully Update Changes!'); // Show toast success
    } else {
      error.value = response.message
      isLoading.value = false
    }
  } catch (err: any) {
    error.value = 'Failed to register, Please try again'
    isLoading.value = false
  }finally {
    isLoading.value = false // End loading
  }
}

</script>