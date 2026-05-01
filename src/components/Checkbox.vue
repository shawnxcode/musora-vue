<template>

    <label class="m-checkbox">
        <input class="m-checkbox-field" type="checkbox" :checked="modelValue" @change="handleChange" />
        <span class="m-checkbox-label">{{ label }}</span>
    </label>

</template>
<script setup>
const props = defineProps({
    label: String,
    modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

function handleChange(e) {
    emit('update:modelValue', e.target.checked)
}

</script>
<style>
.m-checkbox {}

.m-checkbox-field,
.m-checkbox-label {
    display: inline-block;
    vertical-align: top;
}

.m-checkbox-field {
    /* display: block; */
    width: 16px;
    height: 16px;
    border-radius: 4px;
    margin-right: 8px;
}

.m-checkbox-label {
    font-family: Open Sans;


    font-size: 12px;

    line-height: 16px;


}
</style>