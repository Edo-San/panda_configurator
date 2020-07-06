import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  glasses: [
    {
      title: "Leggermente scuri",
      description: "Esce dalla fabbrica così, si vede dentro, non ti vergogni di aver speso questi soldi.",
      isSelected: true,
      isCheckBoxIconInverted: true,
      code: "slightly_dark",
    },
    {
      title: "Molto scuri",
      description: "Molto scuri, molto molto, non si vede dentro, fatto apposta per chi si vergogna e non vuole farsi vedere.",
      isSelected: false,
      isCheckBoxIconInverted: true,
      code: "very_dark",
    },
  ],
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
