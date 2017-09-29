'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _network = require('../constants/network');

var _network2 = _interopRequireDefault(_network);

var _helper = require('atomic-reactor/specs_support/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    expect(typeof middleware === 'undefined' ? 'undefined' : _typeof(middleware)).toBe('function');
    // next handler returned by api middleware must take one argument
    expect(middleware.length).toBe(1);
    // next handler must return a function to handle action
    expect(typeof actionHandler === 'undefined' ? 'undefined' : _typeof(actionHandler)).toBe('function');
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
        _classCallCheck(this, Store);
      }

      _createClass(Store, [{
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