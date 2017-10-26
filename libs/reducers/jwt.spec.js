'use strict';

var _jwt = require('../actions/jwt');

var _jwt2 = require('./jwt');

var _jwt3 = _interopRequireDefault(_jwt2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('jwt reducer', function () {
  describe('initial state', function () {
    it('has a jwt token', function () {
      var initial = { jwt: 'asdf' };
      var initialState = initial;
      var state = (0, _jwt3.default)(initialState, {});
      expect(state.jwt).toEqual(initial.jwt);
    });
  });

  describe('jwt update', function () {
    it('has a jwt token', function () {
      var state = (0, _jwt3.default)({ jwt: 'asdf' }, {});

      var newJwt = { jwt: '1234' };
      var newState = (0, _jwt3.default)(state, {
        type: _jwt.Constants.REFRESH_JWT_DONE,
        payload: newJwt
      });

      expect(newState).toEqual(newJwt.jwt);
    });
  });
});