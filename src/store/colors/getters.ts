export default {
  getColors: (state) => state.colors,
  getSelectedColor: (state) =>
    state.colors.find((color) => color.isSelected === true)
};
