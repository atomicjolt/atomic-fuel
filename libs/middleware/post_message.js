'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp;

var _communicator = require('../communications/communicator');

var _communicator2 = _interopRequireDefault(_communicator);

var _post_message = require('../actions/post_message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HandlerSingleton = (_temp = _class = function () {
  (0, _createClass3.default)(HandlerSingleton, null, [{
    key: 'prepareInstance',
    value: function prepareInstance(dispatch) {
      if (!HandlerSingleton.instance) {
        HandlerSingleton.instance = new HandlerSingleton(dispatch);
        _communicator2.default.enableListener(HandlerSingleton.instance);
      }
    }
  }]);

  function HandlerSingleton(dispatch) {
    (0, _classCallCheck3.default)(this, HandlerSingleton);

    this.dispatch = dispatch;
  }

  (0, _createClass3.default)(HandlerSingleton, [{
    key: 'handleComm',
    value: function handleComm(e) {
      var message = JSON.parse(e.data);
      this.dispatch({
        communication: true,
        type: 'POST_MESSAGE_RECIEVED_' + message.subject,
        message: message,
        data: e.data
      });
    }
  }]);
  return HandlerSingleton;
}(), _class.instance = null, _temp);

exports.default = function (store) {
  return function (next) {
    return function (action) {
      if (action.postMessage) {
        // You have to call a post message action first before you will recieve messages
        HandlerSingleton.prepareInstance(store.dispatch);
        if (action.type === _post_message.Constants.POST_MESSAGE) {
          try {
            _communicator2.default.broadcastMsg(action.message);
          } catch (e) {
            // do nothing
          }
        }
      }
      next(action);
    };
  };
};