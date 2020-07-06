import { SET_SELECTED_GLASS, SET_UNSELECTED_GLASS } from "./mutations";

export default {
  setSelectedGlass: ({ commit, dispatch, state }, glass) => {
    dispatch(
      "setUnselectedGlass",
      state.glasses.find((glass) => glass.isSelected === true)
    );
    commit(SET_SELECTED_GLASS, glass);
  },
  setUnselectedGlass: ({ commit }, glass) => {
    commit(SET_UNSELECTED_GLASS, glass);
  },
};
