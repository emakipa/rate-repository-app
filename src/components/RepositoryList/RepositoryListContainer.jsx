import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import RepositoryItem from '../RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  repositoryListHeader: {
    zIndex: 1,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <View >
    <TouchableOpacity onPress={() => history.push(`/${item.id}`)} activeOpacity='0.8'>
      <RepositoryItem repository={item} />
    </TouchableOpacity>
  </View> 
);

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { sortBy, onPress, searchQuery, onChangeSearch } = this.props;

    return (
      <RepositoryListHeader
        sortBy={sortBy}
        onPress={onPress}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
      />
    );
  };

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories?.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.repositoryListHeader}
      />
    );
  }
}

export default RepositoryListContainer;