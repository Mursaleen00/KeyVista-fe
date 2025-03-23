// src/schema/forgot-password-schema/ts

// Yup Import
import * as yup from 'yup';

// Export ForgotPasswordSchema
export const ForgotPasswordSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  conformPassword: yup.string().required('Conform Password is required '),
});
