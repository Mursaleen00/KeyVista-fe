import * as yup from 'yup';

export const passwordSchema = yup.object().shape({
  password: yup.string().required('required is password'),
  conformPassword: yup.string().required('required is conform password'),
});
