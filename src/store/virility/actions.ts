import { SET_SELECTED_VIRILITY, SET_UNSELECTED_VIRILITY } from "./mutations";

export default {
  setSelectedVirility: ({ commit, dispatch, state }, virility) => {
    dispatch(
      "setUnselectedVirility",
      state.virilities.find((virility) => virility.isSelected === true)
    );
    commit(SET_SELECTED_VIRILITY, virility);
  },
  setUnselectedVirility: ({ commit }, virility) => {
    commit(SET_UNSELECTED_VIRILITY, virility);
  },
};
