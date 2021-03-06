import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import CountItem from './CountItem';
import theme from '../../theme';

const RepositoryItemStatistics = ({ statistics }) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundWhite,
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
          <CountItem key={s.statisticsItem} statisticsItem={s.statisticsItem} count={s.count} testId={s.testId}/>
        ))}
      </View>
    </View>
  );
};

export default RepositoryItemStatistics;