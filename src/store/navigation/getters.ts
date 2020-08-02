export default {
  getSections: (state) => state.sections,
  getActiveSection: (state) => state.sections.find((section) => section.isActive === true),
  isStepFading: (state) => state.isStepFading,
};
