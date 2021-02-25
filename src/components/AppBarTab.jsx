import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const AppBarTap = ({ title }) => {
  return (
    <TouchableWithoutFeedback>
      <Text fontWeight='bold' color='primary'>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTap;