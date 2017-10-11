import { TabNavigator } from 'react-navigation';
//import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import Schedule from './Schedule';
import ScenarioList from './ScenarioList';
import VendorScreen from './VendorScreen';
import MapScreen from './MapScreen'

const MyApp = TabNavigator({
  // Login: {
  //   screen: LoginForm
  // },
  Home: {
    screen: HomeScreen,
  },
  Schedule: {
    screen: Schedule
  },
  Vendors: {
    screen: VendorScreen
  },
  Map: {
    screen: MapScreen
  }
}, {
  tabBarPositions: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
});

// const mapStateToProps = ({ auth }) => {
//   const { isLoggedIn } = auth;
//   return ({
//     isLoggedIn
//   });
// };

export default MyApp;
