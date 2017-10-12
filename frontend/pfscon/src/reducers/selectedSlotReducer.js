import SELECT_SLOT from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_SLOT:
      return action.payload;
    default:
      return state;
  }
}
