import { StoreNavigationState } from "@/types";

export default {
  getSections: (state: StoreNavigationState) => state.sections,
  getActiveSection: (state: StoreNavigationState) => state.sections.find((section) => section.isActive === true),
  isStepFading: (state: StoreNavigationState) => state.isStepFading,
};
