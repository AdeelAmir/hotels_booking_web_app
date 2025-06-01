<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Notification Settings</h4>
    </b-card-header>

    <b-form class="card-body">
      <div class="mb-4">
        <label class="form-label">Newsletter<span class="text-danger">*</span></label>
        <div class="d-flex gap-2 gap-sm-4 flex-wrap">
          <div class="radio-bg-light">
            <b-form-radio name="flexRadioDefault" id="flexRadioDefault1" checked>
              Daily
            </b-form-radio>
          </div>
          <div class="radio-bg-light">
            <b-form-radio name="flexRadioDefault" id="flexRadioDefault2">
              Twice a week
            </b-form-radio>
          </div>
          <div class="radio-bg-light">
            <b-form-radio name="flexRadioDefault" id="flexRadioDefault3"> Weekly </b-form-radio>
          </div>
          <div class="radio-bg-light">
            <b-form-radio name="flexRadioDefault" id="flexRadioDefault4"> Never </b-form-radio>
          </div>
        </div>
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy1"
          >Notify me via email when logging in</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy1" checked />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy2"
          >I would like to receive booking assist reminders</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy2" checked />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy3"
          >I would like to receive emails about Booking promotions</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy3" checked />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy7"
          >I would like to know about information and offers related to my upcoming trip</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy7" checked />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy4"
          >Show your profile publicly</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy4" />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy6"
          >Send SMS confirmation for all online payments</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy6" />
      </div>

      <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
        <label class="form-check-label ps-0 pe-4" for="checkPrivacy5"
          >Check which device(s) access your account</label
        >
        <input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy5" checked />
      </div>

      <div class="d-sm-flex justify-content-end">
        <b-button size="sm" variant="primary" class="me-2 mb-0">Save changes </b-button>
        <a href="#" class="btn btn-sm btn-outline-secondary mb-0">Cancel</a>
      </div>
    </b-form>
  </b-card>
</template>

<script setup lang="ts"></script>
