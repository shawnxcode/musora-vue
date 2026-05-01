<template>
    <div class="step-account">
        <Progress :steps="4" :current="3" title="LET'S GET PLAYING!"
            description="Enter your email to create your account. You'll log in with this email to access your lessons." />

        <div>
            <p>Email</p>
            <input v-model="email" type="text" placeholder="Enter your email..." />
        </div>

        <Button @click="handleNext" :disabled="email.trim() === ''">
            NEXT
        </Button>

        <p>
            <input v-model="receiveTips" type="checkbox" />
            Send me tips, free lessons, and special offers by email.
        </p>

        <p>
            By continuing you agree with Musora's Terms of Use and Privacy Policy
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue"

import Progress from "./Progress.vue"
import Button from "./Button.vue"

const emit = defineEmits(["next"])

const email = ref("")
const receiveTips = ref(false)

function handleNext() {
    if (email.value.trim() === "") return

    emit("next", {
        email: email.value,
        receiveTips: receiveTips.value
    })
}
</script>

<style>
.step-account input[type="text"] {
    width: 600px;
    height: 40px;

    border-radius: 4px;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 16px;

    border: 1px solid var(--Primary-4, #D5DBE4)
}
</style>