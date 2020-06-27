<template>
  <section class="Step">
    <StepOption
      v-for="option in options"
      :key="option.code"
      :option="option"
      :setSelected="() => {}"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import StepOption from "./StepOption.vue";

export default Vue.extend({
  components: {
    StepOption: StepOption
  },
  name: "Step",
  props: {
    options: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
</style>