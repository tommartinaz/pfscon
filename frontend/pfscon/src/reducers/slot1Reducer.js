import {
  FETCH_SCENARIOS_SLOT1_SUCCESS,
  FETCH_SCENARIOS_SLOT1_FAIL,
  FETCH_SCENARIOS_SLOT1
 } from '../actions/types';

const INITIAL_STATE = { loading: false, scenarios: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCENARIOS_SLOT1_SUCCESS:
      return { ...state, loading: false, scenarios: action.payload.data };
    case FETCH_SCENARIOS_SLOT1:
      return { ...state, loading: true };
    default:
      return state;
  }
};
