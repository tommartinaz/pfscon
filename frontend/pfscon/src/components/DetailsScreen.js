import { View, Text } from 'react-native';
import React, { Component } from 'react';

import { CardSection } from './common';

class DetailsScreen extends Component {
  render() {
    const {
      description,
      title,
      season,
      scenario_num,
      lowLevel,
      highLevel
    } = this.props.navigation.state.params.scenario;
  return (
    <View>
      <Text style={styles.titleStyle}>
        {season}-{scenario_num}: {title}
      </Text>
      <Text style={styles.levelStyle}>
        Levels {lowLevel} - {highLevel}
      </Text>
      <Text style={styles.detailsStyle}>
        {description}
      </Text>
    </View>
  )
}
}
const styles={
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  levelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  detailsStyle: {
    fontSize: 14,
    paddingLeft: 10
  }
}

export default DetailsScreen;
