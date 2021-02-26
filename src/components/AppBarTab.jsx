import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingRight: 10,
  },
});

const AppBarTap = ({ title }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.tab} fontWeight='bold' color='textWhite'>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTap;