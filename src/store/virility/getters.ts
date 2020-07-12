import virility from ".";

export default {
  getVirilities: (state) => state.virilities,
  getSelectedVirility: (state) => state.virilities.find((virility) => virility.isSelected === true),
};
