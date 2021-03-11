import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from "../Text";
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
    display: 'flex',
    padding: 20,
  },
  button: {
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    padding: 15,
  },
  buttonText: {
    color: theme.colors.textWhite,
    alignSelf: 'center',
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  
  return (
    <View style={styles.container}>
      <FormikTextInput name='repositoryName' placeholder='Repository name' testId='repositoryNameInput'/>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' testId='ownerNameInput'/>
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' testId='ratingInput'/>
      <FormikTextInput name='text' placeholder='Review' testId='textInput' multiline={true}/>
      <TouchableWithoutFeedback onPress={onSubmit} testID="createReviewButton">
        <View style={styles.button}>
          <Text style={styles.buttonText} fontWeight='bold'>Create a review</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateReviewForm;