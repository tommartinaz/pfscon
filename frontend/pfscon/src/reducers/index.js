import { combineReducers } from 'redux';
import authReducer from './authReducer';
import scenarioReducer from './scenarioReducer';
import slotsReducer from './slotsReducer';
import selectedScenarioReducer from './selectedScenarioReducer';
import selectedSlotReducer from './selectedSlotReducer';
import slot1Reducer from './slot1Reducer';
import slot2Reducer from './slot2Reducer';
import slot3Reducer from './slot3Reducer';
import vendorReducer from './vendorReducer';

export default combineReducers({
  auth: authReducer,
  scenarios: scenarioReducer,
  slots: slotsReducer,
  selectedScenarioId: selectedScenarioReducer,
  selectedSlotId: selectedSlotReducer,
  slot: slot1Reducer,
  vendors: vendorReducer
});
