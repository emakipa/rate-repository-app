import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import * as Linking from 'expo-linking';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemImage from './RepositoryItemImage';
import RepositoryItemStatistics from './RepositoryItemStatistics';
import Text from "../Text";
import theme from '../../theme';

const RepositoryItem = ({ repository }) => {
  
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
      flex: 1,
      paddingTop: 20,
    },
    container3: {
      display: 'flex',
    },
    button: {
      margin: 20,
      borderRadius: 5,
      backgroundColor: theme.colors.primary,
      padding: 15,
    },
    buttonText: {
      color: theme.colors.textWhite,
      alignSelf: 'center',
    },
  });

  const statistics = [
    { statisticsItem: 'Stars', count: repository.stargazersCount, testId: 'stargazersCount' },
    { statisticsItem: 'Forks', count: repository.forksCount, testId: 'forksCount' },
    { statisticsItem: 'Reviews', count: repository.reviewCount, testId: 'reviewCount' },
    { statisticsItem: 'Rating', count: repository.ratingAverage, testId: 'ratingAverage' }
  ];

  const openInGitHub = () => {
    Linking.openURL(repository.url);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <RepositoryItemImage imageSource={repository.ownerAvatarUrl} />
        </View>
        <View style={styles.container2}>
          <RepositoryItemDescription fullName={repository.fullName} description={repository.description} language={repository.language} />
        </View>
      </View>
      <View style={styles.container3}>
        <RepositoryItemStatistics statistics={statistics} />  
      </View>
      {repository.url && 
        <TouchableWithoutFeedback onPress={openInGitHub}>
          <View style={styles.button}>  
            <Text style={styles.buttonText} fontWeight='bold' >Open in GitHub</Text>
          </View>
        </TouchableWithoutFeedback>
      }
    </View> 
  );
};

export default RepositoryItem;