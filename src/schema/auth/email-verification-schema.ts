// src/schema/auth/email-verification-schema.ts

// Yup Import
import * as yup from 'yup';

// Export EmailVerificationSchema
export const EmailVerificationSchema = yup.object().shape({
  email: yup.string().required('Email Address is required'),
});
