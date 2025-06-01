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

        <h1 class="mb-2 h3">Update Password</h1>
        <p class="mb-0">
          Remember your new password?
          <router-link :to="{ name: 'auth.sign-in' }"> Sign in</router-link>
        </p>

        <b-form class="mt-4 text-start" @submit.prevent="handleUpdatePassword">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

          <div class="mb-3">
            <PasswordInput v-model="credentials.newPassword" name="newPassword" place-holder="Enter your new password" autocomplete="" />
          </div>

          <div class="mb-3">
            <PasswordInput v-model="credentials.confirmPassword" name="confirmPassword" place-holder="Confirm your new password" autocomplete="" />
          </div>

          <div>
            <b-button :disabled="isLoading" variant="primary" type="submit" class="w-100 mb-0">
              <span v-if="!isLoading">Update Password</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
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
import AuthLayout from '@/layouts/AuthLayout.vue';
import signin from '@/assets/images/element/signin.svg';
import logo from '@/assets/images/logo-icon.svg';
import PasswordInput from '@/components/PasswordInput.vue';
import { reactive, ref } from 'vue';
import { useAuthStore, useResetEmailOtp } from '@/stores/auth';
import * as yup from 'yup';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import { currentYear, developedBy, developedByLink } from '@/helpers/constants';
import { updatePasswordAPI } from '@/helpers/backend-api';

const credentials = reactive({
  newPassword: '',
  confirmPassword: ''
});

const useAuth = useAuthStore();
const route = useRoute();
const query = route.query;
const error = ref('');
const toast = useToast();
const isLoading = ref(false);

const updatePasswordFormSchema = yup.object({
  newPassword: yup.string().required('Please enter your new password'),
  confirmPassword: yup.string()
    .required('Please confirm your new password')
    .oneOf([yup.ref('newPassword')], 'Passwords must match') // Removed null from here
});

let useOTPEmail:any = useResetEmailOtp();
useOTPEmail = useOTPEmail.getData()

const handleUpdatePassword = async () => {
  let newPasswords = {}
  try {
    newPasswords = await updatePasswordFormSchema.validate(credentials)
  } catch (validationError: any) {
    error.value = validationError.message
    return
  }
  const plainData = JSON.parse(JSON.stringify(newPasswords))
  plainData.email = useOTPEmail;
  console.log(plainData);

  try {
    isLoading.value = true;
    const response = await updatePasswordAPI(plainData);

    if (response.status) {
      toast.success('Password updated successfully!'); 
      router.push({ name: 'auth.sign-in' }); 
    } else {
      error.value = response.message; 
    }
  } catch (validationError: any) {
    error.value = validationError.errors[0]; 
  } finally {
    isLoading.value = false; 
  }
}
</script>
