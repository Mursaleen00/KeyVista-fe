// src/schema/profile-schema.ts

// Yup Import
import * as yup from 'yup';

// Export profileSchema
export const registrationSchema = yup.object().shape({
  fullName: yup.string().required('required is Full Name'),
  email: yup.string().required('required is email address'),
  password: yup.string().required('required is Password '),
  conformPassword: yup.string().required('Conform Password '),
});
