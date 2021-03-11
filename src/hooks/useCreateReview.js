import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const apolloClient = useApolloClient();
  
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { review: { repositoryName, ownerName, rating, text } } });
    apolloClient.resetStore();
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;