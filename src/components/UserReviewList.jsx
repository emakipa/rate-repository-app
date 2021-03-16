import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewList = () => {
  
  const { authorizedUser, loading } = useAuthorizedUser({ includeReviews: true });

  if (loading) return null;

  // Get the review nodes from the edges array
  const reviewNodes = authorizedUser
    ? authorizedUser.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} isUserReviews='true' />}
      keyExtractor={item => item.id}
    />
  );
};

export default UserReviewList;