import { combineReducers } from 'redux';
import authReducer from './authReducer';
import scenarioReducer from './scenarioReducer';
import slotsReducer from './slotsReducer';

export default combineReducers({
  auth: authReducer,
  scenarios: scenarioReducer,
  slots: slotsReducer
});
