"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearErrors = clearErrors;
exports.addError = addError;
exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = ['CLEAR_ERRORS', 'ADD_ERROR']; // Actions that make an api request

var requests = [];
var Constants = (0, _wrapper["default"])(actions, requests);
exports.Constants = Constants;

function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS
  };
} // Error should be the original error, usually from a network response.


function addError(error, message, context) {
  return {
    type: Constants.ADD_ERROR,
    payload: {
      error: error,
      message: message,
      context: context
    }
  };
}