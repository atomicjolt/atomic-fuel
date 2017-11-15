'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandlerSingleton = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _communicator = require('../communications/communicator');

var _communicator2 = _interopRequireDefault(_communicator);

var _post_message = require('../actions/post_message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HandlerSingleton = exports.HandlerSingleton = (_temp = _class = function () {
  (0, _createClass3.default)(HandlerSingleton, null, [{
    key: 'prepareInstance',
    value: function prepareInstance(dispatch) {
      var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      if (!HandlerSingleton.instance) {
        HandlerSingleton.communicator = new _communicator2.default(domain);
        HandlerSingleton.instance = new HandlerSingleton(dispatch);
        HandlerSingleton.communicator.enableListener(HandlerSingleton.instance);
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
      var message = _lodash2.default.isString(e.data) ? JSON.parse(e.data) : e.data;
      this.dispatch({
        communication: true,
        type: 'POST_MESSAGE_RECIEVED',
        message: message,
        data: e.data
      });
    }
  }]);
  return HandlerSingleton;
}(), _class.communicator = null, _class.instance = null, _temp);

exports.default = function (store) {
  return function (next) {
    return function (action) {
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
  };
};