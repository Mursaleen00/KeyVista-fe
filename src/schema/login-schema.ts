import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email Address is required'),
  password: yup.string().required('Password is required'),
});
