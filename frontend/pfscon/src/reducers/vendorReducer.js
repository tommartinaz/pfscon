import {
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAIL
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VENDORS_SUCCESS:
      return action.payload.data;
    case FETCH_VENDORS:
      return action.payload || state;
    default:
      return state;
  }
};
