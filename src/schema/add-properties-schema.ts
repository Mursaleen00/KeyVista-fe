// src/schema/add-properties-schema.ts

// Yup Import
import * as yup from 'yup';

// -------------------------------- location & purpose Schema ---------------------------
export const locationPurposeSchema = yup.object().shape({
  purpose: yup.string().required('Purpose type is required !'),
  residential: yup.string().required('Residential type is required !'),
  city: yup.string().required('City is required !'),
  area: yup.string().required('Area is required !'),
});

// -------------------------------- Feature & Price Schema ---------------------------
export const featurePriceSchema = yup.object().shape({
  bedrooms: yup.string().required('Bedrooms are required !'),
  bathrooms: yup.string().required('Bathrooms are required !'),
  price: yup.string().required('Price is required !'),
  size: yup.string().required('Size is required !'),
  condition: yup.string().required('Condition is required !'),
  // amenities: yup.array().of(yup.string()).required('Amenities are required'),
});

// -------------------------------- Description Schema ---------------------------
export const descriptionSchema = yup.object().shape({
  propertyName: yup.string().required('Property Name is required !'),
  description: yup.string().required('Description is required !'),
  image: yup.array().of(yup.string()).required('Image is required !'),
  sketch: yup.array().of(yup.string()).required('Sketch is required !'),
});

// Export location & purpose Schema
// export const locationAndPurposeSchema = yup.object().shape({
//   locationAndPurpose: locationPurposeSchema,
// });

// Export location & purpose Schema
// export const DescriptionSchema = yup.object().shape({
//   Description: DescriptionAndSizeSchema,
// });

// Export Feature & Price Schema
// export const FeatureAndPriceSchema = yup.object().shape({
//   FeatureAndPrice: featurePriceSchema,
// });
