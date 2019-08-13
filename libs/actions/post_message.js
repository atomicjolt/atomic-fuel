"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMessage = exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var actions = ['POST_MESSAGE'];
var Constants = (0, _wrapper["default"])(actions, []);
exports.Constants = Constants;

var postMessage = function postMessage(message) {
  var broadcast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: Constants.POST_MESSAGE,
    postMessage: true,
    broadcast: broadcast,
    message: message
  };
};

exports.postMessage = postMessage;