import { StoreVirilityState } from "@/types";

export default {
  getVirilities: (state: StoreVirilityState) => state.virilities,
  getSelectedVirility: (state: StoreVirilityState) => state.virilities.find((virility) => virility.isSelected === true),
};
