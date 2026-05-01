<template>
    <div class="step-account">
        <!-- <Progress :steps="4" :current="3" title="LET'S GET PLAYING!"
            description="Enter your email to create your account. You'll log in with this email to access your lessons." /> -->
        <Input class="step-account-email" label="Email" v-model="email" placeholder="Enter your email..." />
    </div>
    <Button @click="handleNext" :disabled="!isValidEmail(email)">
        LET'S GO!
    </Button>
    <div class="step-account-subscribe">
        <Checkbox v-model="receiveTips" label="Send me tips, free lessons, and special offers by email." />
    </div>

    <p class="step-account-tips">
        By continuing you agree with Musora's <a href="#">Terms of Use</a> and
        <a href="#">Privacy Policy</a>
    </p>
</template>

<script setup>
import { ref } from "vue";

// import Progress from "./Progress.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import Checkbox from "./Checkbox.vue";

const emit = defineEmits(["next"]);

const email = ref("");
const receiveTips = ref(false);

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function handleNext() {
    const value = email.value.trim()

    if (!isValidEmail(value)) return

    emit("next", {
        email: value,
        receiveTips: receiveTips.value,
    });
}
</script>

<style>
.step-account {
    padding-bottom: 32px;
}

.step-account-email {
    width: 600px;
}

.step-account-subscribe {
    padding-top: 32px;
    margin-bottom: 118px;
}

.step-account-tips {
    font-family: Open Sans;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
}

.step-account-tips>a {
    color: var(--Practice-Tracker-Primary, #FFAE00);
    text-decoration: none;

}
</style>
