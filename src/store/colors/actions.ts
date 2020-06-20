import { SET_SELECTED_COLOR, SET_UNSELECTED_COLOR } from "./mutations";

export default {
  setSelectedColor: ({ commit, dispatch, state }, color) => {
    dispatch(
      "setUnselectedColor",
      state.colors.find((color) => color.isSelected === true)
    );
    commit(SET_SELECTED_COLOR, color);
  },
  setUnselectedColor: ({ commit }, color) => {
    commit(SET_UNSELECTED_COLOR, color);
  },
};
