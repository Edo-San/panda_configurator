// Importo actions, getters, mutations
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  sections: [
    {
      code: "color",
      name: "Colore",
      isActive: true,
    },
    {
      code: "rims",
      name: "Cerchi",
      isActive: false,
    },
    {
      code: "glasses",
      name: "Vetri",
      isActive: false,
    },
    {
      code: "virility",
      name: "Virilità",
      isActive: false,
    },
  ],
};

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
