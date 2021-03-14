import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View
} from 'react-native';
import {
  Menu,
  Divider,
  Provider
} from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundMain,
    paddingTop: 15,
    paddingBottom: 20,
  },
  menu: {
    marginLeft: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: theme.colors.backgroundMain,
  },
  buttonText: {
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'flex-start',
  },
  icon: {
    paddingLeft: 20,
  }
});

const ListHeaderMenu = ({ sortBy, onPress }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <View style={styles.button}>
              <TouchableWithoutFeedback onPress={openMenu}>
                <View> 
                  <Text style={styles.buttonText}>
                    {sortBy ? sortBy : "Latest repositories"} 
                    <View style={styles.icon}>
                      {visible ? 
                        <AntDesign name="up" /> :
                        <AntDesign name="down" />
                      }
                    </View> 
                  </Text>
                </View>    
              </TouchableWithoutFeedback>
            </View>
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