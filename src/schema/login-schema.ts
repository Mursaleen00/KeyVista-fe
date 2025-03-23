// src/schema/forgot-password-schema/ts

// Yup Import
import * as yup from 'yup';

// Export LoginSchema
export const loginSchema = yup.object().shape({
  email: yup.string().required('Email Address is required'),
  password: yup.string().required('Password is required'),
});
