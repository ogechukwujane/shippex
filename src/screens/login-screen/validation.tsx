import * as yup from 'yup';

export const LoginValidation = yup.object({
  url: yup.string().url().required('Please provide a valid url'),
  email: yup.string().required('Please provide your username or email'),
  password: yup.string().required('Please provide your password'),
});
