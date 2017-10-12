import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator, ScrollView } from 'react-navigation';
import { Header } from './common'

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/compass.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
  return (
    <Image
      source={require('../assets/img/map.png')}
      style={styles.backgroundImage}
    >
      <Header text='Facility Map' />
    </Image>
  )
}
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
})

export default MapScreen;
