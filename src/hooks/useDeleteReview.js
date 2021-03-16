import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const apolloClient = useApolloClient();
  
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    // call the mutate function here with the right arguments
    await mutate({ variables: { id } });
    apolloClient.resetStore();
  };

  return [deleteReview, result];
};

export default useDeleteReview;