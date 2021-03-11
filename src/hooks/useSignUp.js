import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { user: { username, password } } });
    apolloClient.resetStore();
    return data;
  };

  return [signUp, result];
};

export default useSignUp;