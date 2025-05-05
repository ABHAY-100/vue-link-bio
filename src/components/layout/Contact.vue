<script setup>
import ContactCard from "../common/Contact_Card.vue";
import SocialBox from "../common/Social_Card.vue";

import { portfolioContent } from "../../constants/index.js";
const user = portfolioContent.user;
const socials = portfolioContent.socials;

const cards = [
  {
    heading: "Send an Email",
    description: "I'll get back to you asap.",
    icon: "pi pi-at",
    displayThing: false,
    link: `mailto:${user.email}`,
  },
  {
    heading: "Chat on WhatsApp",
    description: "Let’s chat!",
    icon: "pi pi-whatsapp",
    displayThing: true,
    link: `https://api.whatsapp.com/send?phone=${user.phone}`,
  },
];
</script>

<template>
  <div class="flex flex-col gap-[20px] max-w-[480px] w-[480px] max-md:w-full">
    <p class="text-sm text-button_text pl-2.5">Contact</p>
    <div class="flex flex-row max-w-[480px] gap-[12px]">
      <ContactCard
        v-for="(card, index) in cards"
        :key="index"
        :heading="card.heading"
        :description="card.description"
        :icon="card.icon"
        :displayThing="card.displayThing"
        :link="card.link"
      />
    </div>
    <div class="flex gap-[12px] flex-wrap">
      <SocialBox
        v-for="(social, index) in socials"
        :key="index"
        :icon="social.icon"
        :link="social.url"
      />
    </div>
  </div>
</template>
