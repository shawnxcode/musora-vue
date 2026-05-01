<template lang="">
    <div class="step-instrument-slide">
       <img :src="imgSrc"/> 
    </div>
</template>
<script setup>
import { computed } from 'vue';
const imgSrc = computed(() => {
    return new URL(`../../../../assets/instrument-bg.png`, import.meta.url).href
})
</script>
<style>
.step-instrument-slide {
    width: 100%;
    height: 100%;
    background: var(--System-10, #0C1524);
    display: flex;
    align-items: center;
    justify-content: center;
}

.step-instrument-slide>img {
    display: block;
}
</style>