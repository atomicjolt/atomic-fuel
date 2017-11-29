import { Constants } from '../actions/errors';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === Constants.CLEAR_ERRORS) {
    return [];
  }

  if (action.error) {
    return [...state, action.error];
  }

  return state;
};
