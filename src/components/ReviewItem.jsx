import React from 'react';
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useHistory } from "react-router-native";
import * as Linking from 'expo-linking';
import { format, parseISO } from 'date-fns';
import useDeleteReview from '../hooks/useDeleteReview';
import Text from "./Text";
import theme from '../theme';

const ReviewItem = ({ review, isUserReviews }) => {

  const history = useHistory();

  const [deleteReview] = useDeleteReview();
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: theme.colors.backgroundWhite,
    },
    container1: {
      flexDirection: 'row',
      backgroundColor: theme.colors.backgroundWhite,
    },
    container2: {
      padding: 20,
      flexDirection: 'column',
    },
    container3: {
      padding: 20,
      flex: 1,
      flexDirection: 'column',
    },
    container4: {
      marginHorizontal: 20,
      paddingBottom: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    usernameOrRepositoryText: {
      marginBottom: 5,
    },
    dateText: {
      marginBottom: 10,
    },
    button1: {
      borderRadius: 5,
      backgroundColor: theme.colors.primary,
      padding: 15,
    },
    button2: {
      borderRadius: 5,
      backgroundColor: theme.colors.backgroundRed,
      padding: 15,
    },
    buttonText: {
      color: theme.colors.textWhite,
      alignSelf: 'center',
    },
  });

  const openInGitHub = () => {
    Linking.openURL(review.repository.url);
  };

  const onDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this reviw?',
      [
        {
          text: "Cancel",
          //onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: async () => {
            //console.log("DELETE Pressed");
            await deleteReview(review.id);
            history.push('/');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.rating}>  
            <Text fontSize='subheading' fontWeight='bold' color='primary'>{review.rating}</Text>
          </View>
        </View> 
        <View style={styles.container3}>
          <View style={styles.usernameOrRepositoryText}>
            {isUserReviews ?
              <Text fontSize='subheading' fontWeight='bold'>{review.repository.fullName}</Text> :
              <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
            }
          </View>
          <View style={styles.dateText}>  
            <Text color='textSecondary'>{format(parseISO(review.createdAt), 'dd.MM.yyyy')}</Text>
          </View>
          <View>  
            <Text>{review.text}</Text>
          </View>
        </View> 
      </View>
      {isUserReviews && 
        <View style={styles.container4}>
          <TouchableWithoutFeedback onPress={openInGitHub}>
            <View style={styles.button1}>  
              <Text style={styles.buttonText} fontWeight='bold' >View repository</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onDeleteReview}>
            <View style={styles.button2}>  
              <Text style={styles.buttonText} fontWeight='bold' >Delete review</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        }
    </View>
  );
};

export default ReviewItem;