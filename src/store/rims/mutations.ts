export const SET_SELECTED_RIM = "SET_SELECTED_RIM";
export const SET_UNSELECTED_RIM = "SET_UNSELECTED_RIM";

export default {
  [SET_SELECTED_RIM]: (state, rim) => {
    state.rims.find((r) => r.code === rim.code).isSelected = true;
  },
  [SET_UNSELECTED_RIM]: (state, rim) => {
    state.rims.find((r) => r.code === rim.code).isSelected = false;
  },
};
