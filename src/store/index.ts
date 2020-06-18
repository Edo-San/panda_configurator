import Vue from "vue";
import Vuex from "vuex";

import navigation from "./navigation";
import colors from "./colors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    colors,
  },
});
