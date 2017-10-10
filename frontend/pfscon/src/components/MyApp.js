import { TabNavigator } from 'react-navigation';
//import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import Schedule from './Schedule';
import ScenarioList from './ScenarioList';
// import LoginForm from './LoginForm';

//const dispHome = this.props.auth ? HomeScreen : LoginForm;
// console.log(this);

const MyApp = TabNavigator({
  // Login: {
  //   screen: LoginForm
  // },
  Home: {
    screen: HomeScreen,
  },
  Scenario: {
    screen: ScenarioList,
  },
  Schedule: {
    screen: Schedule
  },
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
