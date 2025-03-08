import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('required is email Address'),
  password: yup.string().required('required is Password'),
});
