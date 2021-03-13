import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {

  return (
    <View>
      <RepositoryItem repository={repository}/>
      <ItemSeparator />
    </View> 
  );
};

export default RepositoryInfo;