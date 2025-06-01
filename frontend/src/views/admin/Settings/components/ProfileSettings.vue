<template>
  <b-card no-body class="shadow">
    <b-form class="card-body" @submit.prevent="handleUpdateSetting">
      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

      <div v-if="isLoading" class="d-flex justify-content-center mb-4">
        <b-spinner label="Loading settings..."></b-spinner>
      </div>

      <div v-else>
        <div class="mb-3">
          <b-form-group label="Admin Markup (%)">
            <b-form-input v-model="settingsData.adminMarkup" type="tel" placeholder="Enter admin markup fee" />
          </b-form-group>
        </div>
        <div class="mb-3">
          <b-form-group label="iVector Fee (%)">
            <b-form-input v-model="settingsData.iVectorFee" type="tel" placeholder="Enter ivector fee" />
          </b-form-group>
        </div>
        <div class="mb-3">
          <b-form-group label="Stripe Fee (%)">
            <b-form-input v-model="settingsData.stripeFee" type="tel" placeholder="Enter stripe fee" />
          </b-form-group>
        </div>
        <div class="mb-3">
          <b-form-group label="Cancellation Date Margin (%)">
            <b-form-input v-model="settingsData.cancelDateFee" type="tel" placeholder="Enter cancellation date margin" />
          </b-form-group>
        </div>
        <div class="mb-3">
          <b-form-group label="Exchange Rate Frequency (%)">
            <b-form-input v-model="settingsData.exchangeRate" type="tel" placeholder="Enter exchange rate frequency" />
          </b-form-group>
        </div>
        <div class="d-flex justify-content-end mt-4">
          <b-button :disabled="isLoading" variant="primary" type="submit" class="btn btn-primary">
            <span v-if="!isLoading">Save change</span>
            <span v-else>
              <b-spinner small></b-spinner>
            </span>
          </b-button>
        </div>
      </div>
    </b-form>
  </b-card>
</template>

<script lang="ts" setup>
import { getSettingsData, updateSettings } from '@/helpers/backend-api';
import { onMounted, reactive, ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useAuthStore, useSettingStore } from '@/stores/auth';
import * as yup from 'yup';

const error = ref('');
const toast = useToast();
const isLoading = ref(false); // Loading state for the loader
const useAuth = useAuthStore();
let userToken = useAuth.getUserToken();
const settingData = useSettingStore();

// Reactive object to hold the form values
const settingsData = reactive({
  adminMarkup: 0,
  iVectorFee: 0,
  stripeFee: 0,
  cancelDateFee: 0,
  exchangeRate: 0,
});

// Schema for form validation
const updateSettingSchema = yup.object().shape({
  adminMarkup: yup.string().required('Please add admin markup fee'),
  iVectorFee: yup.string().required('Please add ivector fee'),
  stripeFee: yup.string().required('Please add stripe fee'),
  cancelDateFee: yup.string().required('Please add cancellation date margin'),
  exchangeRate: yup.string().required('Please add exchange rate frequency'),
});

// Fetch settings on mounted
onMounted(async () => {
  isLoading.value = true; // Set loading to true when fetching starts

  // Check if settings data is available in Pinia store
  let storeSettings = settingData.getData();
  if (storeSettings) {
    // If data is found in store, map it to the reactive data
    settingsData.adminMarkup = storeSettings.adminCommission || 0;
    settingsData.iVectorFee = storeSettings.iVectorFee || 0;
    settingsData.stripeFee = storeSettings.stripeFee || 0;
    settingsData.cancelDateFee = storeSettings.cancellationDateMargin || 0;
    settingsData.exchangeRate = storeSettings.exchangeRateFrequency || 0;
    isLoading.value = false;
  } else {
    // If no data is found in the store, fetch from API
    try {
      const response = await getSettingsData(userToken);
      if (response.status) {
        const data = response.data;
        settingsData.adminMarkup = data.adminCommission || 0;
        settingsData.iVectorFee = data.iVectorFee || 0;
        settingsData.stripeFee = data.stripeFee || 0;
        settingsData.cancelDateFee = data.cancellationDateMargin || 0;
        settingsData.exchangeRate = data.exchangeRateFrequency || 0;

        // Save fetched data in the store for future use
        settingData.saveSession(response.data);
      } else {
        error.value = response.message;
      }
    } catch (err: any) {
      error.value = 'Failed to load settings, Please try again';
    } finally {
      isLoading.value = false; // Set loading to false once data is fetched
    }
  }
});

// Handle form submission to update settings
const handleUpdateSetting = async () => {
  let user = {};
  try {
    user = await updateSettingSchema.validate(settingsData);
    error.value = ''; // Clear any previous error
  } catch (validationError: any) {
    error.value = validationError.message;
    return;
  }

  const plainData = JSON.parse(JSON.stringify(user));
  console.log(user);
  try {
    isLoading.value = true; // Start loading spinner
    const response = await updateSettings(plainData, userToken);
    if (response.status === true) {
      settingData.saveSession(response.data); // Save updated settings to store
      toast.success('Settings updated successfully!');
    } else {
      error.value = response.message;
    }
  } catch (err: any) {
    error.value = 'Failed to update settings. Please try again.';
  } finally {
    isLoading.value = false; // End loading spinner
  }
};
</script>
