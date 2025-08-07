// src/types/add-properties-types/add-properties-section-types.ts

// formik
import { FormikProps } from 'formik';

// locationAndPurpose Types Export
import { ResidentialT } from '@/types/add-properties-types/location-purpose-types';

// =============================== Export Type AddToCardOnboardingT ===========================
export type AddPropertiesT = {
  locationAndPurpose: ResidentialT;
  FeatureAndPrice: FeatureAndPriceT;
};

//  =================================== Export FeatureAndPriceT ===================================
export type FeatureAndPriceT = {
  bedrooms?: string;
  bathrooms?: string;
  Amenities?: string;
};

// =================================== Export StepBarT ===================================
export type StepBarT = {
  tittle: string;
  icon?: string;
  darkIcon?: string;
};

// =============================== Export AddToCardOnboardingType ===========================
export type AddToCardOnboardingType = FormikProps<AddPropertiesT>;

// export type LocationAndPurposeType = FormikProps<locationAndPurpose>;
