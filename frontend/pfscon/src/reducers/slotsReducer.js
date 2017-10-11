import {
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAIL,
  SELECT_SLOT
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SLOTS_SUCCESS:
      console.log("SLOT_REDUCER", action.payload.data)
      return action.payload.data;
    case SELECT_SLOT:
      return action.payload;
    default:
      return state;
  }
};
