// src/schema/forgot-password-schema.ts

// Yup Import
import * as yup from 'yup';

// Export ForgotPasswordSchema
export const ChangePasswordSchema = yup.object().shape({
  OldPassword: yup.string().required('OldPassword is required'),
  NewPassword: yup.string().required('Create New Password'),
  conformPassword: yup.string().required('Conform Password is required'),
});
