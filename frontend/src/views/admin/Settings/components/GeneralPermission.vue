<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <b-card-title tag="h5" class="mb-0">General Permission</b-card-title>
    </b-card-header>

    <b-card-body class="vstack gap-4">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Notify on updates and activity</h6>
          <small>You'll be notified when anyone shares a report or invite you to a projects</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox defaultChecked />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Send weekly digest</h6>
          <small>A weekly update on changes in theme statement and more</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy7" />
        </div>
      </div>

      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">Collaborators</h6>
          <small>I would like to receive booking assistance reminders</small>
        </div>

        <div class="form-check form-switch form-check-md mb-0">
          <b-form-checkbox id="checkPrivacy8" />
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
