<script setup>
import NavBar from "../components/common/NavBar.vue";
import ShowCase from "../components/layout/ShowCase.vue";
import  Contact from "../components/layout/Contact.vue";

import Button from "primevue/button";
import "primeicons/primeicons.css";
import { ref } from 'vue';

const redirectToWebsite = () => {
  window.open("https://itsabhay.vercel.app", "_blank");
};

const email = 'abhaybalakrishnan884@gmail.com';
const buttonText = ref('Email');

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    buttonText.value = "Copied!";
    setTimeout(() => {
      buttonText.value = "Email";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<template>
  <NavBar />

  <section class="flex flex-col items-start justify-start w-full h-screen gap-20 max-w-[480px] mx-auto px-5 my-[228px]">
    <div class="max-w-[480px] flex gap-[40px] flex-col sm:w-[480px] ml-[10px]">
      <div
        class="flex flex-col gap-[20px] font-normal w-full"
      >
        <h3 class="max-w-[480px] text-lg text-not_white">Hi, I'm Abhay.</h3>
        <p class="text-sm text-just_gray max-w-[406px] w-full">
          I'm a Frontend Developer and UI/UX Designer in Cochin, India. I create
          user-friendly websites, focusing on attractive designs and smooth
          functionality, helping to improve online presence and user experience.
        </p>
      </div>
      <div class="flex gap-[21px] justify-start items-start w-full">
        <Button
          @click="redirectToWebsite"
          class="custom-button-icon border-[1px] rounded-[10px] border-other_border text-[#999999] h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal hover:bg-other_border duration-200 ease-in-out"
        >
          <i
            class="pi pi-arrow-right mt-[5px]"
            style="font-size: 0.8rem; margin-left: -4px; color: #999999"
          ></i>
          Website
        </Button>
        <Button
          class="custom-button-icon border-[1px] rounded-[10px] border-other_border h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal text-[#999999] hover:bg-other_border duration-200 ease-in-out"
          @click="copyEmail"
        >
          <i
            class="pi pi-clone mt-[4px]"
            style="font-size: 0.8rem; margin-left: -4px; color: #999999"
          ></i>
          {{ buttonText }}
        </Button>
      </div>
    </div>

    <ShowCase />

    <Contact />
  </section>
</template>

<style scoped>
.custom-button-icon .pi {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}
</style>
