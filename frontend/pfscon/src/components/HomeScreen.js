import React, { Component } from 'react';
import { Image, Button, StyleSheet, View } from 'react-native';
import { Content } from 'native-base';


class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Image
        source={require('../../home-icon.png')}
        style={styles.icon}
      />
    )
  };

  render() {
    return (
      <View>
        <Content style={styles.contentStyle} />
        <Button
          onPress={() => this.props.navigation.navigate('Schedule')}
          title='Go to Schedule'
        />
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
