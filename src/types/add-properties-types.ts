// src/types/add-properties-types.ts

// formik
import { FormikProps } from 'formik';

//----------------------- Export Type AddToCardOnboardingT ---------------------
export type AddPropertiesT = {
  locationAndPurpose: ResidentialT;
  FeatureAndPrice: FeatureAndPriceT;
};

// Export FeatureAndPriceT
export type FeatureAndPriceT = {
  bedrooms?: string;
  bathrooms?: string;
  Amenities?: string;
};

// Export ResidentialT
export type ResidentialT = {
  Residential: string;
};

// Export StepBarT
export type StepBarT = {
  tittle: string;
  icon?: string;
  darkIcon?: string;
};

// =============================== Export AddToCardOnboardingType ===========================
export type AddToCardOnboardingType = FormikProps<AddPropertiesT>;
