<template>
    <div class="m-progress">
        <div class="m-progress-bar" :style="{ width: width + '%' }">
        </div>
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
    // title: {
    //     type: String,
    //     required: true,
    // },
    // description: {
    //     type: String,
    //     required: true,
    // }
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
.m-progress {
    position: relative;
    width: 400px;
    height: 10px;
    margin: 0 auto;
    background: var(--Primary-4, #D5DBE4);
    border-radius: 8px;
    overflow: hidden;

}

.m-progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 10px;
    border-radius: 8px;
    transition: all 0.3s ease-in;
    background: #FFAE00;

}
</style>