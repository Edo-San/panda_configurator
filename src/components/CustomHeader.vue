<template>
  <div class="CustomHeader">
    <img class="CustomHeader__logo" src="@/assets/images/fiat_logo.png" />
    <div class="CustomHeader__separator"></div>
    <span class="CustomHeader__model__text">modello</span>
    <span class="material-icons CustomHeader__model__icon">expand_more</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomHeader"
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.CustomHeader {
  display: grid;
  grid-template-columns: [colStart] 20px [col1Start] 216px [col2Start] 40px [modelStart] 74px [iconStart] 24px [inconEnd] 40px [colEnd];
  grid-template-rows: [ceiling] 30px [rowTop] 30px [rowBaseline] 30px [floor];
  border-bottom: 1px solid $black;

  &__logo {
    grid-column-start: col1Start;
    grid-row-start: rowTop;
    align-self: center;
    width: 140px;
  }

  &__separator {
    grid-column-start: col2Start;
    grid-row-start: ceiling;
    grid-row-end: floor;
    border-left: 1px solid $black;
  }

  &__model {
    &__text {
      grid-column-start: modelStart;
      grid-row-start: rowTop;
      align-self: center;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.4px;
      font-size: 12px;
      line-height: 10px;
    }

    &__icon {
      grid-column-start: iconStart;
      grid-row-start: rowTop;
      align-self: center;
    }
  }
}
</style>
