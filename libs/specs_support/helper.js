"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _redux = require("redux");

var _nock = _interopRequireDefault(require("nock"));

var _api = _interopRequireDefault(require("../middleware/api"));

var _settings = _interopRequireDefault(require("../reducers/settings"));

var _configure_store = _interopRequireDefault(require("../store/configure_store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "mockStore",
    // Create a fake store for testing
    value: function mockStore(state) {
      return {
        subscribe: function subscribe() {},
        dispatch: function dispatch() {},
        getState: function getState() {
          return _objectSpread({}, state);
        }
      };
    } // Create a real store that can be used for testing
    // For any additional state provided you must also provide the corresponding
    // reducers.

  }, {
    key: "makeStore",
    value: function makeStore(initialSettings, additionalState, additionalReducers) {
      var initialState = _lodash["default"].merge({
        settings: _lodash["default"].merge({
          csrf: 'csrf_token',
          apiUrl: 'http://www.example.com'
        }, initialSettings)
      }, additionalState);

      var rootReducer = (0, _redux.combineReducers)(_objectSpread({
        settings: _settings["default"]
      }, additionalReducers));
      var middleware = [_api["default"]];
      return (0, _configure_store["default"])(initialState, rootReducer, middleware);
    }
  }, {
    key: "testPayload",
    value: function testPayload() {
      return JSON.stringify([{
        id: 1,
        name: 'Starter App'
      }]);
    }
  }, {
    key: "stubAjax",
    value: function stubAjax() {
      beforeEach(function () {
        jasmine.Ajax.install();
        jasmine.Ajax.stubRequest(RegExp('.*/api/test')).andReturn({
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: Helper.testPayload()
        });
        jasmine.Ajax.stubRequest(RegExp('.*/api/test/.+')).andReturn({
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: Helper.testPayload()
        });
      });
      afterEach(function () {
        jasmine.Ajax.uninstall();
      });
    }
  }, {
    key: "mockRequest",
    value: function mockRequest(method, apiUrl, url, expectedHeaders) {
      return (0, _nock["default"])(apiUrl, expectedHeaders).intercept(url, method).reply(200, Helper.testPayload(), {
        'content-type': 'application/json'
      });
    }
  }, {
    key: "mockAllAjax",
    value: function mockAllAjax() {
      beforeEach(function () {
        (0, _nock["default"])('http://www.example.com').persist().get(RegExp('.*')).reply(200, Helper.testPayload(), {
          'content-type': 'application/json'
        });
        (0, _nock["default"])('http://www.example.com').persist().post(RegExp('.*')).reply(200, Helper.testPayload(), {
          'content-type': 'application/json'
        });
        (0, _nock["default"])('http://www.example.com').persist().put(RegExp('.*')).reply(200, Helper.testPayload(), {
          'content-type': 'application/json'
        });
        (0, _nock["default"])('http://www.example.com').persist()["delete"](RegExp('.*')).reply(200, Helper.testPayload(), {
          'content-type': 'application/json'
        });
      });
      afterEach(function () {
        _nock["default"].cleanAll();
      });
    }
  }, {
    key: "mockClock",
    value: function mockClock() {
      beforeEach(function () {
        jasmine.clock().install(); // Mock out the built in timers
      });
      afterEach(function () {
        jasmine.clock().uninstall();
      });
    }
  }, {
    key: "wrapMiddleware",
    value: function wrapMiddleware(middleware) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var calledWithState = {
        dispatchedActions: []
      };
      var store = {
        getState: jest.fn(function () {
          return state;
        }),
        dispatch: jest.fn(function (action) {
          return calledWithState.dispatchedActions.push(action);
        })
      };
      var next = jest.fn();

      var invoke = function invoke(action) {
        return middleware(store)(next)(action);
      };

      var getCalledWithState = function getCalledWithState() {
        return calledWithState;
      };

      return {
        store: store,
        next: next,
        invoke: invoke,
        getCalledWithState: getCalledWithState
      };
    }
  }, {
    key: "indicies",
    value: function indicies(arr, a, b) {
      return _lodash["default"].map([a, b], function (i) {
        return _lodash["default"].indexOf(arr, i);
      });
    }
  }, {
    key: "isBefore",
    value: function isBefore() {
      var ind = Helper.indicies(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);

      if (_lodash["default"].some(ind, function (i) {
        return _lodash["default"].isNil(i);
      })) {
        throw new Error('Not found in arr');
      }

      return ind[0] < ind[1];
    }
  }]);

  return Helper;
}();

exports["default"] = Helper;