import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryItemDescription = ({ fullName, description, language }) => {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: theme.colors.backgroundWhite,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    separator: {
      paddingBottom: 10,
    },
    language: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textWhite,
      padding: 5,
      borderRadius: 5,
    },
  });
  
  return (
    <View style={styles.container}> 
      <View style={styles.separator}>     
        <Text fontsize='subHeading' fontWeight='bold'>{fullName}</Text>
      </View>
      <View style={styles.separator}>
        <Text fontsize='subHeading' color='textSecondary'>{description}</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.language} fontsize='subHeading'>{language}</Text>
      </View>
    </View>
  );
};

export default RepositoryItemDescription;