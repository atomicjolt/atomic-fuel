"use strict";

var _settings = _interopRequireWildcard(require("./settings"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

describe('settings reducer', function () {
  describe('initial state', function () {
    it('returns empty state', function () {
      var initialState = {};
      var state = (0, _settings["default"])(initialState, {});
      expect(state).toEqual({});
    });
  });
  describe('getInitialSettings', function () {
    it('Returns the state provided by the server', function () {
      var serverSettings = {
        foo: 1
      };
      var newSettings = (0, _settings.getInitialSettings)(serverSettings);
      expect(newSettings).toEqual(serverSettings);
    });
    it('Returns combined state', function () {
      var serverSettings1 = {
        foo: 1
      };
      var serverSettings2 = {
        bar: 2
      };
      var newSettings = (0, _settings.getInitialSettings)(serverSettings1, serverSettings2);
      expect(newSettings.foo).toEqual(1);
      expect(newSettings.bar).toEqual(2);
    });
  });
});