<template>
  <b-card no-body class="shadow mb-4">
    <b-card-header class="border-bottom p-3">
      <h5 class="card-header-title mb-0">Dark - Light Mode Settings</h5>
    </b-card-header>

    <b-card-body>
      <div class="hstack gap-2 flex-wrap">
        <div
          @click="useLayout.setTheme('light')"
          class="form-check form-check-inline align-items-center theme-icon-active"
        >
          <input
            v-model="theme"
            class="form-check-input mode-switch"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="light"
          />
          <label class="form-check-label" for="inlineRadio1">
            <img :src="lightImg" class="rounded shadow w-80px" alt="" />
          </label>
          <div class="text-center mt-1 small">Light</div>
        </div>
        <div @click="useLayout.setTheme('dark')" class="form-check form-check-inline">
          <input
            v-model="theme"
            class="form-check-input mode-switch"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="dark"
          />
          <label class="form-check-label" for="inlineRadio2">
            <img :src="darkImg" class="rounded shadow w-80px" alt="" />
          </label>
          <div class="text-center mt-1 small">Dark</div>
        </div>
        <div @click="useLayout.setTheme('auto')" class="form-check form-check-inline">
          <input
            v-model="theme"
            class="form-check-input mode-switch"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="auto"
          />
          <label class="form-check-label" for="inlineRadio3">
            <img :src="defaultImg" class="rounded shadow w-80px" alt="" />
          </label>
          <div class="text-center mt-1 small">System Setting</div>
        </div>
      </div>

      <p class="mb-0 mt-3 small">
        <b>Note:</b> This is just UI of Theme mode setting. This is not working functionality.
      </p>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import darkImg from '@/assets/images//element/d-dark.svg'
import defaultImg from '@/assets/images//element/d-default.svg'
import lightImg from '@/assets/images//element/d-light.svg'
import { useLayoutStore } from '@/stores/layout'
import { ref } from 'vue'

const useLayout = useLayoutStore()

const theme = ref(useLayout.theme)
</script>
