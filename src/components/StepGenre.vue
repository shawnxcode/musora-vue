<template>
    <div class="step-genre">
        <Progress :steps="4" :current="2" title="WHAT GENRES ARE YOU INTO?"
            description="Choose your favorites so we can help you learn them! Pick as many styles as you like." />

        <ul class="step-genre-list">
            <li v-for="item in genres" :key="item" :class="{ active: selectedGenres.includes(item) }"
                @click="selectGenre(item)">
                {{ item }}
            </li>
        </ul>

        <Button @click="handleNext" :disabled="selectedGenres.length === 0">
            NEXT
        </Button>
    </div>
</template>

<script setup>
import { ref } from "vue"

import Progress from "./Progress.vue"
import Button from "./Button.vue"

const emit = defineEmits(["next"])

const genres = ref([
    "Classical",
    "Rock",
    "Pop",
    "Jazz",
    "Blues",
    "Country",
    "Metal",
    "Funk",
    "Soul",
    "Christian",
    "Hip-Hop/Rap"
])

const selectedGenres = ref([])

function selectGenre(item) {
    if (selectedGenres.value.includes(item)) {
        selectedGenres.value = selectedGenres.value.filter(
            genre => genre !== item
        )
    } else {
        selectedGenres.value.push(item)
    }
}

function handleNext() {
    if (selectedGenres.value.length === 0) return
    emit("next", selectedGenres.value)
}
</script>

<style>
.step-genre-list {
    overflow: hidden;
    padding: 0;
    margin: 24px auto;
    width: 720px;
}

.step-genre-list>li {
    margin: 0 4px 12px;
    cursor: pointer;
    float: left;
    list-style: none;
    border: 1px solid var(--Primary-4, #D5DBE4);
    width: 194px;
    height: 53px;
    padding: 16px;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 8px;
}

.step-genre-list>li.active {
    border: 1px solid var(--Primary-10, #0C1524);
    background: var(--Primary-2, #F6F8FC);
    font-weight: 700;
}
</style>