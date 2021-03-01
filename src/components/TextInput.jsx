import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.borderInput,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [style, styles.input];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;