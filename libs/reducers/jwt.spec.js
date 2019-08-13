"use strict";

var _jwt = require("../actions/jwt");

var _jwt2 = _interopRequireDefault(require("./jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('jwt reducer', function () {
  describe('initial state', function () {
    it('has a jwt token', function () {
      var initialState = 'asdf';
      var state = (0, _jwt2["default"])(initialState, {});
      expect(state).toEqual(initialState);
    });
  });
  describe('jwt update', function () {
    it('has a jwt token', function () {
      var state = (0, _jwt2["default"])({
        jwt: 'asdf'
      }, {});
      var newJwt = {
        jwt: '1234'
      };
      var newState = (0, _jwt2["default"])(state, {
        type: _jwt.Constants.REFRESH_JWT_DONE,
        payload: newJwt
      });
      expect(newState).toEqual(newJwt.jwt);
    });
    it('jwt token is undefined', function () {
      var initialState = 'thefirstjwt';
      var state = (0, _jwt2["default"])(initialState, {});
      var newJwt = {};
      var newState = (0, _jwt2["default"])(state, {
        type: _jwt.Constants.REFRESH_JWT_DONE,
        payload: newJwt
      });
      expect(newState).toEqual(initialState);
    });
  });
});