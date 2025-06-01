<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Update Password</h4>
    </b-card-header>

    <b-form class="card-body" @submit.prevent="handleUpdatePassword">
      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

      <div class="mb-3">
        <PasswordInput id="current-password" v-model="credentials.current_password" label="Current password"
          placeholder="Enter current password" autocomplete="current-password" />
      </div>
      <div class="mb-3">
        <PasswordInput id="new-password" v-model="credentials.new_password" label="Enter new password"
          placeholder="Enter new password" autocomplete="new-password" />
      </div>
      <div class="mb-3">
        <PasswordInput id="confirm-password" v-model="credentials.confirm_password" label="Confirm new password"
          placeholder="Confirm new password" autocomplete="new-password" />
      </div>
      <div class="text-end">
        <b-button :disabled="isLoading" variant="primary" type="submit" class="mb-0">
          <span v-if="!isLoading">Save Changes</span>
          <span v-else>
            <b-spinner small></b-spinner>
          </span>
        </b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import * as yup from 'yup';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification'
import router from '@/router';
import { UpdatePassword } from '@/helpers/backend-api';
import PasswordInput from '@/components/PasswordInput.vue';

const error = ref('');
const route = useRoute();
const query = route.query;
const isLoading = ref(false)
const toast = useToast()
const useAuth = useAuthStore();
let userDetails = useAuth.getUserData();
let userToken = useAuth.getUserToken();
console.log(userDetails);


const credentials = reactive({
  current_password: '',
  new_password: '',
  confirm_password: ''
});

const updatePasswordSchema = yup.object().shape({
  confirm_password: yup.string()
    .required('Please confirm your new password')
    .oneOf([yup.ref('new_password')], 'New & confirm passwords must match'),
  new_password: yup.string().required('Please enter your new password'),
  current_password: yup.string().required('Please enter your current password')
});

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`);
  }
  return router.push('/user/profile');
};

const handleUpdatePassword = async () => {
  let user = {};
  try {
    user = await updatePasswordSchema.validate(credentials);
    error.value = '';
  } catch (validationError: any) {
    error.value = validationError.message;
    return;
  }
  console.log(user);
  
  const plainData = JSON.parse(JSON.stringify(user));
  try {
    isLoading.value = true // Start loading
    const response = await UpdatePassword(plainData, userToken);
    if (response.status === true) {
      useAuth.saveSession(response.data, null, 30);
      redirectUser();
      toast.success('Successfully Update Changes!'); // Show toast success
    } else {
      error.value = response.message;
    }
  } catch (err: any) {
    error.value = 'Failed to update password. Please try again.';
  }finally {
    isLoading.value = false // End loading
  }
};
</script>
