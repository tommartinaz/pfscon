import firebase from 'firebase';
import axios from 'axios';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  FETCH_SCENARIOS,
  FETCH_SCENARIOS_SUCCESS,
  FETCH_SCENARIOS_FAIL,
  SELECT_SCENARIO
} from './types';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      loginUserSuccess(dispatch, user);
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
  };
};


export const fetchScenarios = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SCENARIOS });

    axios.get('http://localhost:8000/scenarios')
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

export const selectedScenarioId = (id) => {
  return {
    type: SELECT_SCENARIO,
    payload: id
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
