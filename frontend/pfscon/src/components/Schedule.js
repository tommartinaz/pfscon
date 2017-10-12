import React, { Component } from 'react';
import { Image, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Content, Container, Text, View } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigation } from 'react-navigation';
import Moment from 'moment';

import { Header } from './common'
import SlotTable from './SlotTable';
import * as actions from '../actions/slotActions';
import * as scenarioActions from '../actions/scenarioActions';

class Schedule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../cal-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  componentDidMount() {
    this.props.actions.fetchSlots();
    this.props.actions.fetchScenariosSlot1();
    this.props.actions.fetchScenariosSlot2();
    this.props.actions.fetchScenariosSlot3();
  }

  _renderItem = ({ item }) => {
    const { id, slot_num, start_time, end_time } = item;
    const sTime = Moment('2017-10-14', start_time).format('hh:mm a');
    console.log("TIME", sTime)
    return (
      <SlotTable
        id={id}
        title={slot_num}
        start_time={sTime}
        end_time={end_time}
        slot1={this.props.slot1}
        navigation={this.props.navigation}
      />
    );
  }

  keyExtractor = (item, index) => item.id
  render() {

    return (
      <View>
      <FlatList
          data={this.props.slots}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const mapStateToProps = state => {
  return {
    slots: state.slots,
    slot1: state.slot1,
    slot2: state.slot2,
    slot3: state.slot3
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions, scenarioActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
