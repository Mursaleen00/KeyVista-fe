// src/schema/forgot-password-schema/ts

// Yup Import
import * as yup from 'yup';

// Export LoginSchema
export const ProfileSchema = yup.object().shape({
  name: yup.string().required('Full Name is required'),
  email: yup.string().required('Email Address is required'),
});
