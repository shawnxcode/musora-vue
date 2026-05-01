<template>
    <div class="step-genre">
        <!-- <Progress :steps="4" :current="2" title="WHAT GENRES ARE YOU INTO?"
            description="Choose your favorites so we can help you learn them! Pick as many styles as you like." /> -->

        <!-- <ul class="step-genre-list">
            <li v-for="item in genres" :key="item">
                <div class="step-genre-item" :class="{ 'is-active': selectedGenres.includes(item) }"
                    @click="selectGenre(item)">
                    {{ item }}
                </div>
            </li>
        </ul> -->
        <Genre v-model="selectedGenres" :options="genres" />

    </div>
    <Button @click="handleNext" :disabled="selectedGenres.length === 0">
        NEXT
    </Button>
</template>

<script setup>
import { ref } from "vue"

// import Progress from "./Progress.vue"
import Button from "./Button.vue"
import Genre from "./Genre.vue"

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

function handleNext() {
    if (selectedGenres.value.length === 0) return
    emit("next", selectedGenres.value)
}
</script>

<style>
.step-genre {
    padding-bottom: 32px;
}
</style>