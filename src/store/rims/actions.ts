import { SET_SELECTED_RIM, SET_UNSELECTED_RIM } from "./mutations";

export default {
  setSelectedRim: ({ commit, dispatch, state }, rim) => {
    dispatch(
      "setUnselectedRim",
      state.rims.find((rim) => rim.isSelected === true)
    );
    commit(SET_SELECTED_RIM, rim);
  },
  setUnselectedRim: ({ commit }, rim) => {
    commit(SET_UNSELECTED_RIM, rim);
  },
};
