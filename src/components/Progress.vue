<template>
    <div class="m-progress">
        <div class="m-progress-icon"></div>
        <div class="m-progress-bar" v-if="current < steps">
            <div class="m-progress-indicator" :style="{ width: width + '%' }">
            </div>
        </div>
        <h1 class="m-progress-title">{{ title }}</h1>
        <p class="m-progress-description">{{ description }}</p>
    </div>

</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    steps: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})
const maxCurrent = computed(() => {
    return Math.min(props.current, props.steps)
})
const width = computed(() => {
    if (props.steps === 0) return 0
    return (maxCurrent.value / props.steps) * 100
})

</script>
<style>
.m-progress-bar {
    position: relative;
    width: 400px;
    height: 10px;
    margin: 0 auto;
    background: var(--Primary-4, #D5DBE4);
    border-radius: 8px;
    overflow: hidden;

}

.m-progress-indicator {
    position: absolute;
    left: 0;
    top: 0;
    height: 10px;
    border-radius: 8px;
    transition: all 0.3s ease-in;
    background: #FFAE00;

}

.m-progress-icon {
    width: 50px;
    height: 40px;
    margin: 0 auto 32px;
    background: url('../assets/musora.png');
    background-size: contain;
}

.m-progress-title {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 30px;
    line-height: 30px;

    text-align: center;

    font-variant: small-caps;
    color: var(--Primary-10, #0C1524);

}

.m-progress-description {

    font-family: Open Sans;
    font-weight: 400;

    font-size: 14px;

    line-height: 100%;

    text-align: center;

    color: var(--Primary-10, #0C1524);

}
</style>