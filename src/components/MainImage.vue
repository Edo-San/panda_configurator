<template>
  <div class="MainImage">
    <img
      class="MainImage__image"
      :src="require(`@/assets/images/panda/${getSelectedColor.code}.png`)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "MainImage",
  computed: {
    ...mapGetters("colors", ["getSelectedColor"])
  }
});
</script>

<style lang="scss" scoped>
.MainImage {
  width: 100%;
  text-align: center;

  &__image {
    width: 342px;
  }
}
</style>
