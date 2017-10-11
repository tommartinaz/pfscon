import SELECT_SCENARIO from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_SCENARIO:
      console.log("SELECT_SCENARIO", action.payload);
      return action.payload;
    default:
      return state;
  }
}
