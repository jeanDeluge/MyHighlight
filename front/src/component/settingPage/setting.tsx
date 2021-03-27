import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const settingPage = () => {
  return (
    <View style={styles.new}>
      <ImageBackground
        source={require('../../assets/img/cherry-blossom-tree=1225186_1920.jpeg')}>
        <Text>Hello!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  new: {
    alignItems: 'center',
  },
});

export default settingPage;
