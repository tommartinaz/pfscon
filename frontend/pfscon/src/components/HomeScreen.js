import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import { Header } from './common';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/home-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
    return (
      <Image source={require('../assets/img/goblin.png')} style={styles.viewStyle}>
        <Header text='Welcome to PFSCon' />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  textStyle: {
    paddingTop: 400,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(225, 225, 225, .0)',
    color: '#F4AF2B',
  },
  viewStyle: {
    flex: 1,
    width: null,
    height: null
  }
});


export default HomeScreen;
