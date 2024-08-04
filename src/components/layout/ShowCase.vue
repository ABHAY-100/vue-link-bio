<script setup>
import ShowCaseCard from "../common/ShowCaseCard.vue";
import { swift_summarizer, astra } from "../../assets";

const cards = [
  {
    title: "Swift Summarizer",
    description: "AI-Powered Article Summarizer",
    imgSrc: swift_summarizer,
    imgAlt: "swift summarizer",
    link: "https://swift-summarizer.vercel.app",
  },
  {
    title: "ASTRA",
    description: "Space Club Web Design",
    imgSrc: astra,
    imgAlt: "astra",
    link: "https://dribbble.com/shots/24522358-Space-Club-Web-Design-ASTRA",
  },
];
</script>

<template>
  <div class="flex flex-col w-full gap-5">
    <p class="text-sm text-button_text pl-2.5">Showcase</p>
    <div class="flex flex-col gap-3">
      <ShowCaseCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :imgSrc="card.imgSrc"
        :imgAlt="card.imgAlt"
        :link="card.link"
      />
    </div>
  </div>
</template>
