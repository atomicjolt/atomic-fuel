"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwt = require("../actions/jwt");

var initialState = '';

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

exports["default"] = _default;