<template>
  <b-card no-body class="bg-light">
    <b-dropdown
      variant="link"
      no-caret
      toggle-class="p-0 m-0"
      menu-class="dropdown-w-sm min-w-auto shadow rounded"
      class="position-absolute top-0 end-0 m-3"
    >
      <template #button-content>
        <button class="arrow-none btn btn-sm btn-white btn-round lh-lg mb-0" role="button">
          <BIconThreeDots />
        </button>
      </template>

      <b-dropdown-item href="">
        <BIconPencilSquare class="fa-fw me-2" />
        Edit
      </b-dropdown-item>

      <b-dropdown-item href="">
        <BIconTrash class="fa-fw me-2" />
        Remove
      </b-dropdown-item>
    </b-dropdown>

    <b-card-body class="text-center">
      <div class="avatar avatar-xl flex-shrink-0 mb-3">
        <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
      </div>

      <h5 class="mb-2">Jacqueline Miller</h5>
      <ul class="list-inline small mb-0">
        <li
          v-for="(_star, idx) in new Array(Math.floor(rating))"
          :key="idx"
          class="list-inline-item me-1 small"
        >
          <font-awesome-icon :icon="faStarFill" class="text-warning" />
        </li>
        <li v-if="!Number.isInteger(rating)" class="list-inline-item me-1 small">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <template v-if="rating < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(rating))"
            :key="idx"
            class="list-inline-item me-0 small"
          >
            <font-awesome-icon :icon="faStar" class="text-warning"></font-awesome-icon>
          </li>
        </template>
      </ul>
    </b-card-body>

    <div class="card-footer bg-light border-top">
      <h6 class="mb-3">Contact Details</h6>

      <div class="d-flex align-items-center mb-3">
        <div class="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
          <BIconEnvelopeFill />
        </div>
        <div class="ms-2">
          <small>Email id</small>
          <h6 class="fw-normal small mb-0">
            <router-link to="mailto:hello@gmail.com">hello@gmail.com</router-link>
          </h6>
        </div>
      </div>

      <div class="d-flex align-items-center mb-3">
        <div class="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
          <BIconTelephoneFill />
        </div>
        <div class="ms-2">
          <small>Phone</small>
          <h6 class="fw-normal small mb-0">
            <router-link to="">+1(404) 586-854</router-link>
          </h6>
        </div>
      </div>

      <div class="d-flex align-items-center mb-3">
        <div class="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
          <BIconGeoAltFill />
        </div>
        <div class="ms-2">
          <small>Address</small>
          <h6 class="fw-normal small mb-0">225 Cherry Street #56, New York</h6>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
          <BIconSkype />
        </div>
        <div class="ms-2">
          <small>Skype</small>
          <h6 class="fw-normal small mb-0">@Jacqueline56</h6>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import avatar5 from '@/assets/images/avatar/05.jpg'
import { faStar as faStarFill, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {
  BIconEnvelopeFill,
  BIconGeoAltFill,
  BIconPencilSquare,
  BIconSkype,
  BIconTelephoneFill,
  BIconThreeDots,
  BIconTrash
} from 'bootstrap-icons-vue'

const rating = 4.5
</script>
