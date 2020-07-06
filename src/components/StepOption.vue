<template>
  <div class="Option">
    <div
      class="Option__Swatch"
      :class="[`Option__Swatch--${option.code}`]"
      @click="handleSetSelectedOption(option)"
    >
      <span
        class="material-icons CheckBoxIcon"
        :class="[
          option.code === 'black' && 'CheckBoxIcon--inverted',
          !option.isSelected && 'CheckBoxIcon--off'
        ]"
        >check_box</span
      >
    </div>
    <div class="Option__Text">
      <h3 class="Option__Text__Title">{{ option.title }}</h3>
      <p class="Option__Text__Description">{{ option.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSetSelectedOption(option) {
      console.log("STEPOPTION", option);
      this.$emit("set-selected-option", option);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.Option {
  display: flex;
  margin-bottom: 25px;

  &__Swatch {
    border: 1px solid $black;
    flex-basis: 50px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 50px;
    position: relative;
    cursor: pointer;

    // CSS option custom classes
    &--orange {
      background-color: $orange;
    }

    &--blue {
      background-color: $blue;
    }

    &--white {
      background-color: $white;
    }

    &--black {
      background-color: $black;
    }
  }

  &__Text {
    margin-left: 15px;

    &__Title {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.4px;
      font-variant: all-small-caps;
      font-size: 20px;
      line-height: 10px;
      margin-bottom: 12px;
    }

    &__Description {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: none;
      font-weight: 400;
      font-size: 11.5px;
    }
  }
}
</style>