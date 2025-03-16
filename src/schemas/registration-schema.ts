// src/schema/profile-schema.ts

// Yup Import
import * as yup from 'yup';

// Export profileSchema
export const registrationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required '),
  number: yup.string().required('Phone number is required'),
  country: yup.string().required('Country name is required'),
  city: yup.string().required('City name is required'),
  email: yup.string().required(' Email is required'),
  password: yup.string().required('Password is required'),
  conformPassword: yup.string().required('Conform Password is required'),
});
