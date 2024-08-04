<script setup>
import Button from "primevue/button";

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  anothertext: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const redirectToWebsite = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div
    class="border-[1px] border-other_border rounded-[14px] flex flex-col py-[20px] px-[20px] w-[480px] max-md:w-full"
  >
    <div class="">
      <h4 class="text-[16px] font-normal text-not_white mb-[7px]">
        {{ heading }}
      </h4>
      <p class="text-[14px] text-just_gray">
        {{ description }}
      </p>
    </div>
    <div
      class="flex flex-row items-center justify-between w-full border-t-[1px] border-t-[#232323] pt-[16px] mt-[30px] max-sm:flex-col max-sm:gap-3 max-sm:text-center max-sm:pt-[20px]"
    >
      <p class="text-sm text-[#f2f2f2] text-normal">
        {{ anothertext }}
      </p>
      <Button
        @click="redirectToWebsite(link)"
        class="px-[10px] h-[31px] text-[14px] bg-button_bg rounded-[12px] text-button_text font-normal hover:bg-other_border duration-200 ease-in-out"
        >{{ label }}</Button
      >
    </div>
  </div>
</template>
