<template>
  <div class="Configurator__container">
    <custom-header />
    <main-image />
    <navigation-bar />
    <step
      :options="activeSectionOptions"
      @set-selected-option="setSelectedOption"
    />
    <forward-button
      @click="onForwardButtonClick"
      text="Vai avanti, se te la senti"
    />
    <greetings
      :isActive="isGreetingsViewActive"
      @back-click="onGreetingsBackButtonClick"
    />
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
import Greetings from "../components/Greetings.vue";

export default Vue.extend({
  name: "Configurator",
  components: {
    CustomHeader: CustomHeader,
    MainImage: MainImage,
    NavigationBar: NavigationBar,
    ForwardButton: ForwardButton,
    Step: Step,
    Greetings: Greetings
  },
  data: function() {
    return {
      options: [],
      isGreetingsViewActive: false
    };
  },
  methods: {
    ...mapActions("colors", ["setSelectedColor"]),
    ...mapActions("rims", ["setSelectedRim"]),
    ...mapActions("glasses", ["setSelectedGlass"]),
    ...mapActions("virility", ["setSelectedVirility"]),
    ...mapActions("navigation", ["setActiveSection"]),
    setSelectedOption(option) {
      switch (this.getActiveSection.code) {
        case "color":
          this.setSelectedColor(option);
          break;

        case "rims":
          this.setSelectedRim(option);
          break;

        case "glasses":
          this.setSelectedGlass(option);
          break;

        case "virility":
          this.setSelectedVirility(option);
          break;

        default:
          this.setSelectedColor(option);
          break;
      }
    },
    onForwardButtonClick: function() {
      const currentActiveIndex = this.getSections.indexOf(
        this.getActiveSection
      );
      currentActiveIndex < this.getSections.length - 1
        ? this.setActiveSection(this.getSections[currentActiveIndex + 1])
        : (this.isGreetingsViewActive = true);
    },
    onGreetingsBackButtonClick: function() {
      this.setActiveSection(this.getSections[0]);
      this.isGreetingsViewActive = false;
    }
  },
  computed: {
    ...mapGetters("navigation", ["getActiveSection", "getSections"]),
    ...mapGetters("colors", ["getColors"]),
    ...mapGetters("rims", ["getRims"]),
    ...mapGetters("glasses", ["getGlasses"]),
    ...mapGetters("virility", ["getVirilities"]),
    activeSectionOptions: function() {
      let activeSectionOptions = [];
      switch (this.getActiveSection.code) {
        case "color":
          activeSectionOptions = this.getColors;
          break;

        case "rims":
          activeSectionOptions = this.getRims;
          break;

        case "glasses":
          activeSectionOptions = this.getGlasses;
          break;

        case "virility":
          activeSectionOptions = this.getVirilities;
          break;

        default:
          activeSectionOptions = this.getColors;
          break;
      }

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
    height: 806px;
    margin: 0px auto;
    background-color: $light-gray;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;

    .Step {
      margin: 30px 36px;
    }
  }
}
</style>
