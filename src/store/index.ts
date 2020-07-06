import Vue from "vue";
import Vuex from "vuex";

import navigation from "./navigation";
import colors from "./colors";
import rims from "./rims";
import glasses from "./glasses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    colors,
    rims,
    glasses,
  },
});
