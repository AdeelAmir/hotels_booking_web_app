<template>
  <div>
    <section class="p-xl-0">
      <b-container>
        <b-row class="d-flex justify-content-center align-items-center text-center vh-100">
          <b-col xl="8">
            <h6 class="text-primary">Coming Soon</h6>
            <h1>New website is on a roll!!</h1>
            <p class="mb-0">
              Hey, you! Booking is coming. We are doing our best to launch our website and we will
              be back soon.
            </p>

            <b-form class="mt-4">
              <h6>Notify me when the website is launched</h6>
              <b-col md="9" class="mx-auto border rounded-2 p-2">
                <div class="input-group">
                  <b-form-input class="border-0 me-1" type="email" placeholder="Enter your email" />
                  <b-button variant="primary" class="rounded-2 mb-0">Notify Me!</b-button>
                </div>
              </b-col>
            </b-form>

            <ul
              class="list-inline hstack flex-wrap gap-2 gap-lg-4 h6 justify-content-center mt-4 mb-0"
            >
              <li class="list-inline-item">
                <a class="text-facebook" href="#">
                  <font-awesome-icon :icon="faFacebookSquare" />
                  Facebook</a
                >
              </li>
              <li class="list-inline-item">
                <a class="text-instagram-gradient" href="#">
                  <v-icon name="fc-instagram" scale="3" class="text-google-icon d-flex" />
                  <font-awesome-icon :icon="faInstagramSquare" style="color: rgb(250, 126, 30)" />
                  Instagram</a
                >
              </li>
              <li class="list-inline-item">
                <a class="text-twitter" href="#">
                  <font-awesome-icon :icon="faTwitterSquare" />
                  Twitter</a
                >
              </li>
              <li class="list-inline-item">
                <a class="text-linkedin" href="#">
                  <font-awesome-icon :icon="faLinkedin" />
                  Linkedin</a
                >
              </li>
            </ul>
            <img :src="comingSoon" class="h-sm-300px h-xxl-400px mt-4" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import comingSoon from '@/assets/images/element/coming-soon.svg'
</script>
