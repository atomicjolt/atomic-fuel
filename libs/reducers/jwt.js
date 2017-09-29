'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwt = require('../actions/jwt');

var initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _jwt.Constants.REFRESH_JWT_DONE:
      return action.payload.jwt;

    default:
      return state;

  }
};