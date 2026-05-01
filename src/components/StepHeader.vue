<template>
    <div class="step-header">
        <div class="step-header-icon"></div>
        <slot></slot>
        <div class="step-header-info">
            <h1 class="step-header-title">{{ title }}</h1>
            <p class="step-header-description" v-html="description"></p>
        </div>

    </div>

</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

</script>
<style>
.step-header-icon {
    width: 50px;
    height: 40px;
    margin: 0 auto 32px;
    background: url('../assets/musora.png');
    background-size: contain;
}

.step-header-info {
    padding-top: 48px;
}

.step-header-title {
    margin-bottom: 12px;
    font-family: Montserrat;
    font-weight: 900;
    font-size: 30px;
    line-height: 30px;

    text-align: center;

    font-variant: small-caps;
    color: var(--Primary-10, #0C1524);

}

.step-header-description {
    margin-bottom: 32px;
    font-family: Open Sans;
    font-weight: 400;

    font-size: 14px;

    line-height: 100%;

    text-align: center;

    color: var(--Primary-10, #0C1524);

}
</style>