import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ variables }) => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables,
  });

  useEffect(() => {
    data && setRepositories(data.repositories);
  }, [data]);

  return { repositories, error, loading };
};

export default useRepositories;