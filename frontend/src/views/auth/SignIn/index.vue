<template>
  <AuthLayout>
    <b-col lg="6" class="d-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="signin" alt="" />
      </div>
      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="order-1">
      <div class="p-4 p-sm-7">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Welcome back</h1>
        <p class="mb-0">
          New here?
          <router-link :to="{ name: 'auth.sign-up' }"> Create an account</router-link>
        </p>

        <b-form class="mt-4 text-start" @submit.prevent="handleSignIn">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

          <div class="mb-3">
            <b-form-group label="Enter email">
              <b-form-input v-model="credentials.email" type="email" name="email" autocomplete="" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <PasswordInput v-model="credentials.password" name="password" place-holder="" autocomplete="" />
          </div>

          <div class="mb-3 d-sm-flex justify-content-between">
            <div>
              <b-form-checkbox>Remember me?</b-form-checkbox>
            </div>
            <router-link :to="{ name: 'auth.forgot-password' }">Forgot password?</router-link>
          </div>

          <div>
            <b-button :disabled="isLoading" variant="primary" type="submit" class="w-100 mb-0">
              <span v-if="!isLoading">Login</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p class="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
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

import signin from '@/assets/images/element/signin.svg'
import logo from '@/assets/images/logo-icon.svg'
import PasswordInput from '@/components/PasswordInput.vue'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import * as yup from 'yup'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
import { loginFormAPIs } from '@/helpers/backend-api'

const credentials = reactive({
  email: '',
  password: ''
})

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query
const error = ref('')
const toast = useToast()
const isLoading = ref(false)

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/');
}

const handleSignIn = async () => {
  let user = {}
  try {
    user = await loginFormSchema.validate(credentials)
  } catch (validationError: any) {
    error.value = validationError.message
    return
  }

  const plainData = JSON.parse(JSON.stringify(user))
  try {
    isLoading.value = true // Start loading
    const response = await loginFormAPIs(plainData)
    if (response.status == true) {
      useAuth.saveSession(response.data, response.accessToken, 30)
      redirectUser()
      toast.success('Successfully logged in!'); // Show toast success
    } else {
      error.value = response.message
    }
  } catch (err: any) {
    error.value = 'Failed to sign in, Please try again'
  } finally {
    isLoading.value = false // End loading
  }
}
</script>
