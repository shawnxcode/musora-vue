<template>
    <component :is="currentStepComponent" :form="form" @next="handleNext" />

</template>

<script setup>
import { ref, reactive, computed } from 'vue';

import StepInstrument from './components/StepInstrument.vue';
import StepGenre from './components/StepGenre.vue';
import StepAccount from './components/StepAccount.vue';
import StepProfile from './components/StepProfile.vue';

const step = ref(1);
const form = reactive({
    instrument: '',
    genres: [],
    account: {
        email: '',
        receiveTips: false
    }
})

const stepComponents = [
    StepInstrument,
    StepGenre,
    StepAccount,
    StepProfile
]

const currentStepComponent = computed(() => {
    return stepComponents[step.value - 1]
})

function handleNext(value) {
    if (step.value === 1) {
        form.instrument = value
    }

    if (step.value === 2) {
        form.genres = value
    }

    if (step.value === 3) {
        form.account = value
    }

    if (step.value < 4) {
        step.value++
    }
}
</script>
