<script setup>
import { portfolioContent } from "../../constants/index.js";

const user = portfolioContent.user;
</script>

<template>
  <div
    class="flex justify-start items-center bg-charcoal py-4 px-5 gap-2.5 border-b-solid border-nav_border border-b-2 fixed w-full top-0 left-0 z-10"
    data-aos="fade-down"
  >
    <div
      class="flex items-center justify-start gap-2.5 cursor-pointer"
      @click="redirectOnClick"
    >
      <img :src="user.profile_image" alt="profile_image" class="w-9 h-9" />
      <h5 class="text-base font-medium text-not_white max-md:hidden">
        {{ user.first_name }} {{ user.last_name }}
      </h5>
    </div>
  </div>
</template>
