import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Text from '../Text';

const CountItem = ({ statisticsItem, count }) => {
  const countString = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`;

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'white',
    },
    item: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text fontsize='subHeading' fontWeight='bold'>{countString}</Text>
        <Text fontsize='subHeading' color='textSecondary'>{statisticsItem}</Text>
      </View>
    </View> 
  );
};

export default CountItem;