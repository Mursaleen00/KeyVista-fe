import * as yup from 'yup';

export const OtpEmailSchema = yup.object().shape({
  email: yup.string().required('Email Address is required'),
});
