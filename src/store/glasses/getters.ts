export default {
  getGlasses: (state) => {
    return state.glasses;
  },
  getSelectedGlass: (state) => {
    return state.glasses.find((glass) => glass.isSelected === true);
  },
};
