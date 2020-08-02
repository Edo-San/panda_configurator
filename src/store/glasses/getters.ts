import { StoreGlassesState } from "@/types";

export default {
  getGlasses: (state: StoreGlassesState) => {
    return state.glasses;
  },
  getSelectedGlass: (state: StoreGlassesState) => {
    return state.glasses.find((glass) => glass.isSelected === true);
  },
};
