import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useApolloClient } from '@apollo/client';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: theme.colors.backgroundAppBar,
  },
  scrollView: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  const { authorizedUser } = useAuthorizedUser();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  
  const signOut = async () => {    
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab link='/' title='Repositories'></AppBarTab>
        {!authorizedUser && <AppBarTab link='/signin' title='Sign in'></AppBarTab>}
        {authorizedUser && <AppBarTab onPress={signOut} link='/' title='Sign out'></AppBarTab>}
      </ScrollView>
    </View>
    );
};

export default AppBar;