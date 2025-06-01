<template>
  <AuthLayout>
    <b-col lg="6" class="d-md-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="forgotPass" alt="" />
      </div>

      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="order-1">
      <div class="p-4 p-sm-7">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Forgot password?</h1>
        <p class="mb-sm-0">Enter the email address associated with an account.</p>

        <b-form class="mt-sm-4 text-start" @submit.prevent="handleForgetPassword">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

          <div class="mb-3">
            <b-form-group label="Enter email">
              <b-form-input v-model="credentials.email" name="email" type="email" autocomplete="" />
            </b-form-group>
          </div>

          <div class="mb-3 text-center">
            <p>
              Back to
              <router-link :to="{ name: 'auth.sign-in' }">Sign in</router-link>
            </p>
          </div>

          <div class="d-grid">
            <b-button :disabled="isLoading" variant="primary" type="submit" class="w-100 mb-0">
              <span v-if="!isLoading">Reset Password</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p class="small position-absolute top-50 start-50 translate-middle bg-mode px-2">
              Or sign in with
            </p>
          </div>
          <div class="text-primary-hover text-body mt-3 text-center">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body">{{ developedBy }}</a>.
          </div>
        </b-form>
      </div>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import forgotPass from '@/assets/images/element/forgot-pass.svg'
import logo from '@/assets/images/logo-icon.svg'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as yup from 'yup'
import {currentYear, developedBy, developedByLink} from "@/helpers/constants";
import { reactive, ref } from 'vue'
import { ForgetPasswordAPI } from '@/helpers/backend-api'
import { useAuthStore, useResetEmailOtp } from '@/stores/auth'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import router from '@/router'


const credentials = reactive({
  email: '',
});

const useOTPEmail = useResetEmailOtp()
const route = useRoute()
const query = route.query
const error = ref('')
const isLoading = ref(false)

const passwordFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/two-factor');
}

const handleForgetPassword = async () => {
  let user = {}
  try {
    user = await passwordFormSchema.validate(credentials)
  } catch (validationError: any) {
    error.value = validationError.message
    return
  }

  const plainData = JSON.parse(JSON.stringify(user))
  try {
    isLoading.value = true // Start loading
    const response = await ForgetPasswordAPI(plainData)
    if (response.status == true) {
      useOTPEmail.saveSession(plainData.email)
      redirectUser()
    } else {
      error.value = response.message
    }
  } catch (err: any) {
    error.value = 'Failed to reset password, Please try again'
  } finally {
    isLoading.value = false // End loading
  }
}
</script>
