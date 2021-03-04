import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { Link } from 'react-router-native';
import Subheading from '../Subheading';

const styles = StyleSheet.create({
  tab: {
    paddingRight: 20,
  },
});

const AppBarTap = ({ title, link }) => {
  return (
    <Link
      to={link}
      component={TouchableWithoutFeedback}
      activeOpacity={0.8}
    >
      <Subheading style={styles.tab} color='textWhite'>
        {title}
      </Subheading>
  </Link>
  );
};

export default AppBarTap;