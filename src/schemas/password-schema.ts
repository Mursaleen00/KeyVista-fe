import * as yup from 'yup';

export const passwordSchema = yup.object().shape({
  password: yup.string().required('required is Password'),
  conformPassword: yup.string().required('required is Conform Password'),
});
