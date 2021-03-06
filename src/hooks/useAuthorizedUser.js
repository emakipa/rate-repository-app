import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {
  const [authorizedUser, setAuthorizedUser] = useState();

  const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  useEffect(() => {
    data && setAuthorizedUser(data.authorizedUser);
  }, [data]);

  return { authorizedUser, error, loading };
};

export default useAuthorizedUser;