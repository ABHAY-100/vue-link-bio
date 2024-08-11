<script setup>
import { ref, onMounted } from 'vue';
import Home from './views/Home.vue';
import LoadingSpinner from './components/common/Loading.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<template>
  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <div v-else>
    <Home />
  </div>
</template>
