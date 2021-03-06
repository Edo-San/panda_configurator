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
          option.isCheckBoxIconInverted === true && 'CheckBoxIcon--inverted',
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
import { Option } from "@/types";

export default Vue.extend({
  props: {
    option: {
      type: Object as () => Option,
      required: true
    }
  },
  methods: {
    handleSetSelectedOption(option: Option) {
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

  &:nth-last-of-type(1) {
    margin-bottom: 0px;
  }

  &__Swatch {
    border: 1px solid $black;
    flex-basis: 50px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 50px;
    position: relative;
    cursor: pointer;

    // CSS option custom classes
    // Colors
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

    // Rims
    &--basic {
      background-image: url("~@/assets/images/rims/basic.png");
      background-position: center;
      background-size: 100%;
      border: none;
    }

    &--aesthetics {
      background-image: url("~@/assets/images/rims/aesthetics.png");
      background-position: center;
      background-size: 100%;
      border: none;
    }

    // Glasses
    &--slightly_dark {
      background-color: $slightly-dark;
    }

    &--very_dark {
      background-color: $very-dark;
    }

    // Virility
    &--nerd {
      background-image: url("~@/assets/images/virility/nerd.png");
      background-position: center;
      background-size: 100%;
      border: none;
    }

    &--tough {
      background-image: url("~@/assets/images/virility/tough.png");
      background-position: center;
      background-size: 100%;
      border: none;
    }

    .CheckBoxIcon {
      position: absolute;
      bottom: 2px;
      right: 2px;
      cursor: inherit;
      opacity: 1;
      transition: 0.6s;

      &--inverted {
        color: $white;
      }

      &--off {
        opacity: 0;
      }
    }
  }

  &__Text {
    margin-left: 15px;

    &__Title {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.4px;
      font-size: 12px;
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