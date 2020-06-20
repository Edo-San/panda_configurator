import { SET_ACTIVE_SECTION, SET_INACTIVE_SECTION } from "./mutations";

export default {
  setActiveSection: ({ commit, dispatch, state }, section) => {
    dispatch(
      "setInactiveSection",
      state.sections.find((section) => section.isActive === true)
    );
    commit(SET_ACTIVE_SECTION, section);
  },
  setInactiveSection: ({ commit }, section) => {
    commit(SET_INACTIVE_SECTION, section);
  },
};
