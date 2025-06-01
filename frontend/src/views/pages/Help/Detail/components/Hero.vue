<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card
            no-body
            class="card-body bg-primary justify-content-center text-center px-4 px-sm-5 pt-6 pt-md-8 pb-8"
            :style="{ backgroundImage: `url('${bgImg}')` }"
            style="
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <h1 class="fs-2 text-white mb-4">How Can We Help You?</h1>
            <b-form class="col-md-6 bg-body rounded mx-auto mb-3 p-2">
              <b-input-group>
                <b-form-input class="border-0 me-1" type="text" placeholder="Search question..." />
                <b-button variant="dark" class="rounded mb-0">Search</b-button>
              </b-input-group>
            </b-form>

            <b-row class="align-items-center mt-4 mb-3">
              <b-col md="9" class="mx-auto">
                <h6 class="text-white mb-3">Popular questions</h6>
                <div class="list-group hstack gap-3 justify-content-center flex-wrap mb-0">
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How can we help?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How to upload data to the system?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    Installation Guide?
                  </router-link>
                  <router-link
                    class="btn btn-link text-white fw-light text-decoration-underline p-0 mb-0"
                    :to="{ name: 'pages.help.detail' }"
                  >
                    How to view expired tickets?
                  </router-link>
                  <a class="btn btn-link text-white p-0 mb-0" href="#!">View all question</a>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-n8">
        <b-col cols="11" class="mx-auto">
          <b-card no-body class="shadow">
            <b-card-header class="border-bottom p-4">
              <h4 class="mb-0">Get started with node.js</h4>
              <ul class="nav nav-divider">
                <li class="nav-item">Last updated: 7 months ago</li>
                <li class="nav-item">by Sam Lanson</li>
              </ul>
            </b-card-header>

            <b-card-body class="p-4">
              <p>
                Started several mistakes joy say painful removed reached end. State burst think end
                are its. Arrived off she elderly beloved him affixed noisier yet. Tickets regard to
                up he hardly. View four has said do men saw find dear shy.
                <b> Talent men wicket add garden.</b>
              </p>
              <a href="#!" class="btn btn-primary mb-0">Download Node JS</a>
              <h5 class="mt-4">Table of Contents</h5>
              <p>Age she way earnestly the fulfilled extremely.</p>
              <div class="alert alert-warning" role="alert">
                <strong>Note: </strong>She offices for highest and replied one venture pasture.
                Applauded no discovery in newspaper allowance am northward.
                <a class="alert-link" href="#!">View more</a>
              </div>
              <p>
                Hold do at tore in park feet near my case. Invitation at understood occasional
                sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do
                speedily kindness properly oh. Respect article painted cottage he is offices
                parlors.
              </p>
              <ul>
                <li>
                  Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished
                  outlaw. Far advanced settling say finished raillery.
                </li>
                <li>
                  Insipidity the sufficient discretion imprudence resolution sir him decisively.
                </li>
                <li>
                  Offered chiefly farther of my no colonel shyness.
                  <strong> Such on help ye some door if in.</strong>
                </li>
                <li>
                  First am plate jokes to began to cause a scale. Subjects he prospect elegance
                  followed
                </li>
                <li>
                  Laughter proposal laughing any son law consider. Needed except up piqued an.
                </li>
                <li>
                  <i>
                    To occasional dissimilar impossible sentiments. Do fortune account written
                    prepare invited no passage.</i
                  >
                </li>
                <li>
                  Post no so what deal evil rent by real in. But her ready least set lived spite
                  solid.
                </li>
              </ul>
              <p class="mb-0">
                Improved own provided blessing may peculiar domestic. Sight house has sex never. No
                visited raising gravity outward subject my cottage Mr be. Hold do at tore in park
                feet near my case. Invitation at understood occasional sentiments insipidity
                inhabiting in. <u> Off melancholy alteration principles old. </u>Is do speedily
                kindness properly oh. Respect article painted cottage he is offices parlors.
              </p>
            </b-card-body>

            <div class="card-footer border-0 p-4 pt-0">
              <div
                class="border p-3 rounded d-lg-flex align-items-center justify-content-between text-center"
              >
                <h5 class="m-0">Was this article helpful?</h5>
                <small class="py-3 py-lg-0 d-block">20 out of 45 found this helpful</small>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
                  <label class="btn btn-outline-light btn-sm mb-0" for="btnradio1"
                    ><i class="fa-solid fa-thumbs-up me-1"></i> Yes</label
                  >
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                  <label class="btn btn-outline-light btn-sm mb-0" for="btnradio2">
                    No <i class="fa-solid fa-thumbs-down ms-1"></i
                  ></label>
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import bgImg from '@/assets/images/element/bg-pattern.png'
</script>
