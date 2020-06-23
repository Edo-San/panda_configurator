<template>
  <div class="ForwardButton" @click="onForwardButtonClick">
    <h3 class="ForwardButton__text">Vai avanti, se te la senti</h3>
    <span class="material-icons">trending_flat</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "ForwardButton",
  computed: {
    ...mapGetters("navigation", ["getActiveSection", "getSections"])
  },
  methods: {
    ...mapActions("navigation", ["setActiveSection"]),
    onForwardButtonClick: function() {
      const currentActiveIndex = this.getSections.indexOf(
        this.getActiveSection
      );
      currentActiveIndex < this.getSections.length - 1 &&
        this.setActiveSection(this.getSections[currentActiveIndex + 1]);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.ForwardButton {
  border: 1px solid $black;
  margin: 0px 36px;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.2s;

  &__text {
    letter-spacing: 1.68px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
  }

  &:hover {
    color: $white;
    background-color: $black;
  }
}
</style>
