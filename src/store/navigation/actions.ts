import { SET_ACTIVE_SECTION, SET_INACTIVE_SECTION, SET_IS_STEP_FADING } from "./mutations";
import { Section, StoreNavigationState } from "@/types";
import { Commit, Dispatch } from "vuex";

export default {
  setActiveSection: (
    {
      commit,
      dispatch,
      state,
    }: {
      commit: Commit;
      dispatch: Dispatch;
      state: StoreNavigationState;
    },
    section: Section
  ) => {
    dispatch(
      "setInactiveSection",
      state.sections.find((section: Section) => section.isActive === true)
    );
    commit(SET_ACTIVE_SECTION, section);
  },
  setInactiveSection: ({ commit }: { commit: Commit }, section: Section) => {
    commit(SET_INACTIVE_SECTION, section);
  },
  setIsStepFading: ({ commit }: { commit: Commit }, isStepFading: boolean) => {
    commit(SET_IS_STEP_FADING, isStepFading);
  },
};
