import {
  FETCH_SCENARIOS_SLOT3_SUCCESS,
  FETCH_SCENARIOS_SLOT3_FAIL
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCENARIOS_SLOT3_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};
