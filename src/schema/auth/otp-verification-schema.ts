// src/schema/auth/otp-verification-schema.ts

// Yup Import
// import { urls } from '@/constant/router/routes';
// import toast from 'react-hot-toast';

// Export OtpVerificationSchema
// export const OtpEmailSchema = yup.object().shape({
//   otp: yup
//     .number()
//     .toast({
//       message: 'OTP is required',
//     })
//     .required('OTP is required'),
// });

// schema.ts
import * as yup from 'yup';

export const OtpVerificationSchema = yup.object().shape({
  otp: yup
    .number()
    .typeError('OTP must be a number')
    .required('OTP is required'),
});
