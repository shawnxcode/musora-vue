<template>
    <ul class="m-instrument-list">
        <li v-for="item in options" :key="item">
            <div class="m-instrument" :class="{ 'is-active': modelValue === item }" @click="handleClick(item)">
                <div class="m-instrument-icon">
                    <img :src="getImg(item)" :alt="item" />
                </div>
                <div class="m-instrument-name">
                    {{ item }}
                </div>
            </div>
        </li>
    </ul>
</template>
<script setup>
const props = defineProps({
    modelValue: String,
    options: {
        type: Array,
        default: () => []
    }
})
const emit = defineEmits(['update:modelValue'])
function handleClick(item) {
    emit('update:modelValue', item)
}
function getImg(item) {
    return new URL(`../../../../assets/instrument-icons/${item.toLowerCase()}.png`, import.meta.url).href
}
</script>
<style>
.m-instrument-list {
    display: flex;
    list-style: none;
    justify-content: center;
}

.m-instrument-list>li {
    margin: 0 4px;
    cursor: pointer;
}

.m-instrument {
    width: 114px;
    height: 100px;
    padding: 16px;
    border: 1px solid var(--Primary-4, #D5DBE4);
    background: var(--Primary-1, #FFFFFF);
    border-radius: 8px;
    transition: all 0.3s ease-in;

}

.m-instrument:hover,
.m-instrument.is-active {
    background: var(--Primary-2, #F6F8FC);
    border-color: var(--Primary-10, #0C1524)
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