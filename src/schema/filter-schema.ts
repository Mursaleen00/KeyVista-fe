// src/schema/forgot-password-schema.ts

// Yup Import
import * as yup from 'yup';

// Export ForgotPasswordSchema
// export const FilterSchema = yup.object().shape({
//   PriceFrom: yup.number().required('PriceFrom is required'),
//   PriceTo: yup.number().required('PriceTo is required'),
//   AreaFrom: yup.number().required('AreaFrom is required'),
//   AreaTo: yup.number().required('AreaTo is required'),
// });
export const FilterSchema = yup.object().shape({
  PriceFrom: yup
    .number()
    .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('PriceFrom is required'),
  PriceTo: yup
    .number()
    .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('PriceTo is required'),
  AreaFrom: yup
    .number()
    .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('AreaFrom is required'),
  AreaTo: yup
    .number()
    .transform((_, val) => (val === '' ? undefined : Number(val)))
    .required('AreaTo is required'),
});
