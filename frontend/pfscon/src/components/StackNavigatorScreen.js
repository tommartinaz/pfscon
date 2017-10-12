import { StackNavigator } from 'react-navigation';
import Schedule from './Schedule';
import DetailsScreen from './DetailsScreen';

const StackNavigatorScreen = StackNavigator({
  SList: {
    screen: Schedule,
    headerMode: 'none'
  },
  Details: {
    screen: DetailsScreen
  }
});

export default StackNavigatorScreen;
