import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Image, View } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import ScenarioItem from './ScenarioItem';

class ScenarioList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Scenarios',
    tabBarIcon: () => (
      <Image
        source={require('../../home-icon.png')}
        style={styles.icon}
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
    const loaded = this.props.scenarios ? true : false;
    console.log('RENDER', this.props.scenarios);
    if (loaded) {
      return (
        <FlatList
          data={this.props.scenarios}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
        />
      );
    }
  }
}
const styles = {
  icon: {
    width: 26,
    height: 26
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
