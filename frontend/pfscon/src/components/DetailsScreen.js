import { View, Text } from 'react-native';
import React, { Component } from 'react'

class DetailsScreen extends Component {
  render() {
  return (
    <View>
      <Text>{this.props.navigation.state.params.description}</Text>
    </View>
  )
}
}

export default DetailsScreen;
