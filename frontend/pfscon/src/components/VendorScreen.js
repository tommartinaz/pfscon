import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Image, View, ListItem } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/vendorActions';

import { Header } from './common'
import VendorItem from './VendorItem';

class VendorScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Vendors',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../vendors-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  componentDidMount() {
    this.props.actions.fetchVendors();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => {
    console.log(item);
    return (
      <View>
      <VendorItem
        id={item.id}
        title={item.name}
        url={item.url}
      />
      </View>
    )
  }

  render() {
    return (
      <View>
      <Header text='Vendors' />
      <FlatList
        style={styles.contentStyle}
        data={this.props.vendors}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
      </View>
    );
  }
}
const styles = {
  icon: {
    width: 26,
    height: 26
  },
  contentStyle: {
    paddingTop: 15
  }
};

const mapStateToProps = state => {
  return { vendors: state.vendors };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorScreen);
