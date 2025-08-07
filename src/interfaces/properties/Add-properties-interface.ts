//  src/interfaces/properties/Add-properties-interface.ts

// React Imports
import { Dispatch } from 'react';

// Types Imports
import { locationAndPurpose } from '@/types/add-properties-types/location-purpose-types';

// --------------------------------------------- locationPurposeI ----------------------------------------
export interface locationPurposeI {
  setStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<locationAndPurpose>>;
}

// -------------------------------- featurePriceI ----------------------------------------
export interface featurePriceI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<locationAndPurpose>>;
}

// ---------------------------------- descriptionI ----------------------------------------
export interface descriptionI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<locationAndPurpose>>;
}

// -------------------------------- AddPropertiesI ----------------------------------------
export interface AddPropertiesI {
  setStep: () => void;
  step?: number;
}
// -------------------------------- AddPropertiesHeroI ----------------------------------------
export interface AddPropertiesHeroI {
  title?: string;
  description?: string;
}
