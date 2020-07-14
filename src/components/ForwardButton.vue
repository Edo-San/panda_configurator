<template>
  <button class="ForwardButton" @click="onForwardButtonClick">
    <span class="ForwardButton__text">{{ this.text }}</span>
    <span class="material-icons ForwardButton__icon">trending_flat</span>
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
  }

  &__icon {
    margin-right: 20px;
  }
}
</style>
