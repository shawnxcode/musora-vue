<template lang="">
  <div class="step-profile">
    <!-- <Progress
      :steps="4"
      :current="4"
      title="WELCOME TO MUSORA!"
      description="Here is your profile:"
    /> -->

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


// import Progress from "./Progress.vue";
// import Button from "./Button.vue";
// import Instrument from "./Instrument.vue";

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
  width: 600px;
  /* height: 146; */
  padding: 24px 24px 0;
  opacity: 1;
  border-radius: 8px;
  overflow: hidden;
}

.step-profile-item {
  float: left;
  width: 50%;
  margin-bottom: 24px;
}

.step-profile-item>span,
.step-profile-item>em {
  display: block;
}

.step-profile-item>span {
  font-family: Open Sans;
  font-weight: 400;

  font-size: 12px;

  line-height: 100%;
  padding-bottom: 2px;


}

.step-profile-item>em {
  font-family: Open Sans;
  font-weight: 800;
  font-size: 14px;
  line-height: 100%;
  font-style: normal;

}
</style>
