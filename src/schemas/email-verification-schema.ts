// src/schema/profile-schema.ts

// Yup Import
import * as yup from 'yup';

// Export profileSchema
export const emailVerificationSchema = yup.object().shape({
  text: yup.string().required('Enter the 6-digit verification code '),
  numberB: yup.string().required('Enter the 6-digit verification code '),
  numberC: yup.string().required('Enter the 6-digit verification code '),
  numberD: yup.string().required('Enter the 6-digit verification code '),
  numberE: yup.string().required('Enter the 6-digit verification code '),
  numberF: yup.string().required('Enter the 6-digit verification code '),
});
