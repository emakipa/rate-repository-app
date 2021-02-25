import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => {
  
  return (
    <View >
      <Text fontsize='body'>Full name: {item.fullName}</Text>
      <Text fontsize='body'>Description: {item.description}</Text>
      <Text fontsize='body'>Language: {item.language}</Text>
      <Text fontsize='body'>Forks: {item.forksCount}</Text>
      <Text fontsize='body'>Stars: {item.stargazersCount}</Text>
      <Text fontsize='body'>Rating: {item.ratingAverage}</Text>
      <Text fontsize='body'>Reviews: {item.reviewCount}</Text>
      <Text fontsize='body'>Owner avatar url: {item.ownerAvatarUrl}</Text>
    </View> 
  );
};

export default RepositoryItem;