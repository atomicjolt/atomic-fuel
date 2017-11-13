import wrapper from '../constants/wrapper';

const actions = [
  'POST_MESSAGE',
];

export const Constants = wrapper(actions, []);

export const postMessage = message => ({
  type: Constants.POST_MESSAGE,
  postMessage: true,
  message
});
