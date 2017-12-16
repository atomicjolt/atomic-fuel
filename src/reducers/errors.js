import { Constants } from '../actions/errors';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case Constants.CLEAR_ERRORS:
      return [];

    case Constants.ADD_ERROR:
      return [...state, action.error];

    default:
      if (action.error) {
        return [...state, action.error];
      }
      return state;
  }

};
