import React, { useState } from 'react';
import {
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native';
import {
  Menu,
  Divider,
  Provider
} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Text from '../Text';
import theme from '../../theme';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundMain,
  },
  container1: {
    display: 'flex',
    borderRadius: 5,
    backgroundColor: theme.colors.backgroundMain,
  },
  container2: {
    display: 'flex',
    backgroundColor: theme.colors.backgroundMain,
  },
  menu: {
    paddingTop: 150,
    marginLeft: 10,
    width: width - 40,
  },
  button: {
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'flex-start',
  },
  icon: {
    paddingRight: 20,
    alignSelf: 'flex-end',
  }
});

const ListHeaderMenu = ({ sortBy, onPress }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View >
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableWithoutFeedback onPress={openMenu}>
              <View style={styles.container}>
                <View style={styles.container1}>
                  <View style={styles.button}> 
                    <Text style={styles.buttonText}>
                      {sortBy ? sortBy : "Latest repositories"}  
                    </Text>
                  </View>    
                </View>
                <View style={styles.container2}>
                  <View style={styles.icon}>
                    <AntDesign size={15} color="black" name="caretdown" />  
                  </View> 
                </View>
              </View>
            </TouchableWithoutFeedback>
          }
        >
          <Menu.Item disabled={true} title='Select an item...' />
          <Divider />
          <Menu.Item onPress={() => {
            const value = 'Latest repositories';
            onPress(value, { orderBy: 'CREATED_AT', orderDirection: 'DESC' });
          }} title='Latest repositories' />
          <Menu.Item onPress={() => {
            const value = 'Highest rated repositories';
            onPress(value, { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' });
          }} title='Highest rated repositories' />
          <Menu.Item onPress={() => {
            const value = 'Lowest rated repositories';
            onPress(value, { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' });
          }} title='Lowest rated repositories' />
        </Menu>
      </View>
    </Provider>
  );
};

export default ListHeaderMenu;