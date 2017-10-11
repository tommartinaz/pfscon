import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator, ScrollView } from 'react-navigation';

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../compass.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render() {
  return (
    <View>
      <Image
        source={require('../../map.png')}
        style={styles.backgroundImage}
      />
    </View>
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
    resizeMode: 'cover'
  },
})

export default MapScreen;
