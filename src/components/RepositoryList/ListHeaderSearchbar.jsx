import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});

const ListHeaderSearchbar = ({ searchQuery, onChangeSearch }) => {

  return (
    <Searchbar 
      style={styles.input}
      placeholder='Search repositories'
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default ListHeaderSearchbar;