import React from 'react';
import { useHistory } from "react-router-native";
import * as yup from 'yup';
import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character!')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters!')
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default SignIn;