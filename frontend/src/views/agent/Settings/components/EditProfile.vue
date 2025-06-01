<template>
  <b-row class="g-4 pt-4">
    <b-col cols="12">
      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="card-header-title">Edit Profile</h5>
        </b-card-header>
        <b-card-body>
          <div class="mb-3">
            <b-form-group label="Name">
              <b-form-input v-model="userData.name" type="text" placeholder="Name" />
            </b-form-group>
          </div>
          <div class="mb-3">
            <label class="form-label">Profile picture</label>
            <div class="d-flex align-items-center">
              <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
                <span class="avatar avatar-xl">
                  <img
                    id="uploadfile-1-preview"
                    class="avatar-img rounded-circle border border-white border-3 shadow"
                    :src="avatar1"
                    alt=""
                  />
                </span>
              </label>
              <label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
              <b-form-file v-model="userData.avatar" id="uploadfile-1" class="d-none" />
            </div>
          </div>
          <div class="mb-3">
            <b-form-group label="Email id">
              <b-form-input
                v-model="userData.email"
                type="email"
                placeholder="Enter your email id"
              />
            </b-form-group>
          </div>
          <div class="mb-3">
            <b-form-group label="Mobile number">
              <b-form-input
                v-model="userData.mobile"
                type="tel"
                placeholder="Enter your mobile number"
              />
            </b-form-group>
          </div>
          <div class="mb-3">
            <b-form-group label="Location">
              <b-form-input
                v-model="userData.location"
                type="text"
                placeholder="Enter your location"
              />
            </b-form-group>
          </div>
          <div>
            <CustomFlatpicker
              id="birthday"
              label="Birthday"
              placeholder="Enter your birth-date"
              v-model="userData.dob"
              :options="{ dateFormat: 'd M Y' }"
            />
          </div>
          <div class="d-flex justify-content-end mt-4">
            <a href="#" class="btn text-secondary border-0 me-2">Discard</a>
            <a href="#" class="btn btn-primary">Save change</a>
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col md="6">
      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="card-header-title">Update Email</h5>
          <p class="mb-0 small">
            Your current email address is <span class="text-primary">example@gmail.com</span>
          </p>
        </b-card-header>
        <b-form class="card-body">
          <b-form-group label="Enter your new email id">
            <b-form-input type="email" placeholder="Enter your email id" />
          </b-form-group>

          <div class="text-end mt-3">
            <a href="#" class="btn btn-primary mb-0">Save Email</a>
          </div>
        </b-form>
      </b-card>
    </b-col>

    <b-col md="6">
      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="card-header-title">Update Password</h5>
          <p class="mb-0 small">
            Your current email address is <span class="text-primary">example@gmail.com</span>
          </p>
        </b-card-header>
        <b-form class="card-body">
          <div class="mb-3">
            <PasswordInput
              id="current-password"
              v-model="currentPassword"
              label="Enter current password"
              placeholder="Enter current password"
            />
          </div>
          <div class="mb-3">
            <PasswordInput
              id="new-password"
              v-model="newPassword"
              label="Enter new password"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <PasswordInput
              id="confirm-password"
              v-model="confirmPassword"
              label="Confirm new password"
              placeholder="Confirm new password"
            />
          </div>

          <div class="text-end mt-3">
            <a href="#" class="btn btn-primary mb-0">Change Password</a>
          </div>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import PasswordInput from '@/components/PasswordInput.vue'

const userData = reactive({
  name: 'Jacqueline Miller',
  avatar: [],
  email: 'hello@gmail.com',
  mobile: 222555666,
  location: 'New Hampshire',
  dob: '29 Aug 1994'
})

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
</script>
