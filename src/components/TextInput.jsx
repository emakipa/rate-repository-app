import React from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput
} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.borderInput,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10
  },
  inputError: {
    borderColor: theme.colors.borderInputError,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input, error && styles.inputError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;