import {
  FETCH_SCENARIOS_SLOT2_SUCCESS,
  FETCH_SCENARIOS_SLOT2_FAIL
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCENARIOS_SLOT2_SUCCESS:
      console.log("SLOT2_REDUCER", action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
};
