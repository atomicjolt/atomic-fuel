'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = undefined;
exports.refreshJwt = refreshJwt;

var _wrapper = require('../constants/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local actions
var actions = [];

// Actions that make an api request
var requests = ['REFRESH_JWT'];

var Constants = exports.Constants = (0, _wrapper2.default)(actions, requests);

function refreshJwt(userId) {
  return {
    type: Constants.REFRESH_JWT,
    method: _network2.default.GET,
    url: 'api/jwts/' + userId
  };
}