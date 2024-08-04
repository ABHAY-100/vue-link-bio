<script setup>
import Button from "primevue/button";

const redirectToWebsite = () => {
  window.open("https://itsabhay.vercel.app", "_blank");
};
</script>

<template>
  <div
    class="border-[1px] border-other_border rounded-[14px] flex flex-row justify-between items-center py-[20px] px-[20px] w-[480px] max-md:w-full max-sm:flex-col max-sm:gap-3 max-sm:text-center"
  >
    <div class=" gap-[7px]">
        <h4 class="text-sm text-[#f2f2f2] text-normal">
            Want to see more of my work?
        </h4>
    </div>
    <Button
      @click="redirectToWebsite"
      class="px-[10px] h-[31px] text-[14px] bg-button_bg rounded-[12px] text-button_text font-normal hover:bg-other_border duration-200 ease-in-out"
      >View Portfolio</Button
    >
  </div>
</template>
