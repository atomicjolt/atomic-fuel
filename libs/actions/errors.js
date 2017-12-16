'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = undefined;
exports.clearErrors = clearErrors;
exports.addError = addError;

var _wrapper = require('../constants/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local actions
var actions = ['CLEAR_ERRORS', 'ADD_ERROR'];

// Actions that make an api request
var requests = [];

var Constants = exports.Constants = (0, _wrapper2.default)(actions, requests);

function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS
  };
}

function addError(error) {
  return {
    type: Constants.ADD_ERROR,
    error: error
  };
}