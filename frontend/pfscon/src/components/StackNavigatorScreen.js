import { StackNavigator } from 'react-navigation';
import Schedule from './Schedule';
import DetailsScreen from './DetailsScreen';

const StackNavigatorScreen = StackNavigator({
  SList: {
    screen: Schedule,
    navigationOptions: {
      title: 'Schedule',
      headerStyle: {
        backgroundColor: "#9a9"
      }
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#9a9"
      }
    }
  }
});

export default StackNavigatorScreen;
