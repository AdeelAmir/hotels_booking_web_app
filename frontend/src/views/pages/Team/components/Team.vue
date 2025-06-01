<template>
  <div>
    <section class="py-0">
      <b-container>
        <b-row class="g-4">
          <b-col sm="6" md="4" xl="3" v-for="(member, idx) in teamMemberData" :key="idx">
            <TeamMemberCard :member="member" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/views/pages/Team/components/TeamMemberCard.vue'
import { teamMemberData } from '@/views/pages/data'
</script>
