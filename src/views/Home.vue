<script setup>
import NavBar from '../components/common/NavBar.vue';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
</script>

<template>
    <NavBar />
    
    <section class="flex items-start justify-center w-full h-screen">
        <div class="max-w-[480px] mt-[228px] flex gap-[40px] flex-col mx-5">
            <div class="flex flex-col items-start justify-center gap-[20px] font-normal w-full">
              <h3 class="w-full text-lg text-not_white">Hi, I'm Abhay.</h3>
              <p class="text-sm text-just_gray max-w-[406px] w-full">I'm a Frontend Developer and UI/UX Designer in Cochin, India. I create user-friendly websites, focusing on attractive designs and smooth functionality, helping to improve online presence and user experience.</p>
            </div>
            <div class="flex gap-[21px] justify-start items-start w-full">
                <Button class="custom-button-icon border-[1px] rounded-[10px] border-other_border text-[#999999] h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal hover:bg-other_border duration-200 ease-in-out">
                    <i class="pi pi-arrow-right mt-[5px]" style="font-size: 0.8rem; margin-left: -4px; color: #999999"></i>
                    Website
                </Button>
                <Button class="custom-button-icon border-[1px] rounded-[10px] border-other_border  h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal text-[#999999] hover:bg-other_border duration-200 ease-in-out">
                    <i class="pi pi-clone mt-[4px]" style="font-size: 0.8rem; margin-left: -4px; color: #999999"></i>
                    Email
                </Button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .custom-button-icon .pi {
        width: 18px;
        height: 18px;
        margin-left: 10px;
    }    
</style>
