// src/schema/otp-email-schema/ts

// Yup Import
import * as yup from 'yup';

// Export OtpEmailSchema
export const OtpEmailSchema = yup.object().shape({
  email: yup.string().required('Email Address is required'),
});
