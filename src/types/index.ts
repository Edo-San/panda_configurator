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

export type StoreVirilityState = {
  virilities: Array<Option>;
};

export type StoreRimsState = {
  rims: Array<Option>;
};

export type StoreColorsState = {
  colors: Array<Option>;
};
