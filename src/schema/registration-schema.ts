// src/schema/registration-schema.ts

// Yup Import
import * as yup from 'yup';

// Export  registrationSchema
export const registrationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  country: yup.string().required('Country Name is required'),
  city: yup.string().required('City Name is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
  // conformPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password'), null], 'Passwords must match')
  //   .required('Conform Password is required'),
  conformPassword: yup
    .string()
    .when('password', {
      is: (val: string) => val && val.length > 0,
      then: schema =>
        schema.oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required('Confirm Password is required'),
});
