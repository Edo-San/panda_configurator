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
      <!--li
        class="NavigationBar__list__element NavigationBar__list__element--color NavigationBar__list__element--active"
      >
        colore
      </li>
      <li
        class="NavigationBar__list__element NavigationBar__list__element--rims"
      >
        cerchi
      </li>
      <li
        class="NavigationBar__list__element NavigationBar__list__element--glasses"
      >
        vetri
      </li>
      <li
        class="NavigationBar__list__element NavigationBar__list__element--virility"
      >
        virilità
      </li-->
      <hr class="NavigationBar__indicator" />
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
    ...mapGetters("navigation", ["getSections"])
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
  }
  &__separator {
    border: none;
    height: 1px;
    background: $black;
    margin: 0px;
  }
  &__list {
    display: grid;
    grid-template-columns: 36px repeat(4, 1fr) 36px;
    grid-template-rows: [list-items] 36px [indicator] 1px;
    &__element {
      grid-row-start: [list-items];
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

      &--active {
        background-image: linear-gradient(
          to top,
          $black 6px,
          rgba(255, 255, 255, 0) 6px
        );
        background-position: bottom;
        background-size: 60px;
        background-repeat: no-repeat;
        transition: 0.5s ease;
      }
    }
  }
}
</style>
