<template>
  <div class="mainCard">
    <b-card no-body class="card-img-scale overflow-hidden bg-transparent cardBox">
      <div class="card-img-scale-wrapper rounded-3" @click="handleImageClick">
        <img :src="image" class="card-img" alt="hotel image" />
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

// Emit event when image is clicked
const emit = defineEmits();
const props = defineProps({
  image: {
    type: String,
    required: true
  }
});

const handleImageClick = () => {
  emit('image-click');  // Emit custom event when image is clicked
}
</script>

<style>
.card-img {
  height: 300px;
  object-fit: cover;
}

.mainCard .tns-controls {
  opacity: 0; 
  transition: opacity 0.1s ease-in-out; 
}

.card-img-scale-wrapper:hover .tns-controls {
  opacity: 1; 
}
.card-img-scale-wrapper:hover .tns-controls button{
  background-color: #4052d3 !important; 
}
</style>
