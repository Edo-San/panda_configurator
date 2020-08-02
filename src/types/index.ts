export type Option = {
  title: string;
  description: string;
  isSelected: boolean;
  isCheckBoxIconInverted: boolean;
  code: string;
};

export type Section = {
  code: string;
  name: string;
  isActive: boolean;
};

export type StoreNavigationState = {
  sections: Array<Section>;
  isStepFading: boolean;
};

export type StoreGlassesState = {
  glasses: Array<Option>;
};
