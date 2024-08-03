<script setup>
import Button from 'primevue/button';

const props = defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Button class="custom-button-icon h-[36px] w-[36px] border-other_border rounded-[10px] border-[1px] py-[10px] px-[10.5px] flex justify-center items-center text-sm text-button_text text-normal">
        <i
            :class="icon"
            style="font-size: 14px; color: #969696; margin-left: 0px;"
        ></i>
        <!-- 17,4k -->
    </Button>
</template>
