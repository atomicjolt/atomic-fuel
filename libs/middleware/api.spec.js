"use strict";

var _api = _interopRequireWildcard(require("./api"));

var _network = _interopRequireDefault(require("../constants/network"));

var _helper = _interopRequireDefault(require("../specs_support/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('api middleware', function () {
  _helper["default"].mockAllAjax();

  it('implements Redux middleware interface', function () {
    var store = {
      getState: function getState() {}
    };
    var middleware = (0, _api["default"])(store);

    var nextHandler = function nextHandler() {};

    var actionHandler = middleware(nextHandler); // api middleware takes one arg

    expect(_api["default"].length).toBe(1); // api middleware must return a function to handle next

    expect(_typeof(middleware)).toBe('function'); // next handler returned by api middleware must take one argument

    expect(middleware.length).toBe(1); // next handler must return a function to handle action

    expect(_typeof(actionHandler)).toBe('function'); // action handler must take one argument

    expect(actionHandler.length).toBe(1);
  });
  it('passes action on to next middleware', function () {
    var store = {
      getState: function getState() {}
    };
    var action = {
      type: 'TEST'
    };
    var nextHandler = (0, _api["default"])(store);

    var next = function next(actionPassed) {
      expect(actionPassed).toBe(action);
    };

    var actionHandler = nextHandler(next);
    actionHandler(action);
  });
  it('calls the api library', function () {
    var action = {
      type: 'TEST',
      method: _network["default"].GET,
      url: 'http://www.example.com/api/stuff.json'
    };
    var middleware = (0, _api["default"])(_helper["default"].makeStore());

    var nextHandler = function nextHandler() {};

    var actionHandler = middleware(nextHandler);
    actionHandler(action);
  });
});
describe('apiRequest', function () {
  it('returns a promise', function () {
    var Store =
    /*#__PURE__*/
    function () {
      function Store() {
        _classCallCheck(this, Store);
      }

      _createClass(Store, [{
        key: "getState",
        value: function getState() {
          return {
            settings: {
              api_url: 'http://www.something.com/asdfaoer'
            }
          };
        }
      }, {
        key: "dispatch",
        value: function dispatch() {}
      }]);

      return Store;
    }();

    var store = new Store();
    var action = {
      method: _network["default"].GET
    };
    var promise = (0, _api.apiRequest)(store, action);
    expect(promise.then).toBeDefined();
  });
});