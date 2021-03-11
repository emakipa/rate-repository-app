import React from 'react';
import { useHistory } from "react-router-native";
import * as yup from 'yup';
import CreateReviewContainer from './CreateReviewContainer';
import useCreateReview from '../../hooks/useCreateReview';

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be 0 - 100!')
    .max(100, 'Rating must be 0 - 100!')
    .required('Rating is required'),
  text: yup
    .string(),
});

const CreateReview = () => {
  const [createReview] = useCreateReview();

  const history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      const data = await createReview({ repositoryName, ownerName, rating: Number(rating), text });
      console.log(data);
      history.push((`/${data.createReview.repositoryId}`));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default CreateReview;