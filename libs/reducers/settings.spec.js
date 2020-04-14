"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _settings = _interopRequireWildcard(require("./settings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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