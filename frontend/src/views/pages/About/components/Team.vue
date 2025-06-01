<template>
  <div>
    <section class="pt-0">
      <b-container>
        <b-row class="mb-4">
          <b-col cols="12">
            <h2 class="mb-0">Our Team</h2>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col sm="6" lg="3" v-for="(member, idx) in teamMemberData.slice(0, 4)" :key="idx">
            <TeamMemberCard :member="member" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/views/pages/About/components/TeamMemberCard.vue'
import { teamMemberData } from '@/views/pages/data'
</script>
