import { StoreColorsState } from "@/types";

export default {
  getColors: (state: StoreColorsState) => state.colors,
  getSelectedColor: (state: StoreColorsState) => state.colors.find((color) => color.isSelected === true),
};
