import axios from 'axios';
import {
  FETCH_SCENARIOS,
  FETCH_SCENARIOS_SUCCESS,
  FETCH_SCENARIOS_FAIL,
  FETCH_SCENARIOS_SLOT1,
  FETCH_SCENARIOS_SLOT1_SUCCESS,
  FETCH_SCENARIOS_SLOT1_FAIL,
  FETCH_SCENARIOS_SLOT2,
  FETCH_SCENARIOS_SLOT2_SUCCESS,
  FETCH_SCENARIOS_SLOT2_FAIL,
  FETCH_SCENARIOS_SLOT3,
  FETCH_SCENARIOS_SLOT3_SUCCESS,
  FETCH_SCENARIOS_SLOT3_FAIL,
  SELECT_SCENARIO, BASE_URL
} from './types';

export const fetchScenarios = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SCENARIOS });

    axios.get(`${BASE_URL}/scenarios`)
      .then(data => fetchScenariosSuccess(dispatch, data))
      .catch(() => fetchScenariosFail(dispatch))
  };
};

const fetchScenariosSuccess = (dispatch, scenario) => {
  dispatch({
    type: FETCH_SCENARIOS_SUCCESS,
    payload: scenario
  });
};

const fetchScenariosFail = (dispatch) => {
  dispatch({
    type: FETCH_SCENARIOS_FAIL
  });
};

export const fetchScenariosSlot1 = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SCENARIOS_SLOT1 });

    axios.get(`${BASE_URL}/tables`)
      .then(data => fetchScenariosSlot1Success(dispatch, data))
      .catch(() => fetchScenariosSlot1Fail(dispatch))
  };
};

const fetchScenariosSlot1Success = (dispatch, scenario) => {
  dispatch({
    type: FETCH_SCENARIOS_SLOT1_SUCCESS,
    payload: scenario
  });
};

const fetchScenariosSlot1Fail = (dispatch) => {
  dispatch({
    type: FETCH_SCENARIOS_SLOT1_FAIL
  });
};

export const selectedScenarioId = (id) => {
  return {
    type: SELECT_SCENARIO,
    payload: id
  };
};
