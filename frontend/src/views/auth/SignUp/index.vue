<template>
  <AuthLayout>
    <b-col lg="6" class="d-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="signin" alt="" />
      </div>
      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <div class="col-lg-6 order-1">
      <div class="p-4 p-sm-6">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Create new account</h1>
        <p class="mb-0">
          Already a member?
          <router-link :to="{ name: 'auth.sign-in' }"> Log in</router-link>
        </p>

        <b-form @submit.prevent="handleSignUp" class="mt-4 text-start">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

          <div class="mb-3">
            <b-form-group label="Enter First Name">
              <b-form-input v-model="newUserData.first_name" type="text" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Enter Last Name">
              <b-form-input v-model="newUserData.last_name" type="text" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Enter Email">
              <b-form-input v-model="newUserData.email" type="email" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <PasswordInput
              v-model="newUserData.password"
              id="password"
              label="Enter Password"
              autocomplete="off"
            />
          </div>

          <div class="mb-3">
            <PasswordInput
              v-model="newUserData.confirm_password"
              id="confirm-password"
              label="Confirm Password"
              autocomplete="off"
            />
          </div>

          <div class="mb-3">
            <b-form-group label="Enter Phone Number">
              <b-form-input v-model="newUserData.phone_num" type="tel" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Enter Nationality">
              <b-form-input v-model="newUserData.nationality" type="text" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Enter Address">
              <b-form-textarea v-model="newUserData.address" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Gender">
              <b-form-checkbox v-model="newUserData.gender" value="male"> Male </b-form-checkbox>
              <b-form-checkbox v-model="newUserData.gender" value="female">
                Female
              </b-form-checkbox>
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Date of Birth">
              <b-form-input v-model="newUserData.dob" type="date" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-group label="Passport ID">
              <b-form-input v-model="newUserData.passport_id" type="text" autocomplete="off" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <b-form-checkbox>Keep me signed in</b-form-checkbox>
          </div>
          <div>
            <b-button :disabled="isLoading" variant="primary" type="submit" class="w-100 mb-0">
              <span v-if="!isLoading">Sign up</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p
              class="small position-absolute top-50 start-50 translate-middle bg-mode px-1 px-sm-2"
            >
              Or sign in with
            </p>
          </div>

          <div class="text-primary-hover text-body mt-3 text-center">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body">{{ developedBy }}</a
            >.
          </div>
        </b-form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import signin from '@/assets/images/element/signin.svg'
import logo from '@/assets/images/logo-icon.svg'
import PasswordInput from '@/components/PasswordInput.vue'
import { reactive, ref } from 'vue'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { SignUpFormAPI } from '@/helpers/backend-api'

const error = ref('')
const newUserData = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
  phone_num: '',
  nationality: '',
  address: '',
  gender: '',
  dob: '',
  passport_id: ''
})

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query
const toast = useToast()
const isLoading = ref(false)

const SignUpFormSchema = yup.object({
  confirm_password: yup.string().required('Please enter your confirm password'),
  password: yup.string().required('Please enter your password'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone_num: yup.string().required('Please enter your phone number'),
  nationality: yup.string().required('Please enter your nationality'),
  address: yup.string().required('Please enter your address'),
  gender: yup.string().required('Please select your gender'),
  dob: yup.date().required('Please enter your date of birth'),
  passport_id: yup.string().required('Please enter your passport ID')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}

const handleSignUp = async () => {
  let user = {}
  try {
    user = await SignUpFormSchema.validate(newUserData)
  } catch (validationError: any) {
    error.value = validationError.message
    return
  }
  const plainData = JSON.parse(JSON.stringify(user))
  try {
    isLoading.value = true // Start loading
    const response = await SignUpFormAPI(plainData)
    if (response.status === true) {
      useAuth.saveSession(response.data, response.accessToken, 30);
      redirectUser();
      toast.success('Successfully Registered!'); // Show toast success
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
