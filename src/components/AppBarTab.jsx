import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    paddingRight: 10,
  },
});

const AppBarTap = ({ link, title }) => {
  return (
    <Link
      to={link}
      component={TouchableWithoutFeedback}
      activeOpacity={0.8}
    >
      <Text style={styles.tab} fontWeight='bold' color='textWhite'>{title}</Text>
  </Link>
  );
};

export default AppBarTap;