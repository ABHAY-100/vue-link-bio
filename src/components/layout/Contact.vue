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
    heading: "Chat on WhatsApp",
    description: "Let’s chat and connect.",
    icon: "pi pi-whatsapp",
    displayThing: true,
  },
];

const socials = [
  {
    icon: "pi pi-twitter",
  },
  {
    icon: "pi pi-linkedin",
  },
  {
    icon: "pi pi-instagram",
  },
  {
    icon: "pi pi-github",
  }
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
        <SocialBox 
        v-for="(social, index) in socials"
        :key="index"
        :icon = "social.icon"
        />
    </div>
  </div>
</template>