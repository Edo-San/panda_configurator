<template>
  <section class="Step ColorStep">
    <ColorOption v-for="color in getColors" :color="color" :key="color" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import ColorOption from "./components/ColorOption.vue";

export default Vue.extend({
  name: "ColorStep",
  components: {
    ColorOption: ColorOption
  },
  computed: {
    ...mapGetters("colors", ["getColors"])
  }
});
</script>

<style lang="scss" scoped>
</style>
