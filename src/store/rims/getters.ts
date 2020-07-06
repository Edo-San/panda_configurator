export default {
  getRims: (state) => state.rims,
  getSelectedRim: (state) => state.rims.find((rim) => rim.isSelected === true),
};
