import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  virilities: [
    {
      title: "Se sei così…",
      description: "Se sei così ok, va bene, basta che ci dai i soldi. Ma non sarai un vero duro.",
      isSelected: true,
      isCheckBoxIconInverted: true,
      code: "nerd",
    },
    {
      title: "Se sei un vero duro, seleziona.",
      description: "Ah ecco, sei uno tosto allora, bravo! Sopratutto perché costa un sacco.",
      isSelected: false,
      isCheckBoxIconInverted: true,
      code: "tough",
    },
  ],
};

export default {
  getters,
  state,
  actions,
  mutations,
  namespaced: true,
};
