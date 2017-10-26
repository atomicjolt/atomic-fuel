'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

var _helper = require('atomic-reactor/specs_support/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('api middleware', function () {
  _helper2.default.mockAllAjax();

  it('implements Redux middleware interface', function () {
    var store = { getState: function getState() {} };
    var middleware = (0, _api2.default)(store);
    var nextHandler = function nextHandler() {};
    var actionHandler = middleware(nextHandler);

    // api middleware takes one arg
    expect(_api2.default.length).toBe(1);
    // api middleware must return a function to handle next
    expect(typeof middleware === 'undefined' ? 'undefined' : (0, _typeof3.default)(middleware)).toBe('function');
    // next handler returned by api middleware must take one argument
    expect(middleware.length).toBe(1);
    // next handler must return a function to handle action
    expect(typeof actionHandler === 'undefined' ? 'undefined' : (0, _typeof3.default)(actionHandler)).toBe('function');
    // action handler must take one argument
    expect(actionHandler.length).toBe(1);
  });

  it('passes action on to next middleware', function () {
    var store = { getState: function getState() {} };
    var action = {
      type: 'TEST'
    };
    var nextHandler = (0, _api2.default)(store);
    var next = function next(actionPassed) {
      expect(actionPassed).toBe(action);
    };
    var actionHandler = nextHandler(next);
    actionHandler(action);
  });

  it('calls the api library', function () {
    var action = {
      type: 'TEST',
      method: _network2.default.GET,
      url: 'http://www.example.com/api/stuff.json'
    };
    var middleware = (0, _api2.default)(_helper2.default.makeStore());
    var nextHandler = function nextHandler() {};
    var actionHandler = middleware(nextHandler);
    actionHandler(action);
  });
});

describe('apiRequest', function () {
  it('returns a promise', function () {
    var Store = function () {
      function Store() {
        (0, _classCallCheck3.default)(this, Store);
      }

      (0, _createClass3.default)(Store, [{
        key: 'getState',
        value: function getState() {
          return {
            settings: {
              apiUrl: 'http://www.something.com/asdfaoer'
            }
          };
        }
      }, {
        key: 'dispatch',
        value: function dispatch() {}
      }]);
      return Store;
    }();

    var store = new Store();
    var action = {
      method: _network2.default.GET
    };
    var promise = (0, _api.apiRequest)(store, action);
    expect(promise.then).toBeDefined();
  });
});