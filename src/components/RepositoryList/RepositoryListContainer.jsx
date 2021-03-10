import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useHistory } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ repositories }) => {

  const history = useHistory();

  
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  /* const viewRepository = () => {
    console.log('Näytä reposotorion tiedot!');
    //history.push(`/repository/${item.id}`);
  }; */
  
  const renderItem = ({ item }) => (
    
    /* const viewRepository = () => {
      console.log('Näytä reposotorion tiedot!', item.id);
      history.push(`/repository/${item.id}`);
    }; */
    <View >
      <TouchableOpacity onPress={() => history.push(`/${item.id}`)} activeOpacity='0.8'>
        <RepositoryItem item={item} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;