import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) return null;

  return <RepositoryListContainer repositories={repositories} />; 
};

export default RepositoryList;