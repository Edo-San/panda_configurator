import { StoreRimsState } from "@/types";

export default {
  getRims: (state: StoreRimsState) => state.rims,
  getSelectedRim: (state: StoreRimsState) => state.rims.find((rim) => rim.isSelected === true),
};
