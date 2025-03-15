// src/schema/profile-schema.ts

// Yup Import
import * as yup from 'yup';

// Export profileSchema
export const registrationSchema = yup.object().shape({
  fullName: yup.string().required('required is Full Name'),
  number: yup.string().required('required is phone number'),
  country: yup.string().required('required is Country name'),
  city: yup.string().required('required is City name'),
  email: yup.string().required('required is email address'),
  password: yup.string().required('required is Password '),
  conformPassword: yup.string().required('required is Conform Password '),
});
