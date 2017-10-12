import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CardSection } from './common';
import * as actions from '../actions/scenarioActions';

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
              {title}
            </Text>
          </CardSection>
          <TouchableOpacity
            onPress={() => Linking.openURL(url)}
          >
          <CardSection>
            <Text style={styles.descriptionStyle}>
              {url}
            </Text>
          </CardSection>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15,
    backgroundColor: '#cdc',
    flex: 1
  },
  descriptionStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(VendorItem);
