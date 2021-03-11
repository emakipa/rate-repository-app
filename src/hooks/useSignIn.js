import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { credentials: { username, password } } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;