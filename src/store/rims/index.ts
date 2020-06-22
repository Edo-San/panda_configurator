// imports
import getters from "./getters";

const state = {
  rims: [
    {
      title: "Non voglio spendere",
      description:
        "Il cerchio base, certo, indistruttibile e lo userai per 100 anni, ma sei un pezzente!",
      isSelected: true,
      code: "base"
    },
    {
      title: "Tutta estetica",
      description:
        "Nero, aggressivo e bello. Ma alla prima buca lo distruggerai.",
      isSelected: false,
      code: "black"
    }
  ]
};

export default {
  state,
  getters,
  namespaced: true
};
