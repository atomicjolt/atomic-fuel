import wrapper from '../constants/wrapper';
import Network from '../constants/network';

// Local actions
const actions = [
  'CLEAR_ERRORS',
  'ADD_ERROR',
];

// Actions that make an api request
const requests = [
];

export const Constants = wrapper(actions, requests);

export function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS,
  };
}

// Error should be the original error, usually from a network response.
export function addError(error, message, payload) {
  return {
    type: Constants.ADD_ERROR,
    error,
    message,
    payload,
  };
}