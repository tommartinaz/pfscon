import axios from 'axios';
import {
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAIL,
  BASE_URL
} from './types';

export const fetchVendors = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_VENDORS });

    axios.get(`${BASE_URL}/vendors`)
      .then(data => fetchVendorsSuccess(dispatch, data))
      .catch(() => fetchVendorsFail(dispatch))
  };
};

const fetchVendorsSuccess = (dispatch, vendor) => {
  dispatch({
    type: FETCH_VENDORS_SUCCESS,
    payload: vendor
  });
};

const fetchVendorsFail = (dispatch) => {
  dispatch({
    type: FETCH_VENDORS_FAIL
  });
};
