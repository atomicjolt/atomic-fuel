import Communicator from '../communications/communicator';
import { Constants } from '../actions/post_message';

export class HandlerSingleton {

  static communicator = null;
  static instance = null;

  static prepareInstance(dispatch, domain = '*') {
    if (!HandlerSingleton.instance) {
      HandlerSingleton.communicator = new Communicator(domain);
      HandlerSingleton.instance = new HandlerSingleton(dispatch);
      HandlerSingleton.communicator.enableListener(HandlerSingleton.instance);
    }
  }

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  handleComm(e) {
    const message = JSON.parse(e.data);
    this.dispatch({
      communication: true,
      type: 'POST_MESSAGE_RECIEVED',
      message,
      data: e.data
    });
  }
}

export default store => next => (action) => {
  if (action.postMessage) {
    // You have to call a post message action first before you will recieve messages
    HandlerSingleton.prepareInstance(store.dispatch);
    try {
      if (action.broadcast) {
        HandlerSingleton.communicator.broadcast(action.message);
      } else {
        HandlerSingleton.communicator.comm(action.message);
      }
    } catch (e) {
      // do nothing
    }
  }
  next(action);
};
