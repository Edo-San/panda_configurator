import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  rims: [
    {
      title: "Non voglio spendere",
      description: "Il cerchio base, certo, indistruttibile e lo userai per 100 anni, ma sei un pezzente!",
      isSelected: true,
      isCheckBoxIconInverted: false,
      code: "basic",
    },
    {
      title: "Tutta estetica",
      description: "Nero, aggressivo e bello. Ma alla prima buca lo distruggerai.",
      isSelected: false,
      isCheckBoxIconInverted: true,
      code: "aesthetics",
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
