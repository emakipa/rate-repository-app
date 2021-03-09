import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import Text from './Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
  },
});

const FormikTextInput = ({ name, testId, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        testID={testId}
        {...props}
      />
      {showError && <Text style={styles.errorText} color='textError'>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;