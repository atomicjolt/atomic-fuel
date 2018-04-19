'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwt = require('../actions/jwt');

var initialState = '';

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _jwt.Constants.REFRESH_JWT_DONE:
      if (action.payload.jwt) {
        // Ensure we received a valid jwt. If the server isn't available we
        // will get undefined. If there is a chance the current jwt is still
        // valid we want to leave it in place. Note that this typically happens
        // when the user loses network connectivity.
        return action.payload.jwt;
      }
      return state;

    default:
      return state;

  }
};