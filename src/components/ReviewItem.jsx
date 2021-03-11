import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { format, parseISO } from 'date-fns';
import Text from "./Text";
import theme from '../theme';

const ReviewItem = ({ review }) => {
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.backgroundWhite,
    },
    container1: {
      padding: 20,
      flexDirection: 'column',
    },
    container2: {
      padding: 20,
      flex: 1,
      flexDirection: 'column',
    },
    rating: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 3,
      borderColor: theme.colors.primary
    },
    usernameText: {
      marginBottom: 5,
    },
    dateText: {
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.rating}>  
          <Text fontSize='subheading' fontWeight='bold' color='primary'>{review.rating}</Text>
        </View>
      </View> 
      <View style={styles.container2}>
        <View style={styles.usernameText}>
          <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
        </View>
        <View style={styles.dateText}>  
          <Text color='textSecondary'>{format(parseISO(review.createdAt), 'dd.MM.yyyy')}</Text>
        </View>
        <View>  
          <Text>{review.text}</Text>
        </View>
      </View> 
    </View>
  );
};

export default ReviewItem;