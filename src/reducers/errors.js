import { Constants } from '../actions/errors';

const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case Constants.CLEAR_ERRORS:
      return [];

    case Constants.ADD_ERROR:
      return [...state, action.payload];

    default:
      if (action.error) {
        return [...state, {
          error: action.error,
          message: action.error.message,
          context: action,
        }];
      }
      return state;
  }

};
