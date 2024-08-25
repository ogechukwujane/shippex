import * as yup from 'yup';

export const LoginValidation = yup.object({
  email: yup.string().required('Please provide your username or email'),
  password: yup.string().required('Please provide your password'),
});
