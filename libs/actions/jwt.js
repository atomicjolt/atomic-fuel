"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshJwt = refreshJwt;
exports.Constants = void 0;

var _wrapper = _interopRequireDefault(require("../constants/wrapper"));

var _network = _interopRequireDefault(require("../constants/network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local actions
var actions = []; // Actions that make an api request

var requests = ['REFRESH_JWT'];
var Constants = (0, _wrapper["default"])(actions, requests);
exports.Constants = Constants;

function refreshJwt(userId) {
  return {
    type: Constants.REFRESH_JWT,
    method: _network["default"].GET,
    url: "api/jwts/".concat(userId)
  };
}