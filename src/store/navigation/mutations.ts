import { Section, StoreNavigationState } from "@/types";

export const SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION";
export const SET_INACTIVE_SECTION = "SET_INACTIVE_SECTION";
export const SET_IS_STEP_FADING = "SET_IS_STEP_FADING";

export default {
  [SET_ACTIVE_SECTION]: (state: StoreNavigationState, section: Section) => {
    const foundSection = state.sections.find((s: Section) => s.code === section.code);
    foundSection ? (foundSection.isActive = true) : console.log("SECTION NOT FOUND");
  },
  [SET_INACTIVE_SECTION]: (state: StoreNavigationState, section: Section) => {
    const foundSection = state.sections.find((s: Section) => s.code === section.code);
    foundSection ? (foundSection.isActive = false) : console.log("SECTION NOT FOUND");
  },
  [SET_IS_STEP_FADING]: (state: StoreNavigationState, isStepFading: boolean) => {
    state.isStepFading = isStepFading;
  },
};
