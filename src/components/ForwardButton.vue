<template>
  <button
    class="ForwardButton"
    :class="{ 'ForwardButton--backwards': pointsBackwards }"
    @click="onForwardButtonClick"
  >
    <span
      class="ForwardButton__text"
      :class="{ 'ForwardButton__text--backwards': pointsBackwards }"
      >{{ this.text }}</span
    >
    <span
      class="material-icons ForwardButton__icon"
      :class="{ 'ForwardButton__icon--backwards': pointsBackwards }"
      >trending_flat</span
    >
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "ForwardButton",
  props: {
    text: {
      type: String,
      required: true
    },
    pointsBackwards: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters("navigation", ["getActiveSection", "getSections"])
  },
  methods: {
    ...mapActions("navigation", ["setActiveSection"]),
    onForwardButtonClick: function() {
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.ForwardButton {
  border: 1px solid $black;
  margin: auto 36px 30px 36px;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;
  background-color: transparent;
  padding: 0px;

  &:focus {
    outline: transparent;
  }

  &:hover {
    color: $white;
    background-color: $black;
  }

  &__text {
    letter-spacing: 1.68px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    margin-left: 20px;

    &--backwards {
      margin-right: 20px;
    }
  }

  &__icon {
    margin-right: 20px;

    &--backwards {
      margin-left: 20px;
      transform: rotate(180deg);
    }
  }

  &--backwards {
    flex-direction: row-reverse;
  }
}
</style>
