'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = undefined;
exports.clearErrors = clearErrors;

var _wrapper = require('../constants/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local actions
var actions = ['CLEAR_ERRORS'];

// Actions that make an api request
var requests = [];

var Constants = exports.Constants = (0, _wrapper2.default)(actions, requests);

function clearErrors() {
  return {
    type: Constants.CLEAR_ERRORS
  };
}