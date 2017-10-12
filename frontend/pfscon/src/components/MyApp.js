import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Schedule from './Schedule';
import VendorScreen from './VendorScreen';
import MapScreen from './MapScreen';
import StackNavigatorScreen from './StackNavigatorScreen';

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Schedule: {
    screen: StackNavigatorScreen
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
    inactiveTintColor: '#fff',
    activeTintColor: '#e91e63',
    inactiveBackgroundColor: '#9a9',
    activeBackgroundColor: '#cdc'
  }
});

export default MyApp;
