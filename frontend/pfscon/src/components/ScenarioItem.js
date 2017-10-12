import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';

import { CardSection } from './common';
import * as actions from '../actions/scenarioActions';
//import DetailsScreen from './DetailsScreen';

class ScenarioItem extends Component {

  render() {
    const { titleStyle, tableStyle } = styles;
    const { id, season, scenario_num, title, actions, table_num } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.navigate('Details', {scenario: this.props})}
      >
        <View>
          <CardSection style={{borderBottom: 0}}>
          <Text style={tableStyle}>
            Table # {table_num}
          </Text>
          </CardSection>
          <CardSection>
          <Text style={titleStyle}>
            #{season}-{scenario_num}: {title}
          </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 30
  },
  descriptionStyle: {
    paddingLeft: 15,
    fontSize: 15
  },
  tableStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedScenarioId === ownProps.id;
  return { expanded };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioItem);
