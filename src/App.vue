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

import StepHeader from './flows/onboarding/StepHeader.vue'
import Progress from './components/Progress.vue'

import StepInstrument from './flows/onboarding/steps/Instrument/StepInstrument.vue'
import StepInstrumentSlide from './flows/onboarding/steps/Instrument/StepInstrumentSlide.vue'
import useState from './flows/onboarding/composables/useState'


const StepGenre = defineAsyncComponent(() =>
    import("./flows/onboarding/steps/Genre/StepGenre.vue")
)

const StepAccount = defineAsyncComponent(() =>
    import("./flows/onboarding/steps/Account/StepAccount.vue")
)

const StepProfile = defineAsyncComponent(() =>
    import("./flows/onboarding/steps/Profile/StepProfile.vue")
)

const StepGenreSlide = defineAsyncComponent(() =>
    import("./flows/onboarding/steps/Genre/StepGenreSlide.vue")
)


const step = ref(1)

// const form = reactive({
//     instrument: '',
//     genres: [],
//     account: {
//         email: '',
//         receiveTips: false
//     }
// })
const { form, updateField } = useState()

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
        updateField(field, data)
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