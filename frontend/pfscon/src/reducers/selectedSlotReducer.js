import SELECT_SLOT from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_SLOT:
      console.log("SELECT_SCENARIO", action.payload);
      return action.payload;
    default:
      return state;
  }
}
