<script setup>
import Button from "primevue/button";
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const buttonView = (link) => {
  window.open(link, "_blank");
}
</script>

<template>
  <div class="border-[1px] border-other_border rounded-[14px] flex flex-row p-3.5 gap-5 w-[480px] max-md:w-full">
    <img :src="imgSrc" :alt="imgAlt" class="w-[54px] h-[54px] rounded-[11px]">
    <div class="flex flex-row items-center justify-between w-full md:pr-3.5v max-md:gap-[40px]">
        <div class="flex flex-col justify-between min-h-10">
            <h4 class="text-sm font-bold text-not_white">{{ title }}</h4>
            <p class="text-xs text-just_gray max-w-[250px]">{{ description }}</p>
        </div>
        <Button @click="buttonView(link)" class="max-w-[62px] px-[16px] text-[14px] bg-button_bg rounded-[12px] text-button_text font-normal h-[40px] hover:bg-other_border duration-200 ease-in-out">View</Button>
    </div>
  </div>
</template>
