import { StackNavigator } from 'react-navigation';
import Schedule from './Schedule';
import DetailsScreen from './DetailsScreen';

const StackNavigatorScreen = StackNavigator({
  SList: {
    screen: Schedule,
    navigationOptions: {
      title: 'Schedule',
      headerStyle: {
        backgroundColor: "#cdc"
      }
    }
  },
  Details: {
    screen: DetailsScreen
  }
});

export default StackNavigatorScreen;
