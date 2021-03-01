import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
      <AppBarTab link='/' title='Repositories'></AppBarTab>
        <AppBarTab link='/signin' title='Sign in'></AppBarTab>
      </ScrollView>
    </View>
    );
};

export default AppBar;