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
import { CardSection, Header } from './common';
import * as actions from '../actions/slotActions';

class SlotTable extends Component {
  renderDescription() {
      return (
        <FlatList
          style={styles.contentStyle}
          data={this.props.slot1}
          renderItem={({item}) => {
            console.log("ITEM", item);
            return (
            <ScenarioItem
              id={item.id}
              key={this.keyExtractor}
              title={item.title}
              season={item.season}
              table_num={item.table_num}
              scenario_num={item.scenario_num}
              description={item.description}
              lowLevel = {item.low_level}
              highLevel={item.high_level}
              navigation={this.props.navigation}
            />
          )}
        }
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
  contentStyle: {
    fontSize: 18
  },
  sectionStyle: {
    paddingTop: 10
  },
  titleStyle: {
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    paddingLeft: 15,
    backgroundColor: '#cdc'
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 15
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(SlotTable);
