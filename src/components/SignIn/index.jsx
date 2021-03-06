import React from 'react';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters!')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Username must be at least 3 characters!')
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
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );

  
};

export default SignIn;