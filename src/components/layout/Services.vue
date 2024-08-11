<script setup>
import SeeMoreVue from "../common/TheOtherCard.vue";
import ServicesBox from "../common/ServicesBox.vue";
import TheOtherCard from "../common/TheOtherCard.vue";

const cards = [
  {
    heading: "Frontend Development",
    description:
      "Buildin' awesome websites that look great and work even better. Let's make your online dreams a reality.",
    anothertext: "See what I've built lately",
    label: "Check it out!",
    link: "https://swift-summarizer.vercel.app",
  },
  {
    heading: "UI/UX Design",
    description:
      "I craft digital experiences that are simple, stylish, and super easy to use. Love clean lines, but I'm always down to experiment with new ideas.",
    anothertext: "There's a lot to see on my Dribbble",
    label: "Check it out!",
    link: "https://dribbble.com/itsabhaybal",
  },
];
</script>

<template>
  <div class="flex flex-col w-full gap-5">
    <p class="text-sm text-button_text pl-2.5" data-aos="fade-up">Services</p>
    <div class="flex flex-col gap-3">
      <ServicesBox
        v-for="(card, index) in cards"
        :key="index"
        :heading="card.heading"
        :description="card.description"
        :anothertext="card.anothertext"
        :label="card.label"
        :link="card.link"
      />
      <TheOtherCard />
    </div>
  </div>
</template>
