// src/schema/add-properties.ts

// Yup Import
import * as yup from 'yup';

// -------------------------------- location & purpose Schema ---------------------------
export const locationPurposeSchema = yup.object().shape({
  purpose: yup.string().required('Purpose type is required'),
  residentialType: yup.string().required('Residential type is required'),
  city: yup.string().required('City is required'),
  area: yup.number().required('Area is required'),
});

// -------------------------------- Description Schema ---------------------------
const DescriptionAndSizeSchema = yup.object().shape({
  PropertyName: yup.string().required('Description is required'),
  description: yup.string().required('Description is required'),
  image: yup.array().of(yup.string()).required('Image is required'),
  sketch: yup.array().of(yup.string()).required('Sketch is required'),
});

// -------------------------------- Feature & Price Schema ---------------------------
const FeaturePriceSchema = yup.object().shape({
  bedrooms: yup
    .number()
    .min(1, 'Bedrooms must be at least 1')
    .required('Bedrooms are required'),
  bathrooms: yup
    .number()
    .min(1, 'Bathrooms must be at least 1')
    .required('Bathrooms are required'),
  price: yup.number().required('Price is required'),
  amenities: yup.array().of(yup.string()).required('Amenities are required'),
});

// Export location & purpose Schema
export const locationAndPurposeSchema = yup.object().shape({
  locationAndPurpose: locationPurposeSchema,
});

// Export location & purpose Schema
export const DescriptionSchema = yup.object().shape({
  Description: DescriptionAndSizeSchema,
});

// Export Feature & Price Schema
export const FeatureAndPriceSchema = yup.object().shape({
  FeatureAndPrice: FeaturePriceSchema,
});
