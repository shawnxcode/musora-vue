<template lang="">
  <div class="step-profile">
    <Progress
      :steps="4"
      :current="4"
      title="WELCOME TO MUSORA!"
      description="Here is your profile:"
    />

    <div class="step-profile-info">
      <p  class="step-profile-item">
        <span>Instrument</span><em>{{ form.instrument }}</em>
      </p>
      <p class="step-profile-item">
        <span>Genres</span><em>{{ form.genres.join(", ") }}</em>
      </p>
      <p class="step-profile-item">
        <span>Email</span><em>{{ form.account.email }}</em>
      </p>
      <p class="step-profile-item">
        <span>Free tips & lessons</span
        ><em>{{ form.account.receiveTips ? "Yes" : "No" }}</em>
      </p>
    </div>
  </div>
</template>
<script setup>


import Progress from "./Progress.vue";
import Button from "./Button.vue";
import Instrument from "./Instrument.vue";

defineProps({
  form: {
    type: Object,
    required: true,
  },
});
</script>
<style>
.step-profile-info {
  background: var(--System-2, #F6F8FC);
  width: 600;
  height: 146;
  padding: 24px;
  opacity: 1;
  border-radius: 8px;
  overflow: hidden;
}

.step-profile-item {
  float: left;
  width: 50%;
}

.step-profile-item>span,
.step-profile-item>em {
  display: block;
}
</style>
