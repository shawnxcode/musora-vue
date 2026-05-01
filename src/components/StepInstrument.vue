<template lang="">
  <div class="step-instrument">
    <Progress
      :steps="4"
      :current="1"
      title="CHOOSE YOUR INSTRUMENT"
      description="Your Musora membership includes unlimited access to ALL of these instruments.
Pick one to get started."
    />
    <ul class="step-instrument-list">
      <li
        v-for="item in instruments"
        :key="item"
        @click="selectInstrument(item)"
      >
        <Instrument :name="item" :active="selectedInstrument === item" />
      </li>
    </ul>
    <Button @click="handleNext" :disabled="!selectedInstrument">NEXT</Button>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Progress from "./Progress.vue";
import Button from "./Button.vue";
import Instrument from "./Instrument.vue";

const emit = defineEmits(["next"]);
const instruments = ref(["drums", "piano", "guitar", "bass", "voice"]);
const selectedInstrument = ref("");

function selectInstrument(item) {
  selectedInstrument.value = item;
}
function handleNext() {
  console.log('sdfasdf')
  if (!selectedInstrument.value) return;
  emit("next", selectedInstrument.value);
}
</script>
<style>
.step-instrument-list {
  display: flex;
  list-style: none;
  justify-content: center;
}

.step-instrument-list>li {
  margin: 0 4px;
  cursor: pointer;
}
</style>
