<template>
  <div class="Configurator__container">
    <CustomHeader />
    <MainImage />
    <NavigationBar />
    <Step
      :options="activeSectionOptions"
      @set-selected-option="setSelectedOption"
    />
    <ForwardButton />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

import CustomHeader from "../components/CustomHeader.vue";
import MainImage from "../components/MainImage.vue";
import NavigationBar from "../components/NavigationBar.vue";
import Step from "../components/Step.vue";
import ForwardButton from "../components/ForwardButton.vue";

export default Vue.extend({
  name: "Configurator",
  components: {
    CustomHeader: CustomHeader,
    MainImage: MainImage,
    NavigationBar: NavigationBar,
    ForwardButton: ForwardButton,
    Step: Step
  },
  data: function() {
    return {
      options: []
    };
  },
  methods: {
    ...mapActions("colors", ["setSelectedColor"]),
    setSelectedOption(option) {
      switch (this.getActiveSection.code) {
        case "color":
          console.log("color");
          this.setSelectedColor(option);
          break;

        case "rims":
          console.log("rims");
          // activeSectionOptions = this.getRims;
          break;

        default:
          console.log("default");
          this.setSelectedColor(option);
          break;
      }
    }
  },
  computed: {
    ...mapGetters("navigation", ["getActiveSection"]),
    ...mapGetters("colors", ["getColors"]),
    ...mapGetters("rims", ["getRims"]),
    activeSectionOptions: function() {
      console.log("ACTIVE SECTION in computed", this.getActiveSection);
      let activeSectionOptions = [];
      switch (this.getActiveSection.code) {
        case "color":
          console.log("color");
          activeSectionOptions = this.getColors;
          break;

        case "rims":
          console.log("rims");
          activeSectionOptions = this.getRims;
          break;

        default:
          console.log("default");
          activeSectionOptions = this.getColors;
          break;
      }

      console.log("OPTIONS", activeSectionOptions);
      return activeSectionOptions;
    }
  }
});
</script>

<style lang="scss">
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
