// src/constant/add-properties/initial-values/add-properties-initial-values.ts

// Types Imports
import { locationAndPurpose } from '@/types/add-properties-types/location-purpose-types';
import { initialDescriptionT } from '@/types/add-properties-types/description-type';
import { initialFeaturePriceT } from '@/types/add-properties-types/feature-price-types';

// --------------------------- LocationAndPurpose --------------------------

export const LocationAndPurposeInitial: locationAndPurpose = {
  area: '',
  city: '',
  purpose: '',
  residential: '',
};

// --------------------------- FeatureAndPrice --------------------------

export const FeatureAndPriceInitial: initialFeaturePriceT = {
  size: '',
  bathrooms: '',
  bedrooms: '',
  amenities: '',
  price: '',
  condition: '',
};

// --------------------------- Description --------------------------

export const DescriptionInitial: initialDescriptionT = {
  propertyName: '',
  description: '',
  image: '',
  sketch: '',
};
