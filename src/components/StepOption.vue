<template>
  <div class="Option">
    <div
      class="Option__Swatch"
      :class="[`RimOption__Swatch--${option.code}`]"
      @click="setSelected(option)"
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
    },
    setSelected: {
      type: Function,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
</style>