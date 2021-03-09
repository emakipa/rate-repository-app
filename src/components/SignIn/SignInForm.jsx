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

const SignInForm = ({ onSubmit }) => {
  
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' testId='usernameInput'/>
      <FormikTextInput name='password' placeholder='Password' testId='passwordInput' secureTextEntry/>
      <TouchableWithoutFeedback onPress={onSubmit} testID="signInButton">
        <View style={styles.button}>
          <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;