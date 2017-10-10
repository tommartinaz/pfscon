import _ from 'lodash';
import {
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAIL,
  SELECT_SLOT
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SLOTS_SUCCESS:
      return action.payload.data;
    case SELECT_SLOT:
      return action.payload;
    default:
      return state;
  }
};
