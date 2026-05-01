<template lang="">
  <div class="step-instrument">
    <Instrument v-model="selectedInstrument" :options="instruments"/>
  </div>
   <Button @click="handleNext" :disabled="!selectedInstrument">NEXT</Button>
</template>
<script setup>
import { ref } from "vue";

// import Progress from "./Progress.vue";
import Button from "./Button.vue";
import Instrument from "./Instrument.vue";

const emit = defineEmits(["next"]);
const instruments = ref(["Drums", "Piano", "Guitar", "Bass", "Voice"]);
const selectedInstrument = ref("");

// function selectInstrument(item) {
//   selectedInstrument.value = item;
// }
function handleNext() {
  if (!selectedInstrument.value) return;
  emit("next", selectedInstrument.value);
}
</script>
<style>
.step-instrument {
  padding-bottom: 32px;
}
</style>
