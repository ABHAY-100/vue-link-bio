<script setup>
import { signature } from "../../assets/index.js";
</script>

<template>
  <div class="w-[480px] max-md:w-full mx-auto gap-[40px] flex flex-col font-medium">
    <div class="flex flex-col items-center justify-center w-full text-sm text-normal">
        <p class="text-button_text">Thanks for visiting.</p>
        <p class="text-[#545454]">Stay awesome.</p>
    </div>
    <img :src="signature" alt="Abhay" class="mx-auto">
    <div class="text-[12px] text-just_gray text-center">
        <p>© 2024 Made by Abhay <br /> All Rights Reserved</p>
    </div>
  </div>
</template>
