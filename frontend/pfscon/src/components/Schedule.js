import React, { Component } from 'react';
import { Image, StyleSheet, Button, FlatList } from 'react-native';
import { Content, Container, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigation } from 'react-navigation';

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
    console.log("ACTIONS", this.props.actions)
    this.props.actions.fetchSlots();
    this.props.actions.fetchScenariosSlot1();
    this.props.actions.fetchScenariosSlot2();
    this.props.actions.fetchScenariosSlot3();
  }

  _renderItem = ({ item }) => {
    const { id, slot_num, start_time, end_time } = item;
    console.log("ITEM", item);
    return (
      <SlotTable
        id={id}
        title={slot_num}
        start_time={start_time}
        end_time={end_time}
        slot1={this.props.slot1}
        slot2={this.props.slot2}
        slot3={this.props.slot3}
      />
    );
  }

  keyExtractor = (item, index) => item.id
  render() {

    return (
      <Container style={styles.contentStyle}>
      <FlatList
          data={this.props.slots}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Go back to home'
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  contentStyle: {
    paddingTop: 15
  }
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
