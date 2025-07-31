// src/schema/forgot-password-schema.ts

// Yup Import
import * as yup from 'yup';

export const FilterSchema = yup.object().shape({
  PriceFrom: yup
    .number()
    // .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('PriceFrom is required'),
  PriceTo: yup
    .number()
    // .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('PriceTo is required'),
  AreaFrom: yup
    .number()
    // .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('AreaFrom is required'),
  AreaTo: yup
    .number()
    // .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('AreaTo is required'),
  // City: yup.string().required('City is required'),
  // Location: yup.string().required('Location is required'),
  // Property: yup.string().required('Property type is required'),
  // Purpose: yup.string().required('Purpose is required'),
  // Beds: yup.string().required('Beds are required'),
});
// export const SelectSchema = yup.object().shape({
//   City: yup.string().required('City is required'),
//   Location: yup.string().required('Location is required'),
//   Property: yup.string().required('Property type is required'),
//   Purpose: yup.string().required('Purpose is required'),
//   Beds: yup.string().required('Beds are required'),
// });
