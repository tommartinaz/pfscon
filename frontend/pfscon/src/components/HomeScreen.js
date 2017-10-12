import React, { Component } from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import { Content } from 'native-base';

import { Header } from './common';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../home-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
    return (
      <View>
        <Header text='Welcome to PFSCon' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  contentStyle: {
    paddingTop: 15
  }
});


export default HomeScreen;
