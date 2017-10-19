import React, { Component } from 'react';
import { Image, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Content, Container, Text, View } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigation } from 'react-navigation';
import Moment from 'moment';

import { Header, Spinner } from './common'
import SlotTable from './SlotTable';
import * as actions from '../actions/slotActions';
import * as scenarioActions from '../actions/scenarioActions';

class Schedule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/cal-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  componentDidMount() {
    this.props.actions.fetchSlots();
    this.props.actions.fetchScenariosSlot1();
    // this.props.actions.fetchScenariosSlot2();
    // this.props.actions.fetchScenariosSlot3();
  }

  _renderItem = ({ item }) => {
    const { id, slot_num, start_time, end_time } = item;
    const sTime = Moment(start_time).format('h:mm a');
    const eTime = Moment(end_time).format('h:mm a');
    const data = this.props.slot.scenarios.filter(table => table.slot === slot_num);
    return (
      <SlotTable
        id={id}
        title={slot_num}
        start_time={sTime}
        end_time={eTime}
        table={data}
        navigation={this.props.navigation}
      />
    );
  }

  keyExtractor = (item, index) => item.id
  render() {
    if (this.props.slot.scenarios) {
      return (
        <View>
        <FlatList
            data={this.props.slots}
            renderItem={this._renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      );
    } else {
      return <Spinner size='large' />;
    }
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
    slot: state.slot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions, scenarioActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
