//  src/interfaces/properties/Add-properties-interface.ts

// React Imports
import { Dispatch } from 'react';

// Types Imports
import { AddPropertiesT } from '@/types/add-properties-types/add-properties-section-types';
// --------------------------------------------- locationPurposeI ----------------------------------------
export interface locationPurposeI {
  setStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<AddPropertiesT>>;
}

// -------------------------------- featurePriceI ----------------------------------------
export interface featurePriceI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<AddPropertiesT>>;
}

// ---------------------------------- descriptionI ----------------------------------------
export interface descriptionI {
  setStep: () => void;
  prevStep: () => void;
  step?: number;
  setData: Dispatch<React.SetStateAction<AddPropertiesT>>;
}

export interface addPropertiesHeroI {
  title: string;
  description: string;
}
