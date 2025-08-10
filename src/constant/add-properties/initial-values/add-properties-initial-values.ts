// src/constant/add-properties/initial-values/add-properties-initial-values.ts

// Types Imports
import { initialLocationAndPurposeT } from '@/types/add-properties-types/location-purpose-types';
import { initialDescriptionT } from '@/types/add-properties-types/description-type';
import { initialFeaturePriceT } from '@/types/add-properties-types/feature-price-types';

// --------------------------- LocationAndPurpose --------------------------

export const locationAndPurposeInitial: initialLocationAndPurposeT = {
  area: '',
  city: '',
  purpose: '',
  residential: '',
};

// --------------------------- FeatureAndPrice --------------------------

export const featureAndPriceInitial: initialFeaturePriceT = {
  size: '',
  bathrooms: '',
  bedrooms: '',
  amenities: '',
  price: '',
  condition: '',
};

// --------------------------- Description --------------------------

export const descriptionInitial: initialDescriptionT = {
  propertyName: '',
  description: '',
  image: '',
  sketch: '',
};
