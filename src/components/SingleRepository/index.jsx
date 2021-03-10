import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryItem';

const SingleRepository = () => {

  const { id } = useParams();
  const { data, loading } = useRepository(id);
  
  if (loading) return null;

  return <RepositoryItem item={data.repository} />; 
};

export default SingleRepository;