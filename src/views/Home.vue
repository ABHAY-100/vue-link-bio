<script setup>
import NavBar from '../components/common/NavBar.vue';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
</script>

<template>
    <NavBar />
    <div class="w-[480px] mx-auto mt-[154px] flex gap-[40px] flex-col">
        <div class="flex flex-col items-start justify-center gap-[20px] font-normal">
          <h3 class="text-lg text-not_white">Hi, I'm Abhay.</h3>
          <p class="text-sm text-just_gray w-[406px]">I'm a Frontend Developer and UI/UX Designer in Cochin, India. I create user-friendly websites, focusing on attractive designs and smooth functionality, helping to improve online presence and user experience.</p>
        </div>
        <div class="flex gap-[21px]">
            <Button class="custom-button-icon border-[1px] rounded-[10px] border-other_border text-just_gray h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal hover:bg-hover_anim">
                <i class="pi pi-arrow-right mt-[5px]" style="font-size: 0.8rem; margin-left: -4px; color: #858585"></i>
                Website
            </Button>
            <Button class="custom-button-icon border-[1px] rounded-[10px] border-other_border  h-[40px] text-sm px-[16px] max-w-[106px] flex justify-center items-center gap-[6px] font-normal text-just_gray hover:bg-hover_anim">
                <i class="pi pi-clone mt-[4px]" style="font-size: 0.8rem; margin-left: -4px; color: #858585"></i>
                Email
            </Button>
        </div>
    </div>
</template>

<style scoped>
    .custom-button-icon .pi {
        width: 18px;
        height: 18px;
        margin-left: 10px;
    }    
</style>
