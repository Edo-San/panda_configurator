<template>
  <div class="Configurator__container">
    <CustomHeader />
    <MainImage />
    <NavigationBar />
    <ColorStep />
    <ForwardButton />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomHeader from "../components/CustomHeader.vue";
import MainImage from "../components/MainImage.vue";
import NavigationBar from "../components/NavigationBar.vue";
import ColorStep from "../components/steps/ColorStep.vue";
import ForwardButton from "../components/ForwardButton.vue";

export default Vue.extend({
  name: "Configurator",
  components: {
    CustomHeader: CustomHeader,
    MainImage: MainImage,
    NavigationBar: NavigationBar,
    ColorStep: ColorStep,
    ForwardButton: ForwardButton
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/_variables.scss";

.Configurator {
  &__container {
    width: $full-width;
    height: 1000px;
    margin: 0px auto;
    background-color: $light-gray;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    // text-transform: uppercase;
    // font-weight: 600;
    // letter-spacing: 1.4px;
    // font-variant: all-small-caps;
    // font-size: 20px;

    .Step {
      margin: 30px 36px;
    }
  }
}
</style>
