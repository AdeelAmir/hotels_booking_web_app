<template>
  <AuthLayout>
    <b-col lg="6" class="d-md-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="forgotPass" alt="" />
      </div>
      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="col-lg-6 order-1">
      <div class="p-4 p-sm-7">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Two Factor Authentication</h1>
        <p class="mb-sm-0">We have to send a code to <b>{{ email }}</b></p>

        <b-form class="mt-sm-4" @submit.prevent="handleSubmit">
          <p class="mb-1">Enter the code we have sent you:</p>
          <div class="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-2">
            <b-form-input
              v-model="otp[0]"
              type="text"
              maxlength="1"
              class="text-center p-3"
              @input="focusNext(0)"
            />
            <b-form-input
              v-model="otp[1]"
              type="text"
              maxlength="1"
              class="text-center p-3"
              @input="focusNext(1)"
            />
            <b-form-input
              v-model="otp[2]"
              type="text"
              maxlength="1"
              class="text-center p-3"
              @input="focusNext(2)"
            />
            <b-form-input
              v-model="otp[3]"
              type="text"
              maxlength="1"
              class="text-center p-3"
              @input="focusNext(3)"
            />
          </div>

          <div class="d-sm-flex justify-content-between small mb-4">
            <span>Don't get a code?</span>
            <a href="#" class="btn btn-sm btn-link p-0 text-decoration-underline mb-0">
              Click to resend
            </a>
          </div>

          <div>
            <b-button :disabled="isLoading" variant="primary" type="submit" class="w-100 mb-0">
              <span v-if="!isLoading">Verify and Process</span>
              <span v-else>
                <b-spinner small></b-spinner>
              </span>
            </b-button>
          </div>

          <div class="text-primary-hover mt-3 text-center">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body">{{ developedBy }}</a>.
          </div>
        </b-form>
        <div v-if="error" class="text-danger text-center">{{ error }}</div>
      </div>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import forgotPass from '@/assets/images/element/forgot-pass.svg';
import logo from '@/assets/images/logo-icon.svg';
import { currentYear, developedBy, developedByLink } from "@/helpers/constants";
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import { verifyOTPCode } from '@/helpers/backend-api';
import router from '@/router';
import { useResetEmailOtp } from '@/stores/auth';

let useOTPEmail:any = useResetEmailOtp();
useOTPEmail = useOTPEmail.getData()
const route = useRoute();
const isLoading = ref(false);
const toast = useToast();
const error = ref('');
const email = ref(useOTPEmail || 'example@gmail.com');
const query = route.query;
const otp = ref(['', '', '', '']); 

const handleSubmit = async () => {
  try {
    isLoading.value = true; 
    const otpCode = otp.value.join(''); 
    let data ={
      otp :otpCode,
      email:useOTPEmail
    }
    
    const response = await verifyOTPCode(data); 
    if (response.status === true) {
      redirectUser();
      toast.success('OTP verified successfully!'); 
    } else {
      error.value = response.message;
    }
  } catch (err: any) {
    error.value = 'Failed to verify OTP, please try again';
  } finally {
    isLoading.value = false; // End loading
  }
};

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`);
  }
  return router.push('/update-password');
};

// Focus the next input when a digit is entered
const focusNext = (index: number) => {
  if (otp.value[index].length >= 1 && index < otp.value.length - 1) {
    const nextInput = document.querySelectorAll('input[type="text"]')[index + 1] as HTMLInputElement;
    nextInput?.focus();
  }
};
</script>
