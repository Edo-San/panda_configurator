import { StoreGlassesState, Option } from "@/types";

export const SET_SELECTED_GLASS = "SET_SELECTED_GLASS";
export const SET_UNSELECTED_GLASS = "SET_UNSELECTED_GLASS";

export default {
  [SET_SELECTED_GLASS]: (state: StoreGlassesState, glass: Option) => {
    const foundGlass = state.glasses.find((g) => g.code === glass.code);
    foundGlass ? (foundGlass.isSelected = true) : console.log("GLASS NOT FOUND");
  },
  [SET_UNSELECTED_GLASS]: (state: StoreGlassesState, glass: Option) => {
    const foundGlass = state.glasses.find((g) => g.code === glass.code);
    foundGlass ? (foundGlass.isSelected = false) : console.log("GLASS NOT FOUND");
  },
};
