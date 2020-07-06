export const SET_SELECTED_GLASS = "SET_SELECTED_GLASS";
export const SET_UNSELECTED_GLASS = "SET_UNSELECTED_GLASS";

export default {
  [SET_SELECTED_GLASS]: (state, glass) => {
    state.glasses.find((g) => g.code === glass.code).isSelected = true;
  },
  [SET_UNSELECTED_GLASS]: (state, glass) => {
    state.glasses.find((g) => g.code === glass.code).isSelected = false;
  },
};
