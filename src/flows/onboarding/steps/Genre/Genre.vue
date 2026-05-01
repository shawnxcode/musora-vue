<template lang="">
  <ul class="m-genre-list">
    <li v-for="item in options" :key="item">
      <div
        class="m-genre-item"
        :class="{ 'is-active': modelValue.includes(item) }"
        @click="handleClick(item)"
      >
        {{ item }}
      </div>
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    },
    options: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['update:modelValue'])
function handleClick(item) {
    const isSelected = props.modelValue.includes(item)
    if (isSelected) {
        emit(
            "update:modelValue",
            props.modelValue.filter((genre) => genre !== item)
        )
        return
    }
    emit("update:modelValue", [...props.modelValue, item])
}

</script>
<style>
.m-genre-list {
    overflow: hidden;
    padding: 0;
    /* margin: 24px auto; */
    width: 600px;
}

.m-genre-list>li {
    padding: 4px;

    float: left;
    list-style: none;

    /* width: 194px; */
    width: 33.333%;
}

.m-genre-item {
    cursor: pointer;
    border: 1px solid var(--Primary-4, #d5dbe4);
    height: 53px;
    padding: 16px;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.m-genre-item:hover,
.m-genre-item.is-active {
    border-color: var(--Primary-10, #0c1524);
    background-color: var(--Primary-2, #f6f8fc);
    font-weight: 700;
}
</style>
