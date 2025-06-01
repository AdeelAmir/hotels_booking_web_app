<template>
  <b-card no-body class="shadow mb-4">
    <b-card-header class="border-bottom">
      <b-card-title tag="h5" class="mb-0">Email notification</b-card-title>
    </b-card-header>

    <b-card-body class="vstack gap-4">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">News and updates</h6>
          <small>News about product and feature updates</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy1" defaultChecked />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Tips and tutorials</h6>
          <small>Tips on getting more out of unlimited</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy2" defaultChecked />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">User research</h6>
          <small>Tips on getting more out of unlimited</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy3" />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Comments</h6>
          <small>Comments on your post and replies to comments</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy4" />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Reminders</h6>
          <small>I would like to receive booking assistance reminders</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy5" />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<style scoped>
.form-check {
  padding-left: 0 !important;
}
</style>
