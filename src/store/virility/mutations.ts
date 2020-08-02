import { StoreVirilityState, Option } from "@/types";

export const SET_SELECTED_VIRILITY = "SET_SELECTED_VIRILITY";
export const SET_UNSELECTED_VIRILITY = "SET_UNSELECTED_VIRILITY";

export default {
  [SET_SELECTED_VIRILITY]: (state: StoreVirilityState, virility: Option) => {
    const foundVirility = state.virilities.find((v) => v.code === virility.code);
    foundVirility ? (foundVirility.isSelected = true) : console.log("VIRILITY OPTION NOT FOUND");
  },
  [SET_UNSELECTED_VIRILITY]: (state: StoreVirilityState, virility: Option) => {
    const foundVirility = state.virilities.find((v) => v.code === virility.code);
    foundVirility ? (foundVirility.isSelected = false) : console.log("VIRILITY OPTION NOT FOUND");
  },
};
