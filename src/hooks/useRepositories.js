import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sortVariables }) => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: sortVariables,
  });

  useEffect(() => {
    data && setRepositories(data.repositories);
  }, [data]);

  return { repositories, error, loading };
};

export default useRepositories;