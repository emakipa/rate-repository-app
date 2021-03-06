import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from '../ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {

  const { id } = useParams();
  const { data, loading, fetchMore } = useRepository({ id, first: 7 });
  
  if (loading) return null;

  const { repository } = data;

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  // Get the review nodes from the edges array
  const reviewNodes = data
    ? repository.reviews.edges.map(edge => edge.node)
    : [];
  
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    /> 
  );
};

export default SingleRepository;