import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import theme from '../theme';

const RepositoryItemImage = ({ imageSource }) => {

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: theme.colors.backgroundWhite,
    },
    tinyLogo: {
      width: 50,
      height: 50,
      margin: 20,
      borderRadius: 5,
    },
  });
  
  return (
    <View style={styles.container}> 

          <Image
            style={styles.tinyLogo}
            source={ { uri: imageSource, } }
          />

    </View>
  );
};

export default RepositoryItemImage;