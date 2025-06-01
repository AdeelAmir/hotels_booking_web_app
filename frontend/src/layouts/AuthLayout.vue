<template>
  <section class="vh-xxl-100">
    <b-container class="h-100 d-flex px-0 px-sm-4">
      <b-row class="justify-content-center align-items-center m-auto">
        <b-col cols="12">
          <div class="shadow bg-mode rounded-3 overflow-hidden">
            <b-row class="g-0 align-items-center">
              <slot />
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts"></script>
