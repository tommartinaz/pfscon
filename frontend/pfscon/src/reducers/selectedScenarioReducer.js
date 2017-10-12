import SELECT_SCENARIO from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_SCENARIO:
      return action.payload;
    default:
      return state;
  }
}
