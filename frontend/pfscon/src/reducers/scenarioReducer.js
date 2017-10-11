import _ from 'lodash';
import {
  FETCH_SCENARIOS,
  FETCH_SCENARIOS_SUCCESS,
  FETCH_SCENARIOS_FAIL,
  FETCH_SCENARIOS_SLOT1,
  FETCH_SCENARIOS_SLOT1_SUCCESS,
  FETCH_SCENARIOS_SLOT1_FAIL,
  FETCH_SCENARIOS_SLOT2,
  FETCH_SCENARIOS_SLOT2_SUCCESS,
  FETCH_SCENARIOS_SLOT2_FAIL,
  FETCH_SCENARIOS_SLOT3,
  FETCH_SCENARIOS_SLOT3_SUCCESS,
  FETCH_SCENARIOS_SLOT3_FAIL,
  SELECT_SCENARIO
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCENARIOS_SUCCESS:
      return action.payload.data;
    case SELECT_SCENARIO:
      return action.payload;
    default:
      return state;
  }
};
