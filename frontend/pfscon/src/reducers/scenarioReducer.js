import _ from 'lodash';
import {
  FETCH_SCENARIOS,
  SELECT_SCENARIO,
  FETCH_SCENARIOS_SUCCESS,
  FETCH_SCENARIOS_FAIL
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCENARIOS_SUCCESS:
      return action.payload.data;
    case SELECT_SCENARIO:
      console.log("REDUCER", action.payload)
      return action.payload;
    default:
      return state;
  }
};
