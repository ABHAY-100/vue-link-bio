<script setup>
import ShowCaseCard from "../common/ShowCase_Card.vue";
import { portfolioContent } from "../../constants/index.js";

const showcase = portfolioContent.showcase;
</script>

<template>
  <div class="flex flex-col w-full gap-5">
    <p class="text-sm text-button_text pl-2.5">Showcase</p>
    <div class="flex flex-col gap-3">
      <ShowCaseCard
        v-for="(card, index) in showcase"
        :key="index"
        :title="card.title"
        :description="card.description"
        :imgSrc="card.image"
        :imgAlt="card.image_alt"
        :link="card.url"
      />
    </div>
  </div>
</template>
