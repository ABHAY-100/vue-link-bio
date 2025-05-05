<script setup>
import ServiceCard from "../common/Service_Card.vue";

import { portfolioContent } from "../../constants/index.js";
const services = portfolioContent.services;
</script>

<template>
  <div class="flex flex-col w-full gap-5">
    <p class="text-sm text-button_text pl-2.5">Services</p>
    <div class="flex flex-col gap-3">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :heading="service.title"
        :description="service.description"
        :anothertext="service.highlight.text"
        :label="service.action.text"
        :link="service.action.url"
      />
    </div>
  </div>
</template>
