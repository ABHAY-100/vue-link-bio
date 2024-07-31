<script setup>
import { profile } from "../../assets/index.js";
</script>

<template>
  <div
    class="flex justify-start items-center bg-charcoal py-4 px-5 gap-2.5 border-b-solid border-nav_border border-b-2 absolute w-full top-0 left-0"
  >
    <img :src="profile" alt="profile_image" class="w-9 h-9" />
    <h5 class="text-base font-medium text-not_white max-md:hidden">Abhay Balakrishnan</h5>
  </div>
</template>

<style scoped></style>
