import getters from "./getters";

const state = {
  colors: [
    {
      title: "Arancione Brutto",
      description: "Questo colore non sa di niente, è stato scelto totalmente a casaccio. E costa un sacco di soldi.",
      isSelected: true,
      code: "orange",
    },
    {
      title: "Blu brutto brutto",
      description: "Questo colore non si può vedere, nato dalla sfida di creare un colore peggio dell’arancione brutto.",
      isSelected: false,
      code: "blue",
    },
  ],
};

export default {
  state,
  // actions,
  getters,
  // mutations,
  namespaced: true,
};
