import axios from 'axios';
import {
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAIL,
} from './types';

export const fetchVendors = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_VENDORS });

    axios.get('http://localhost:8000/vendors')
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
