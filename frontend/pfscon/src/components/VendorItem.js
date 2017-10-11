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

class VendorItem extends Component {

  static navigationOptions = {
    title: 'Vendors',
  }
  render() {
    const { titleStyle } = styles;
    const { id, title, url } = this.props;
    return (
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title} - {url}
            </Text>
          </CardSection>
        </View>
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


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(VendorItem);
