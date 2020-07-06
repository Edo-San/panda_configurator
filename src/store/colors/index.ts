import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  colors: [
    {
      title: "Arancione Brutto",
      description: "Questo colore non sa di niente, è stato scelto totalmente a casaccio. E costa un sacco di soldi.",
      isSelected: true,
      isCheckBoxIconInverted: false,
      code: "orange",
    },
    {
      title: "Blu brutto brutto",
      description: "Questo colore non si può vedere, nato dalla sfida di creare un colore peggio dell’arancione brutto.",
      isSelected: false,
      isCheckBoxIconInverted: false,
      code: "blue",
    },
    {
      title: "Bianco costa poco",
      description: "Colore più selezionato, non che sia bello, ma è di default e quindi costa molto poco. Pezzenti.",
      isSelected: false,
      isCheckBoxIconInverted: false,
      code: "white",
    },
    {
      title: "Nero decente",
      description: "L’unico colore decente, il nero non delude mai. E basta.",
      isSelected: false,
      isCheckBoxIconInverted: true,
      code: "black",
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
