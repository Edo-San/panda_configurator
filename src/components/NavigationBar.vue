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
        @click="setActiveSection(section)"
      >
        {{ section.name }} {{ section.isActive }}
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

export default Vue.extend({
  name: "NavigationBar",
  computed: {
    ...mapGetters("navigation", ["getSections", "getActiveSection"])
  },
  methods: {
    ...mapActions("navigation", ["setActiveSection"])
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
    width: 60px;
    transition: 0.3s ease;
    grid-row-start: indicator;

    &--color {
      margin-left: $navbar-list-side-column-width + $navbar-list-element-width /
        2;
    }
    &--rims {
      margin-left: $navbar-list-side-column-width +
        ($navbar-list-element-width * 2 - $navbar-list-element-width / 2);
    }
    &--glasses {
      margin-left: $navbar-list-side-column-width +
        ($navbar-list-element-width * 3 - $navbar-list-element-width / 2);
    }
    &--virility {
      margin-left: $navbar-list-side-column-width +
        ($navbar-list-element-width * 4 - $navbar-list-element-width / 2);
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
    grid-template-rows: [list-items] $navbar-list-side-column-width [indicator] 6px;
    justify-items: center;
    transition: 1s ease;

    &__element {
      text-align: center;

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
