import React from 'react';
import { View, StyleSheet } from 'react-native';
import CountItem from './CountItem';

const RepositoryItemStatistics = ({ statistics }) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
  
  return (
    <View style={styles.container}>
      <View  style={styles.item}>
        {statistics.map((s) => (  
          <CountItem key={s.statisticsItem} statisticsItem={s.statisticsItem} count={s.count} />
        ))}
      </View>
    </View>
  );
};

export default RepositoryItemStatistics;