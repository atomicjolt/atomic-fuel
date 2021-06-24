"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HandlerSingleton = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _communicator = _interopRequireDefault(require("../communications/communicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HandlerSingleton = /*#__PURE__*/function () {
  function HandlerSingleton(dispatch) {
    var _this = this;

    _classCallCheck(this, HandlerSingleton);

    _defineProperty(this, "handleComm", function (e) {
      var message = e.data;

      if (_lodash["default"].isString(e.data)) {
        try {
          message = JSON.parse(e.data);
        } catch (ex) {
          // We can't parse the data as JSON just send it through as a string
          message = e.data;
        }
      }

      _this.dispatch({
        communication: true,
        type: 'POST_MESSAGE_RECIEVED',
        message: message,
        data: e.data
      });
    });

    this.dispatch = dispatch;
  }

  _createClass(HandlerSingleton, null, [{
    key: "prepareInstance",
    value: function prepareInstance(dispatch) {
      var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

      if (!HandlerSingleton.instance) {
        HandlerSingleton.communicator = new _communicator["default"](domain);
        HandlerSingleton.instance = new HandlerSingleton(dispatch);
        HandlerSingleton.communicator.enableListener(HandlerSingleton.instance);
      }
    }
  }]);

  return HandlerSingleton;
}();

exports.HandlerSingleton = HandlerSingleton;

_defineProperty(HandlerSingleton, "communicator", null);

_defineProperty(HandlerSingleton, "instance", null);

var _default = function _default(store) {
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
        } catch (e) {// do nothing
        }
      }

      next(action);
    };
  };
};

exports["default"] = _default;