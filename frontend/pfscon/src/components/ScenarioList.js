import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Image, View, ListItem } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/scenarioActions';

import ScenarioItem from './ScenarioItem';

class ScenarioList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Scenarios',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../home-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  componentDidMount() {
    this.props.actions.fetchScenarios();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <ScenarioItem
      id={item.id}
      key={item.id}
      title={item.title}
      season={item.season}
      scenario_num={item.scenario_num}
      description={item.description}
    />
  )

  render() {
    return (
      <FlatList
        style={styles.contentStyle}
        data={this.props.scenarios}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
const styles = {
  icon: {
    width: 26,
    height: 26
  },
  contentStyle: {
    paddingTop: 15
  }
};

const mapStateToProps = state => {
  return { scenarios: state.scenarios };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioList);
