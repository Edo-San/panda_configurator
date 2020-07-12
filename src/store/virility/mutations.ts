export const SET_SELECTED_VIRILITY = "SET_SELECTED_VIRILITY";
export const SET_UNSELECTED_VIRILITY = "SET_UNSELECTED_VIRILITY";

export default {
  [SET_SELECTED_VIRILITY]: (state, virility) => {
    state.virilities.find((v) => v.code === virility.code).isSelected = true;
  },
  [SET_UNSELECTED_VIRILITY]: (state, virility) => {
    state.virilities.find((v) => v.code === virility.code).isSelected = false;
  },
};
