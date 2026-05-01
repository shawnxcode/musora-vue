<template>
    <div class="step-layout">
        <div class="step-layout-left" v-if="currentStep.slide">
            <component :is="currentStep.slide" />
        </div>
        <div class="step-layout-right">
            <StepHeader :title="currentStep.title" :description="currentStep.description">
                <Progress v-if="showProgress" :steps="3" :current="step" />
            </StepHeader>
            <component :is="currentStep.component" v-bind="currentStepProps" @next="handleNext" />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from 'vue'

import StepHeader from './components/StepHeader.vue'
import Progress from './components/Progress.vue'

import StepInstrument from './components/StepInstrument.vue'
import StepInstrumentSlide from './components/StepInstrumentSlide.vue'

const StepGenre = defineAsyncComponent(() =>
    import("./components/StepGenre.vue")
)

const StepAccount = defineAsyncComponent(() =>
    import("./components/StepAccount.vue")
)

const StepProfile = defineAsyncComponent(() =>
    import("./components/StepProfile.vue")
)

const StepGenreSlide = defineAsyncComponent(() =>
    import("./components/StepGenreSlide.vue")
)


const step = ref(1)

const form = reactive({
    instrument: '',
    genres: [],
    account: {
        email: '',
        receiveTips: false
    }
})

const steps = [
    {
        component: StepInstrument,
        title: 'CHOOSE YOUR INSTRUMENT',
        description:
            'Your Musora membership includes unlimited access to ALL of these instruments.<br/>Pick one to get started.',
        field: 'instrument',
        slide: StepInstrumentSlide
    },
    {
        component: StepGenre,
        title: 'WHAT GENRES ARE YOU INTO?',
        description:
            'Choose your favorites so we can help you learn them! Pick as many styles as you like.',
        field: 'genres',
        slide: StepGenreSlide
    },
    {
        component: StepAccount,
        title: 'CREATE YOUR ACCOUNT',
        description: 'Enter your email to save your profile.',
        field: 'account'
    },
    {
        component: StepProfile,
        title: 'WELCOME TO MUSORA!',
        description: 'Here is your profile:'
    }
]

const currentStep = computed(() => {
    return steps[step.value - 1]
})

const showProgress = computed(() => {
    return step.value <= 3
})

const currentStepProps = computed(() => {
    return step.value === 4 ? { form } : {}
})

function handleNext(data) {
    const field = currentStep.value.field

    if (field) {
        form[field] = data
    }

    if (step.value < steps.length) {
        step.value++
    }
}
</script>

<style>
.step-layout {
    width: 100%;
    height: 100%;
    display: flex;
}

.step-layout-left {
    width: 455px;
    height: 100%;
    overflow: hidden;
}

.step-layout-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>