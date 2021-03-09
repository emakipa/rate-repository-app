import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemImage from './RepositoryItemImage';
import RepositoryItemStatistics from './RepositoryItemStatistics';
import theme from '../../theme';

const RepositoryItem = ({ item }) => {
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: theme.colors.backgroundWhite,
    },
    container1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    container2: {
      display: 'flex',
      paddingTop: 20,
    },
    container3: {
      display: 'flex',
    },
  });

  const statistics = [
    { statisticsItem: 'Stars', count: item.stargazersCount, testId: 'stargazersCount' },
    { statisticsItem: 'Forks', count: item.forksCount, testId: 'forksCount' },
    { statisticsItem: 'Reviews', count: item.reviewCount, testId: 'reviewCount' },
    { statisticsItem: 'Rating', count: item.ratingAverage, testId: 'ratingAverage' }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <RepositoryItemImage imageSource={item.ownerAvatarUrl} />
        </View>
        <View style={styles.container2}>
          <RepositoryItemDescription fullName={item.fullName} description={item.description} language={item.language} />
        </View>
      </View>
      <View style={styles.container3}>
        <RepositoryItemStatistics statistics={statistics} />  
      </View>
    </View> 
  );
};

export default RepositoryItem;