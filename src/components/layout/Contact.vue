<script setup>
import ContactBox from "../common/ContactBox.vue";
import SocialBox from "../common/SocialBox.vue";

const cards = [
  {
    heading: "Send an Email",
    description: "I'll get back to you asap.",
    icon: "pi pi-at",
    displayThing: false,
    link: "mailto:abhaybalakrishnan884@gmail.com",
  },
  {
    heading: "Chat on WhatsApp",
    description: "Let’s chat!",
    icon: "pi pi-whatsapp",
    displayThing: true,
    link: "https://api.whatsapp.com/send?phone=919778728414",
  },
];

const socials = [
  {
    icon: "fa-brands fa-x-twitter",
    link: "https://x.com/itsabhaybal",
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/abhaybalakrishnan",
  },
  {
    icon: "fa-brands fa-dribbble",
    link: "https://dribbble.com/itsabhaybal",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/itsabhaybal",
  },
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/ABHAY-100",
  },
  {
    icon: "fa-brands fa-codepen",
    link: "https://codepen.io/itsabhaybal",
  },
  {
    icon: "fa-solid fa-code",
    link: "https://leetcode.com/u/itsabhaybal",
  },
  {
    icon: "fa-brands fa-figma",
    link: "https://www.figma.com/@itsabhay",
  },
];
</script>
<template>
  <div class="flex flex-col gap-[20px] max-w-[480px] w-[480px] max-md:w-full">
    <p class="text-sm text-button_text pl-2.5" data-aos="fade-up">Contact</p>
    <div class="flex flex-row max-w-[480px] gap-[12px]" data-aos="fade-up">
      <ContactBox
        v-for="(card, index) in cards"
        :key="index"
        :heading="card.heading"
        :description="card.description"
        :icon="card.icon"
        :displayThing="card.displayThing"
        :link="card.link"
      />
    </div>
    <div class="flex gap-[12px] flex-wrap" data-aos="fade-up">
      <SocialBox
        v-for="(social, index) in socials"
        :key="index"
        :icon="social.icon"
        :link="social.link"
      />
    </div>
  </div>
</template>
