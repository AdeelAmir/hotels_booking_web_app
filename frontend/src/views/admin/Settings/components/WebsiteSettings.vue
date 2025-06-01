<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Website Settings</h5>
    </b-card-header>

    <b-card-body>
      <b-form class="row g-4 align-items-center">
        <b-col xl="6">
          <b-form-group label="Site Name">
            <b-form-input type="text" placeholder="Site Name" />
            <b-form-text>Enter Website Name. It Display in Website.</b-form-text>
          </b-form-group>
        </b-col>

        <b-col xl="6">
          <b-form-group label="Site Copyrights">
            <b-form-input type="text" placeholder="Site Copyrights" />
            <b-form-text>Using for Contact and Send Email</b-form-text>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Site Email">
            <b-form-input type="email" placeholder="Site Email" />
            <b-form-text>For Copyrights Text</b-form-text>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Site Description">
            <b-form-textarea row="3" />
            <b-form-text
              >For write brief description of your organization, or a Website.</b-form-text
            >
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Contact Phone">
            <b-form-input type="tel" placeholder="Contact Phone" />
            <b-form-text>Using for Contact and Support</b-form-text>
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <b-form-group label="Support Email">
            <b-form-input type="email" placeholder="Support Email" />
            <b-form-text>For Support Email</b-form-text>
          </b-form-group>
        </b-col>

        <b-col lg="6">
          <label class="form-label">Allow Registration</label>
          <div class="d-sm-flex">
            <div class="radio-bg-light me-4">
              <b-form-radio name="flexRadioDefault" id="flexRadioDefault1" checked>
                Enable
              </b-form-radio>
            </div>
            <div class="radio-bg-light me-4">
              <b-form-radio name="flexRadioDefault" id="flexRadioDefault2"> Disable </b-form-radio>
            </div>
            <div class="radio-bg-light">
              <b-form-radio name="flexRadioDefault" id="flexRadioDefault3">
                On Request
              </b-form-radio>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Contact Address">
            <b-form-textarea row="3" />
            <b-form-text>Enter support Address</b-form-text>
          </b-form-group>
        </b-col>

        <div class="d-sm-flex justify-content-end">
          <b-button variant="primary" type="button" class="mb-0">Update</b-button>
        </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts"></script>
