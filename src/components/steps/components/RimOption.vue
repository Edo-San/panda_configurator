<template>
  <div class="Option RimOption">
    <div
      class="Option__Swatch"
      :class="[`RimOption__Swatch--${rim.code}`]"
      @click="setSelectedRim(rim)"
    >
      <span
        class="material-icons CheckBoxIcon"
        :class="[
          color.code === 'black' && 'CheckBoxIcon--inverted',
          !color.isSelected && 'CheckBoxIcon--off'
        ]"
        >check_box</span
      >
    </div>
    <div class="Option__Text">
      <h3 class="Option__Text__Title">{{ color.title }}</h3>
      <p class="Option__Text__Description">{{ color.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "RimOption",
  props: ["rim"],
  methods: {
    ...mapActions("rims", ["setSelectedRim"])
  }
});
</script>

<style lang="scss" scoped></style>
