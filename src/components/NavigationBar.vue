<template>
  <nav class="NavigationBar">
    <ul class="NavigationBar__list">
      <li
        class="NavigationBar__list__element"
        v-for="section in getSections"
        :key="section.code"
        :class="[
          section.isActive && 'NavigationBar__list__element--active',
          `NavigationBar__list__element--${section.code}`
        ]"
        @click="setCurrentSection(section)"
      >
        {{ section.name }}
      </li>
      <hr
        class="NavigationBar__indicator"
        :class="[`NavigationBar__indicator--${getActiveSection.code}`]"
      />
    </ul>
    <hr class="NavigationBar__separator" />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Section } from "@/types";

export default Vue.extend({
  name: "NavigationBar",
  computed: {
    ...mapGetters("navigation", ["getSections", "getActiveSection"])
  },
  methods: {
    ...mapActions("navigation", ["setActiveSection", "setIsStepFading"]),
    setCurrentSection: function(section: Section) {
      this.setIsStepFading(true);

      setTimeout(() => {
        this.setActiveSection(section);
        this.setIsStepFading(false);
      }, 350);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.NavigationBar {
  &__indicator {
    border: none;
    height: 6px;
    background: $black;
    margin: 0px;
    width: $navbar-indicator-width;
    transition: 0.4s ease;
    grid-row-start: indicator;
    grid-column-start: 1;

    &--color {
      margin-left: (
          $navbar-list-side-column-width + $navbar-list-element-width / 2
        ) - $navbar-indicator-width / 2;
    }
    &--rims {
      margin-left: (
          $navbar-list-side-column-width + $navbar-list-element-width * 3 / 2
        ) - $navbar-indicator-width / 2;
    }
    &--glasses {
      margin-left: (
          $navbar-list-side-column-width + $navbar-list-element-width * 5 / 2
        ) - $navbar-indicator-width / 2;
    }
    &--virility {
      margin-left: (
          $navbar-list-side-column-width + $navbar-list-element-width * 7 / 2
        ) - $navbar-indicator-width / 2;
    }
  }

  &__separator {
    border: none;
    height: 1px;
    background: $black;
    margin: 0px;
  }

  &__list {
    display: grid;
    grid-template-columns: $navbar-list-side-column-width repeat(4, 1fr) $navbar-list-side-column-width;
    grid-template-rows: [list-items] 36px [indicator] 6px;
    justify-items: stretch;
    align-items: stretch;
    margin: 0px;

    &__element {
      text-align: center;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.2px;
      font-variant: all-small-caps;
      font-size: 20px;
      cursor: pointer;

      &--color {
        grid-column-start: 2;
      }
      &--rims {
        grid-column-start: 3;
      }
      &--glasses {
        grid-column-start: 4;
      }
      &--virility {
        grid-column-start: 5;
      }
    }
  }
}
</style>
