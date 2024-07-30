<script setup>
import { profile } from "../../assets/index.js";
</script>

<template>
  <div
    class="flex justify-start items-center bg-charcoal py-4 px-5 gap-2.5 border-b-solid border-nav_border border-b-2"
  >
    <img :src="profile" alt="profile_image" class="w-9 h-9" />
    <h5 class="text-base font-medium text-not_white">Abhay Balakrishnan</h5>
  </div>
</template>

<style scoped></style>
