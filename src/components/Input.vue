<template>
    <div class="m-input">
        <label class="m-input-label">
            {{ label }}
        </label>
        <input class="m-input-field" :type="type" :placeholder="placeholder" :value="modelValue" @input="handleInput" />
    </div>
</template>

<script setup>

const props = defineProps({
    label: String,
    modelValue: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>
<style>
.m-input-label {
    display: block;
    margin-bottom: 10px;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: var(--Primary-10, #0C1524);
}

.m-input-field {
    display: block;
    width: 100%;
    border: 1px solid var(--Primary-4, #D5DBE4);
    padding: 8px 16px;
    border-radius: 4px;
}
</style>