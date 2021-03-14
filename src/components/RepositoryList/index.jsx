import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState();
  const [variables, setVariables] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [debounceSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories, loading } = useRepositories({
    variables,
  });

  const onPress = (sortBy, variables) => {
    setSortBy(sortBy);
    setVariables(variables);
  };

  const onChangeSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  useEffect(
    () => {
      setVariables({ ...variables, searchKeyword: debounceSearchQuery });
    },
    [debounceSearchQuery]
  );

  if (loading) return null;

  console.log(searchQuery);

  return <RepositoryListContainer repositories={repositories} sortBy={sortBy} onPress={onPress} seachQuery={searchQuery} onChangeSearch={onChangeSearch} />; 
};

export default RepositoryList;