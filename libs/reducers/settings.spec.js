'use strict';

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('settings reducer', function () {
  describe('initial state', function () {
    it('returns empty state', function () {
      var initialState = {};
      var state = (0, _settings2.default)(initialState, {});
      expect(state).toEqual({});
    });
  });

  describe('getInitialSettings', function () {
    it('Returns the state provided by the server', function () {
      var serverSettings = { foo: 1 };
      var newSettings = (0, _settings.getInitialSettings)(serverSettings);
      expect(newSettings).toEqual(serverSettings);
    });

    it('Returns combined state', function () {
      var serverSettings1 = { foo: 1 };
      var serverSettings2 = { bar: 2 };
      var newSettings = (0, _settings.getInitialSettings)(serverSettings1, serverSettings2);
      expect(newSettings.foo).toEqual(1);
      expect(newSettings.bar).toEqual(2);
    });
  });
});