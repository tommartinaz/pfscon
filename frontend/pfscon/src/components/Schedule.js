import React, { Component } from 'react';
import { Image, StyleSheet, Button } from 'react-native';
import { Content, Container, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigation } from 'react-navigation';

import * as actions from '../actions/slotActions';

class Schedule extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ activeTintColor }) => (
      <Image
        source={require('../../cal-icon.png')}
        style={[styles.icon, {tintColor: activeTintColor}]}
      />
    )
  };

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
          <Text>This is my schedule</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title='Go back to home'
          />
        </Content>
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
    slots: state.slots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
