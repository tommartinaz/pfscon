import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CardSection } from './common';
import * as actions from '../actions/';

class ScenarioItem extends Component {
  renderDescription() {
    const { scenario, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{scenario.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    // const { id, season, scenario_num, title } = this.props.scenario;
    const id = this.props.id;
    const title = this.props.title;
    const season = this.props.season;
    const scenario_num = this.props.scenario_num;
    const description = this.props.description;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.actions.selectedScenarioId(id)}
      >
        <View>
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
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 18,
    fontSize: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log("DJEGPOGEEHG", state, ownProps);
  const expanded = state.selectedScenarioId === ownProps.id;
  return { expanded };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ScenarioItem);
