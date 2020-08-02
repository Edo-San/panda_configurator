import { StoreColorsState, Option } from "@/types";

export const SET_SELECTED_COLOR = "SET_SELECTED_COLOR";
export const SET_UNSELECTED_COLOR = "SET_UNSELECTED_COLOR";

export default {
  [SET_SELECTED_COLOR]: (state: StoreColorsState, color: Option) => {
    const foundColor = state.colors.find((c) => c.code === color.code);
    foundColor ? (foundColor.isSelected = true) : console.log("COLOR NOT FOUND");
  },
  [SET_UNSELECTED_COLOR]: (state: StoreColorsState, color: Option) => {
    const foundColor = state.colors.find((c) => c.code === color.code);
    foundColor ? (foundColor.isSelected = false) : console.log("COLOR NOT FOUND");
  },
};
