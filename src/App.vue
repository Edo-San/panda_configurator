<template>
  <div id="ConfiguratorApp">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/css/_variables.scss";

.CheckBoxIcon {
  position: absolute;
  bottom: 2px;
  right: 2px;
  cursor: inherit;
  opacity: 1;
  transition: 0.4s;

  &--inverted {
    color: $white;
  }

  &--off {
    opacity: 0;
  }

  &__ghost {
  }
}
</style>
