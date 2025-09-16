// src/types/add-properties-types/add-properties-section-types.ts

// =============================== Export Type AddToCardOnboardingT ===========================
export type AddPropertiesT = {
  area: string;
  city: string;
  purpose: string;
  residential: string;
  size: string;
  bathrooms: string;
  bedrooms: string;
  amenities: string;
  price: string;
  condition: string;
  propertyName: string;
  description: string;
  image?: string;
  sketch?: string;
};

// =================================== Export StepBarT ===================================
export type StepBarT = {
  tittle: string;
  icon?: string;
  darkIcon?: string;
};
