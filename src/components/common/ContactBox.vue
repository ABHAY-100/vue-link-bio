<script setup>
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  displayThing: {
    type: Boolean,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const redirectSocials = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div
    @click="redirectSocials(link)"
    class="w-full cursor-pointer border-other_border rounded-[14px] border-[1px] px-[20px] pt-[20px] pb-[16px] flex flex-col gap-[20px] hover:bg-[#121212] duration-200 ease-in-out"
  >
    <div class="flex items-center justify-between">
      <i :class="icon" style="color: #999999; font-size: 1.5rem"></i>
      <span
        v-if="displayThing"
        class="text-sm text-just_gray bg-hover_anim px-[12px] py-[4px] rounded-[100px] max-sm:hidden"
        >Popular</span
      >
    </div>
    <div class="flex flex-col gap-[6px] text-normal">
      <h5 class="text-sm text-not_white">{{ heading }}</h5>
      <p class="text-xs text-button_text">{{ description }}</p>
    </div>
  </div>
</template>
