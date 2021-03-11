import React from 'react';
import { useHistory } from "react-router-native";
import * as yup from 'yup';
import SignUpContainer from './SignUpContainer';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character!')
    .max(30, 'Username must not be over 30 characters!')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters!')
    .max(50, 'Password must not be over 50 characters!')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signUp({ username, password });
      console.log(data);
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default SignUp;