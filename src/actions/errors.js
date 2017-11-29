import wrapper from '../constants/wrapper';
import Network from '../constants/network';

// Local actions
const actions = [
  'CLEAR_ERRORS',
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
