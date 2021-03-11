import React from 'react';
import { Formik } from 'formik';
import CreateReviewForm from './CreateReviewForm';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text:'',
};

const CreateReviewContainer = ({ onSubmit, validationSchema }) => {
  
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;