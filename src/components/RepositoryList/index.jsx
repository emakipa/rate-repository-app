import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState();
  const [sortVariables, setSortVariables] = useState();

  const { repositories, loading } = useRepositories({
    sortVariables,
  });

  const onPress = (sortBy, sortVariables) => {
    setSortBy(sortBy);
    setSortVariables(sortVariables);
  };

  if (loading) return null;

  return <RepositoryListContainer repositories={repositories} sortBy={sortBy} onPress={onPress} />; 
};

export default RepositoryList;