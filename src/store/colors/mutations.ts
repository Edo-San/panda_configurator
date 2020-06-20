export const SET_SELECTED_COLOR = "SET_SELECTED_COLOR";
export const SET_UNSELECTED_COLOR = "SET_UNSELECTED_COLOR";

export default {
  [SET_SELECTED_COLOR]: (state, color) => {
    state.colors.find((c) => c.code === color.code).isSelected = true;
  },
  [SET_UNSELECTED_COLOR]: (state, color) => {
    state.colors.find((c) => c.code === color.code).isSelected = false;
  },
};
