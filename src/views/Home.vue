<script setup>
import NavBar from "../components/common/NavBar.vue";
import ShowCase from "../components/layout/ShowCase.vue";
import Services from "../components/layout/Services.vue";
import Contact from "../components/layout/Contact.vue";
import Thanks from "../components/common/Thanks.vue";
import Loading from "../components/common/Loading.vue";
import { ref } from "vue";

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 3000);
// Simulate a loading delay of 3 seconds

import { portfolioContent } from "../constants/index.js";

import Button from "primevue/button";
import "primeicons/primeicons.css";

const aboutContent = portfolioContent.about;
const openInNewTab = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <Loading v-if="isLoading" />
  <!-- loading -->

  <div v-else>
    <NavBar />
    <!-- navbar -->

    <section
      class="flex flex-col items-start justify-start w-full h-fit gap-20 max-w-[480px] mx-auto mt-[228px] max-md:px-5 z-0"
      data-aos="fade-up"
    >
      <div
        class="max-w-[480px] flex gap-[40px] flex-col sm:w-[480px] mx-[10px]"
      >
        <div class="flex flex-col gap-[20px] font-normal w-full">
          <h3 class="max-w-[480px] text-lg text-not_white">
            {{ aboutContent.heading }}
          </h3>
          <p class="text-sm text-just_gray max-w-[406px] w-full">
            {{ aboutContent.description }}.
          </p>
        </div>
        <div class="flex gap-[19px] justify-start items-start w-full">
          <Button
            v-for="(cta, index) in aboutContent.cta"
            :key="index"
            @click="() => openInNewTab(cta.url)"
            class="custom-button-icon border-[1px] rounded-[10px] border-other_border h-[40px] text-sm px-[16px] flex justify-center items-center gap-[6px] font-normal text-[#999999] hover:bg-other_border duration-200 ease-in-out"
          >
            <i
              v-if="cta.icon"
              :class="`pi ${cta.icon}`"
              class="mt-[5px] mr-1"
              style="font-size: 0.8rem; margin-left: -4px; color: #999999"
            ></i>
            {{ cta.text }}
          </Button>
        </div>
      </div>
      <!-- about me -->

      <ShowCase />
      <!-- showcase -->

      <Services />
      <!-- services -->

      <Contact />
      <!-- contact -->

      <Thanks />
      <!-- thanks -->
    </section>
    <!-- main section -->
  </div>
</template>

<style scoped>
.custom-button-icon .pi {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}
</style>
