import axios from 'axios';
import {
  FETCH_SLOTS,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAIL,
  SELECT_SLOT
} from './types';

export const fetchSlots = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SLOTS });

    axios.get('http://localhost:8000/slots')
      .then(data => fetchSlotsSuccess(dispatch, data))
      .catch(() => fetchSlotsFail(dispatch))
  };
};

const fetchSlotsSuccess = (dispatch, scenario) => {
  dispatch({
    type: FETCH_SLOTS_SUCCESS,
    payload: scenario
  });
};

const fetchSlotsFail = (dispatch) => {
  dispatch({
    type: FETCH_SLOTS_FAIL
  });
};

export const selectSlot = id => {
  return {
    type: SELECT_SLOT,
    payload: id
  }
}
