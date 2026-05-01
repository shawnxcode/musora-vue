<template>
    <div class="step-genre">
        <!-- <Progress :steps="4" :current="2" title="WHAT GENRES ARE YOU INTO?"
            description="Choose your favorites so we can help you learn them! Pick as many styles as you like." /> -->

        <ul class="step-genre-list">
            <li v-for="item in genres" :key="item">
                <div class="step-genre-item" :class="{ 'is-active': selectedGenres.includes(item) }"
                    @click="selectGenre(item)">
                    {{ item }}
                </div>
            </li>
        </ul>


    </div>
    <Button @click="handleNext" :disabled="selectedGenres.length === 0">
        NEXT
    </Button>
</template>

<script setup>
import { ref } from "vue"

// import Progress from "./Progress.vue"
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
.step-genre {
    padding-bottom: 32px;
}

.step-genre-list {
    overflow: hidden;
    padding: 0;
    /* margin: 24px auto; */
    width: 600px;
}

.step-genre-list>li {
    padding: 4px;

    float: left;
    list-style: none;

    /* width: 194px; */
    width: 33.333%;

}

.step-genre-item {
    cursor: pointer;
    border: 1px solid var(--Primary-4, #D5DBE4);
    height: 53px;
    padding: 16px;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.step-genre-item:hover,
.step-genre-item.is-active {
    border-color: var(--Primary-10, #0C1524);
    background-color: var(--Primary-2, #F6F8FC);
    font-weight: 700;
}
</style>