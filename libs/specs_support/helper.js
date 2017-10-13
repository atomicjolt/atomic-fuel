'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _redux = require('redux');

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _api = require('../libs/middleware/api');

var _api2 = _interopRequireDefault(_api);

var _settings = require('../libs/reducers/settings');

var _settings2 = _interopRequireDefault(_settings);

var _configure_store = require('../libs/store/configure_store');

var _configure_store2 = _interopRequireDefault(_configure_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'mockStore',


    // Create a fake store for testing
    value: function mockStore(state) {
      return {
        subscribe: function subscribe() {},
        dispatch: function dispatch() {},
        getState: function getState() {
          return _extends({}, state);
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
      var rootReducer = (0, _redux.combineReducers)(_extends({
        settings: _settings2.default
      }, additionalReducers));
      var middleware = [_api2.default];
      return (0, _configure_store2.default)(initialState, rootReducer, middleware);
    }
  }, {
    key: 'testPayload',
    value: function testPayload() {
      return JSON.stringify([{
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
  }]);

  return Helper;
}();

exports.default = Helper;