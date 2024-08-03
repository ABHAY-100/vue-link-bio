<script setup>
import ContactBox from '../common/ContactBox.vue';
import SocialBox from '../common/SocialBox.vue';

const cards = [
  {
    heading: "Send an email",
    description: "I'll get back to you asap.",
    icon: "pi pi-send",
    displayThing: false,
  },
  {
    heading: "Book a call",
    description: "Available this week.",
    icon: "pi pi-video",
    displayThing: true,
  },
]
</script>

<template>
  <div class="flex flex-col gap-[20px] max-w-[480px] w-[480px] max-md:w-full">
    <p class="text-sm text-button_text pl-2.5">Contact</p>
    <div class="flex flex-row max-w-[480px] gap-[12px]">
        <ContactBox 
          v-for="(card, index) in cards"
          :key="index"
          :heading="card.heading"
          :description="card.description"
          :icon="card.icon"
          :displayThing="card.displayThing"
        />
    </div>
    <div class="flex gap-[12px]">
        <SocialBox />
        <SocialBox />
        <SocialBox />
        <SocialBox />
    </div>
  </div>
</template>