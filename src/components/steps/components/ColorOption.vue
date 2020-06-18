<template>
  <div class="ColorOption">
    <div
      class="ColorOption__Swatch"
      :class="[`ColorOption__Swatch--${color.code}`]"
    ></div>
    <div class="ColorOption__Text">
      <h3 class="ColorOption__Text__Title">{{ color.title }}</h3>
      <p class="ColorOption__Text__Description">
        {{ color.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ColorOption",
  props: ["color"]
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.ColorOption {
  display: flex;
  margin-bottom: 25px;

  &__Swatch {
    border: 1px solid $black;
    flex-basis: 50px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 50px;

    &--orange {
      background-color: $orange;
    }

    &--blue {
      background-color: $blue;
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