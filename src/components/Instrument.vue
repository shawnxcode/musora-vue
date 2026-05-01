<template>
    <div class="m-instrument" :class="{ 'is-active': active }">
        <div class="m-instrument-icon">
            <img :src="imgSrc" :alt="name" />
        </div>
        <div class="m-instrument-name">
            {{ name }}
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

const imgSrc = computed(() => {
    return new URL(`../assets/instrument-icons/${props.name}.png`, import.meta.url).href
})
</script>
<style>
.m-instrument {
    width: 114px;
    height: 100px;
    padding: 16px;
    border: 1px solid var(--Primary-4, #D5DBE4);
    background: var(--Primary-1, #FFFFFF);
    border-radius: 8px;

}

.m-instrument.is-active {
    background: var(--Primary-2, #F6F8FC);
}


.m-instrument-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 8px;
}

.m-instrument-icon>img {
    display: block;
    width: 100%;
    height: 100%;
}

.m-instrument-name {
    font-family: Open Sans;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 14px;

    line-height: 150%;

    text-align: center;
    vertical-align: middle;
    color: var(--Primary-10, #0C1524);

}

.is-active .m-instrument-name {
    font-weight: bolder;
}
</style>