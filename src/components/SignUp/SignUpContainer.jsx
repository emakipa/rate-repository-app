import React from 'react';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const SignUpContainer = ({ onSubmit, validationSchema }) => {
  
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;