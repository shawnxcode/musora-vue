<template>
    <button class="m-btn" :class="{ 'is-disabled': disabled }" @click="handleClick" :disabled="disabled">
        <slot>Button</slot>
    </button>
</template>
<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
function handleClick(e) {
    if (props.disabled) return
    emit('click', e)
}
</script>
<style>
.m-btn {
    display: block;
    background: var(--Primary-10, #0C1524);
    width: 400px;
    height: 40px;
    /* margin: 0 auto; */
    border-radius: 25px;
    color: var(--Primary-1, #FFFFFF);
    font-family: Bebas Neue;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    border: 0 none;
    transition: all 0.3s ease-in;
}

.m-btn.is-disabled {
    cursor: default;
    background: #9aa3af;
}
</style>