import { StoreRimsState, Option } from "@/types";

export const SET_SELECTED_RIM = "SET_SELECTED_RIM";
export const SET_UNSELECTED_RIM = "SET_UNSELECTED_RIM";

export default {
  [SET_SELECTED_RIM]: (state: StoreRimsState, rim: Option) => {
    const foundRim = state.rims.find((r) => r.code === rim.code);
    foundRim ? (foundRim.isSelected = true) : console.log("RIM NOT FOUND");
  },
  [SET_UNSELECTED_RIM]: (state: StoreRimsState, rim: Option) => {
    const foundRim = state.rims.find((r) => r.code === rim.code);
    foundRim ? (foundRim.isSelected = false) : console.log("RIM NOT FOUND");
  },
};
