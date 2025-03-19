import * as yup from 'yup';

export const passwordSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  conformPassword: yup.string().required('Conform Password is required '),
});
