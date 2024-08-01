<script setup>
import ShowCaseCard from '../common/ShowCaseCard.vue';
import { swift_summarizer, astra } from "../../assets";

const cards = [
  {
    title: 'Swift Summarizer',
    description: 'AI-powered tool for concise article summaries',
    imgSrc: swift_summarizer,
    imgAlt: 'swift summarizer'
  },
  {
    title: 'ASTRA',
    description: 'Space Club Web Design',
    imgSrc: astra,
    imgAlt: 'astra'
  }
]
</script>

<template>
  <div class="flex flex-col gap-5">
    <p class="text-sm text-button_text pl-2.5">Showcase</p>
    <div class="flex flex-col gap-3">
      <ShowCaseCard 
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :imgSrc="card.imgSrc"
        :imgAlt="card.imgAlt"
      />
    </div>
  </div>
</template>
