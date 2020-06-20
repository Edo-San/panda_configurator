export const SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION";
export const SET_INACTIVE_SECTION = "SET_INACTIVE_SECTION";

export default {
  [SET_ACTIVE_SECTION]: (state, section) => {
    state.sections.find((s) => s.code === section.code).isActive = true;
  },
  [SET_INACTIVE_SECTION]: (state, section) => {
    state.sections.find((s) => s.code === section.code).isActive = false;
  },
};
