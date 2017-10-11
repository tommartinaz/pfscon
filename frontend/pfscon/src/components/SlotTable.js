import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ScenarioItem from './ScenarioItem';
import { CardSection } from './common';
import * as actions from '../actions/slotActions';

class SlotTable extends Component {
  renderDescription() {
      return (
        <FlatList
          style={styles.contentStyle}
          data={this.props.scenarios}
          renderItem={({item}) => (
            <ScenarioItem
              id={item.id}
              key={this.keyExtractor}
              title={item.title}
              season={item.season}
              scenario_num={item.scenario_num}
              description={item.description}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      );
  }

  render() {
    const { titleStyle, sectionStyle } = styles;
    const { id, title, start_time, end_time } = this.props;
    return (
        <View>
          <CardSection>
            <Text style={titleStyle}>
              Slot {title}: {start_time} - {end_time}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
    );
  }
}

const styles = {
  sectionStyle: {
    paddingTop: 10
  },
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 18,
    fontSize: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  return { scenarios: state.slot1 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlotTable);
