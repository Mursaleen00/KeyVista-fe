//  src/interfaces/properties/Add-properties-interface.ts

// import { AddToCardOnboardingType } from '@/types/add-properties-types';

export interface locationPurposeI {
  setStep: () => void;
  step?: number;
  // formik: AddToCardOnboardingType;
}

export interface featurePriceI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
}
export interface descriptionI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
}
export interface AddPropertiesI {
  setStep: () => void;
  step?: number;
}
export interface AddPropertiesHeroI {
  title?: string;
  description?: string;
}
