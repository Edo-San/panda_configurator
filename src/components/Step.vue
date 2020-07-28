<template>
  <section class="Step">
    <step-option
      v-for="option in options"
      :key="option.code"
      :option="option"
      @set-selected-option="handleSetSelectedOption"
    />
    <span
      class="material-icons Step__marker"
      :class="`Step__marker--${selectedOptionIndex}`"
      >check_box</span
    >
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
  },
  computed: {
    selectedOptionIndex: function() {
      // console.log(this.options.findIndex(option => option.isSelected === true));
      return this.options.findIndex(option => option.isSelected === true);
    }
  },
  updated: () => {
    console.log("UPD");
  },
  methods: {
    handleSetSelectedOption(option) {
      this.$emit("set-selected-option", option);
    }
  }
});
</script>

<style lang="scss" scoped>
.Step {
  margin: 30px 36px;

  &__marker {
    z-index: 2;
    color: red;
    position: absolute;
    transition: 0.4s ease;
    left: 59px;

    &--0 {
      bottom: 341px;
    }

    &--1 {
      bottom: 266px;
    }

    &--2 {
      bottom: 191px;
    }

    &--3 {
      bottom: 116px;
    }
  }
}
</style>
