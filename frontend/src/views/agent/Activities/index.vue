<template>
  <AgentLayout>
    <section class="pt-0">
      <b-container class="vstack gap-4">
        <b-row>
          <b-col cols="12">
            <h1 class="fs-4 mb-0">
              <BIconBell class="fa-fw me-1" />
              Activities
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-card no-body class="border">
              <b-card-header class="border-bottom">
                <h5 class="card-header-title">Recent Activities</h5>
              </b-card-header>

              <b-card-body>
                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <div class="avatar-img rounded-circle text-bg-success">
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold"
                          ><BIconCheckLg class="fs-5"
                        /></span>
                      </div>
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">
                        Your listing
                        <a href="#" class="text-primary">Courtyard by Marriott New York </a>has been
                        approved
                      </h6>
                      <small>2 Days ago</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <router-link to="#" class="btn btn-sm btn-primary-soft">View</router-link>
                    <router-link to="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </router-link>
                  </div>
                </div>
                <hr />

                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="avatar4" alt="" />
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">
                        Louis Ferguson booked your
                        <span class="fw-bold">Hotel Baljees Regency </span>Hotel room
                      </h6>
                      <small class="me-3">15 Nov 2022</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary-soft">View</a>
                    <a href="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </a>
                  </div>
                </div>

                <hr />

                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <div class="avatar-img rounded-circle text-bg-info">
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold"
                          ><BIconChat class="fs-5"
                        /></span>
                      </div>
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">
                        Someone left a review on
                        <span class="fw-bold">Park Plaza Lodge Hotel </span> listing
                      </h6>
                      <small class="me-3">13 Nov 2022</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary-soft">View</a>
                    <a href="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </a>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <div class="avatar-img rounded-circle text-bg-success">
                        <span class="position-absolute top-50 start-50 translate-middle fw-bold"
                          ><BIconCheckLg class="fs-5"
                        /></span>
                      </div>
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">Your payment received successfully</h6>
                      <small class="me-3">13 Nov 2022</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary-soft">View</a>
                    <a href="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </a>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="avatar5" alt="" />
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">
                        Amanda Reed Cancel booking in
                        <router-link to="#" class="text-primary"
                          >Courtyard by Marriott New York
                        </router-link>
                        hotel
                      </h6>
                      <small class="me-3">11 Nov 2022</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary-soft">View</a>
                    <a href="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </a>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="avatar9" alt="" />
                    </div>

                    <div class="ms-3">
                      <h6 class="fw-light m-0">
                        Lori Stevens booked your
                        <span class="fw-bold">Pride moon Village Resort & Spa </span>Hotel room
                      </h6>
                      <small class="me-3">10 Nov 2022</small>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-2 mt-sm-0">
                    <a href="#" class="btn btn-sm btn-primary-soft">View</a>
                    <a href="#" class="btn btn-sm btn-danger-soft">
                      <BIconTrash />
                    </a>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </AgentLayout>
</template>

<script lang="ts" setup>
import AgentLayout from '@/layouts/AgentLayout.vue'
import { BIconBell, BIconTrash, BIconCheckLg, BIconChat } from 'bootstrap-icons-vue'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
</script>
