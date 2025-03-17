import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('email address is required'),
  password: yup.string().required('password is required'),
});
