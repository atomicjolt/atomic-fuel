import Communicator from '../communications/communicator';
import { Constants } from '../actions/post_message';

class HandlerSingleton {
  static instance = null;
  static prepareInstance(dispatch) {
    if (!HandlerSingleton.instance) {
      HandlerSingleton.instance = new HandlerSingleton(dispatch);
      Communicator.enableListener(HandlerSingleton.instance);
    }
  }

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  handleComm(e) {
    const message = JSON.parse(e.data);
    this.dispatch({
      communication: true,
      type: `POST_MESSAGE_RECIEVED_${message.subject}`,
      message,
      data: e.data
    });
  }
}

export default store => next => (action) => {
  if (action.postMessage) {
    // You have to call a post message action first before you will recieve messages
    HandlerSingleton.prepareInstance(store.dispatch);
    if (action.type === Constants.POST_MESSAGE) {
      try {
        Communicator.broadcastMsg(action.message);
      } catch (e) {
        // do nothing
      }
    }
  }
  next(action);
};
