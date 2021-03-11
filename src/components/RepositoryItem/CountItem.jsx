import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Text from '../Text';

export const countString = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`;
};

const CountItem = ({ statisticsItem, count, testId }) => {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'white',
    },
    item: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text fontsize='subHeading' fontWeight='bold' testID={testId}>{countString(count)}</Text>
        <Text fontsize='subHeading' color='textSecondary'>{statisticsItem}</Text>
      </View>
    </View> 
  );
};

export default CountItem;