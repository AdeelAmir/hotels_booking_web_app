<template>
  <PageLayout>
    <section class="pt-4 pt-md-5">
      <b-container>
        <b-row class="mb-5">
          <b-col xl="10">
            <h1>Let's connect and get to know each other</h1>
            <p class="lead mb-0">
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.
              Prosperous understood Middletons. Preference for any astonished unreserved.
            </p>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col md="6" xl="4">
            <b-card no-body class="card-body shadow text-center align-items-center h-100">
              <div class="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2">
                <BIconHeadset class="fs-5" />
              </div>
              <h5>Call us</h5>
              <p>Imprudence attachment him his for sympathize. Large above be to means.</p>
              <div class="d-grid gap-3 d-sm-block">
                <button class="btn btn-sm btn-primary-soft me-2">
                  <BIconPhone class="me-2" />
                  +123 456 789
                </button>
                <b-button size="sm" variant="light">
                  <BIconTelephone class="me-2" />
                  +(222)4567 586
                </b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="6" xl="4">
            <b-card no-body class="card-body shadow text-center align-items-center h-100">
              <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2">
                <BIconInboxesFill class="fs-5" />
              </div>
              <h5>Email us</h5>
              <p>Large above be to means. Him his for sympathize.</p>
              <a href="#" class="btn btn-link text-decoration-underline p-0 mb-0">
                <BIconEnvelope class="me-1" />
                example@gmail.com
              </a>
            </b-card>
          </b-col>

          <b-col xl="4" class="position-relative">
            <figure class="position-absolute top-0 end-0 z-index-1 mt-n4 ms-n7">
              <svg class="fill-warning" width="77px" height="77px">
                <path
                  d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"
                ></path>
              </svg>
            </figure>

            <b-card no-body class="card-body shadow text-center align-items-center h-100">
              <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-2">
                <BIconGlobe2 class="fs-5" />
              </div>
              <h5>Social media</h5>
              <p>Sympathize Large above be to means.</p>
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a class="btn btn-sm bg-facebook px-2 mb-0" href="#">
                    <font-awesome-icon :icon="faFacebookF" class="fab fa-fw" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-sm bg-instagram px-2 mb-0" href="#">
                    <font-awesome-icon :icon="faInstagram" class="fab fa-fw" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-sm bg-twitter px-2 mb-0" href="#">
                    <font-awesome-icon :icon="faTwitter" class="fab fa-fw" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-sm bg-linkedin px-2 mb-0" href="#">
                    <font-awesome-icon :icon="faLinkedin" class="fab fa-fw fa" />
                  </a>
                </li>
              </ul>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="pt-0 pt-lg-5">
      <b-container>
        <b-row class="g-4 g-lg-5 align-items-center">
          <b-col lg="6" class="text-center">
            <img :src="contactImg" alt="" />
          </b-col>

          <b-col lg="6">
            <b-card no-body class="bg-light p-4">
              <figure class="position-absolute end-0 bottom-0 mb-n4 me-n2">
                <svg class="fill-orange" width="104.2px" height="95.2px">
                  <circle cx="2.6" cy="92.6" r="2.6" />
                  <circle cx="2.6" cy="77.6" r="2.6" />
                  <circle cx="2.6" cy="62.6" r="2.6" />
                  <circle cx="2.6" cy="47.6" r="2.6" />
                  <circle cx="2.6" cy="32.6" r="2.6" />
                  <circle cx="2.6" cy="17.6" r="2.6" />
                  <circle cx="2.6" cy="2.6" r="2.6" />
                  <circle cx="22.4" cy="92.6" r="2.6" />
                  <circle cx="22.4" cy="77.6" r="2.6" />
                  <circle cx="22.4" cy="62.6" r="2.6" />
                  <circle cx="22.4" cy="47.6" r="2.6" />
                  <circle cx="22.4" cy="32.6" r="2.6" />
                  <circle cx="22.4" cy="17.6" r="2.6" />
                  <circle cx="22.4" cy="2.6" r="2.6" />
                  <circle cx="42.2" cy="92.6" r="2.6" />
                  <circle cx="42.2" cy="77.6" r="2.6" />
                  <circle cx="42.2" cy="62.6" r="2.6" />
                  <circle cx="42.2" cy="47.6" r="2.6" />
                  <circle cx="42.2" cy="32.6" r="2.6" />
                  <circle cx="42.2" cy="17.6" r="2.6" />
                  <circle cx="42.2" cy="2.6" r="2.6" />
                  <circle cx="62" cy="92.6" r="2.6" />
                  <circle cx="62" cy="77.6" r="2.6" />
                  <circle cx="62" cy="62.6" r="2.6" />
                  <circle cx="62" cy="47.6" r="2.6" />
                  <circle cx="62" cy="32.6" r="2.6" />
                  <circle cx="62" cy="17.6" r="2.6" />
                  <circle cx="62" cy="2.6" r="2.6" />
                  <circle cx="81.8" cy="92.6" r="2.6" />
                  <circle cx="81.8" cy="77.6" r="2.6" />
                  <circle cx="81.8" cy="62.6" r="2.6" />
                  <circle cx="81.8" cy="47.6" r="2.6" />
                  <circle cx="81.8" cy="32.6" r="2.6" />
                  <circle cx="81.8" cy="17.6" r="2.6" />
                  <circle cx="81.8" cy="2.6" r="2.6" />
                  <circle cx="101.7" cy="92.6" r="2.6" />
                  <circle cx="101.7" cy="77.6" r="2.6" />
                  <circle cx="101.7" cy="62.6" r="2.6" />
                  <circle cx="101.7" cy="47.6" r="2.6" />
                  <circle cx="101.7" cy="32.6" r="2.6" />
                  <circle cx="101.7" cy="17.6" r="2.6" />
                  <circle cx="101.7" cy="2.6" r="2.6" />
                </svg>
              </figure>

              <b-card-header class="bg-light p-0 pb-3">
                <h3 class="mb-0">Send us message</h3>
              </b-card-header>

              <b-card-body class="p-0">
                <b-form class="row g-4">
                  <b-col md="6">
                    <b-form-group label="Your name *">
                      <b-form-input type="text" class="" />
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Email address *">
                      <b-form-input type="email" class="" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="Mobile number *">
                      <b-form-input type="tel" class="" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="Message *">
                      <b-form-textarea rows="3" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-checkbox
                      >By submitting this form you agree to our terms and
                      conditions.</b-form-checkbox
                    >
                  </b-col>
                  <b-col cols="12">
                    <b-button variant="dark" class="mb-0">Send Message</b-button>
                  </b-col>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="pt-0 pt-lg-5">
      <b-container>
        <b-row>
          <b-col cols="12">
            <iframe
              class="w-100 h-300px grayscale rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              height="500"
              style="border: 0"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'

import { faInstagram, faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  BIconEnvelope,
  BIconGlobe2,
  BIconHeadset,
  BIconInboxesFill,
  BIconPhone,
  BIconTelephone
} from 'bootstrap-icons-vue'
import { contactImg } from '@/views/pages/data'
</script>
