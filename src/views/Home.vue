<script setup>
import NavBar from "../components/common/NavBar.vue";
import ShowCase from "../components/layout/ShowCase.vue";
import Services from "../components/layout/Services.vue";
import Contact from "../components/layout/Contact.vue";
import Thanks from "../components/common/Thanks.vue";

import Button from "primevue/button";
import "primeicons/primeicons.css";

import { Resume } from "../assets";

const redirectToWebsite = () => {
  window.open("https://www.linkedin.com/in/abhaybalakrishnan", "_blank");
};

const downloadPDF = () => {
  const pdfUrl = Resume;
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<template>
  <NavBar />
  <!-- nav bar -->

  <section
    class="flex flex-col items-start justify-start w-full h-fit gap-20 max-w-[480px] mx-auto mt-[228px] max-md:px-5 z-0"
  >
    <div 
      class="max-w-[480px] flex gap-[40px] flex-col sm:w-[480px] mx-[10px]"
    >
      <div 
        class="flex flex-col gap-[20px] font-normal w-full"
      >
        <h3 
          class="max-w-[480px] text-lg text-not_white" 
          data-aos="fade-up"
        >
          Hi, I'm Abhay.
        </h3>
        <p
          class="text-sm text-just_gray max-w-[406px] w-full"
          data-aos="fade-up"
        >
          I'm a Frontend Developer and UI/UX Designer in Cochin, India. I create
          user-friendly websites, focusing on attractive designs and smooth
          functionality, helping to improve online presence and user experience.
        </p>
      </div>
      <div
        class="flex gap-[19px] justify-start items-start w-full"
        data-aos="fade-up"
      >
        <Button
          @click="redirectToWebsite"
          class="custom-button-icon border-[1px] rounded-[10px] border-other_border text-[#999999] h-[40px] text-sm px-[16px] flex justify-center items-center gap-[5px] font-normal hover:bg-other_border duration-200 ease-in-out"
        >
          Let's Connect
        </Button>
        <Button
          class="custom-button-icon border-[1px] rounded-[10px] border-other_border h-[40px] text-sm px-[16px] flex justify-center items-center gap-[6px] font-normal text-[#999999] hover:bg-other_border duration-200 ease-in-out"
          @click="downloadPDF"
        >
          <i
            class="pi pi-download mt-[4px]"
            style="font-size: 0.8rem; margin-left: -4px; color: #999999"
          ></i>
          Resume
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
</template>

<style scoped>
.custom-button-icon .pi {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}
</style>
