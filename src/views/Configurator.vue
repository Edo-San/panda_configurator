<template>
  <div class="Configurator__container">
    <CustomHeader />
    <MainImage />
    <NavigationBar />
    <Step :options="options" />
    <ForwardButton />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("navigation", ["getActiveSection"]),
    ...mapGetters("colors", ["getColors"])
  },
  methods: {
    setActiveSectionOptions(activeSection) {
      switch (activeSection) {
        case "color":
          this.options = this.getColors;
          break;

        case "rims":
          this.options = [];
          break;

        default:
          this.options = this.getColors;
          break;
      }
    }
  },
  beforeMount() {
    this.setActiveSectionOptions(this.getActiveSection);
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

      .Option {
        display: flex;
        margin-bottom: 25px;

        &__Swatch {
          border: 1px solid $black;
          flex-basis: 50px;
          flex-shrink: 0;
          flex-grow: 0;
          height: 50px;
          position: relative;
          cursor: pointer;
        }

        &__Text {
          margin-left: 15px;

          &__Title {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1.4px;
            font-variant: all-small-caps;
            font-size: 20px;
            line-height: 10px;
            margin-bottom: 12px;
          }

          &__Description {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: none;
            font-weight: 400;
            font-size: 11.5px;
          }
        }
      }
    }
  }
}
</style>
