'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _redux = require('redux');

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _api = require('../middleware/api');

var _api2 = _interopRequireDefault(_api);

var _settings = require('../reducers/settings');

var _settings2 = _interopRequireDefault(_settings);

var _configure_store = require('../store/configure_store');

var _configure_store2 = _interopRequireDefault(_configure_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helper = function () {
  function Helper() {
    (0, _classCallCheck3.default)(this, Helper);
  }

  (0, _createClass3.default)(Helper, null, [{
    key: 'mockStore',


    // Create a fake store for testing
    value: function mockStore(state) {
      return {
        subscribe: function subscribe() {},
        dispatch: function dispatch() {},
        getState: function getState() {
          return (0, _extends3.default)({}, state);
        }
      };
    }

    // Create a real store that can be used for testing
    // For any additional state provided you must also provide the corresponding
    // reducers.

  }, {
    key: 'makeStore',
    value: function makeStore(initialSettings, additionalState, additionalReducers) {
      var initialState = _lodash2.default.merge({
        settings: _lodash2.default.merge({
          csrf: 'csrf_token',
          apiUrl: 'http://www.example.com'
        }, initialSettings)
      }, additionalState);
      var rootReducer = (0, _redux.combineReducers)((0, _extends3.default)({
        settings: _settings2.default
      }, additionalReducers));
      var middleware = [_api2.default];
      return (0, _configure_store2.default)(initialState, rootReducer, middleware);
    }
  }, {
    key: 'testPayload',
    value: function testPayload() {
      return (0, _stringify2.default)([{
        id: 1,
        name: 'Starter App'
      }]);
    }
  }, {
    key: 'stubAjax',
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
    key: 'mockRequest',
    value: function mockRequest(method, apiUrl, url, expectedHeaders) {
      return (0, _nock2.default)(apiUrl, expectedHeaders).intercept(url, method).reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
    }
  }, {
    key: 'mockAllAjax',
    value: function mockAllAjax() {
      beforeEach(function () {
        (0, _nock2.default)('http://www.example.com').persist().get(RegExp('.*')).reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
        (0, _nock2.default)('http://www.example.com').persist().post(RegExp('.*')).reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
        (0, _nock2.default)('http://www.example.com').persist().put(RegExp('.*')).reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
        (0, _nock2.default)('http://www.example.com').persist().delete(RegExp('.*')).reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      });

      afterEach(function () {
        _nock2.default.cleanAll();
      });
    }
  }, {
    key: 'mockClock',
    value: function mockClock() {
      beforeEach(function () {
        jasmine.clock().install(); // Mock out the built in timers
      });

      afterEach(function () {
        jasmine.clock().uninstall();
      });
    }
  }, {
    key: 'wrapMiddleware',
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

      return { store: store, next: next, invoke: invoke, getCalledWithState: getCalledWithState };
    }
  }, {
    key: 'indicies',
    value: function indicies(arr, a, b) {
      return _lodash2.default.map([a, b], function (i) {
        return _lodash2.default.indexOf(arr, i);
      });
    }
  }, {
    key: 'isBefore',
    value: function isBefore() {
      var ind = Helper.indicies(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
      if (_lodash2.default.some(ind, function (i) {
        return _lodash2.default.isNil(i);
      })) {
        throw new Error('Not found in arr');
      }
      return ind[0] < ind[1];
    }
  }]);
  return Helper;
}();

exports.default = Helper;