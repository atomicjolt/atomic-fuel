"use strict";

var _post_message = _interopRequireWildcard(require("./post_message"));

var _helper = _interopRequireDefault(require("../specs_support/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('postMessage middleware', function () {
  _helper["default"].mockAllAjax();

  beforeEach(function () {
    _post_message.HandlerSingleton.instance = null;
  });
  it('implements Redux middleware interface', function () {
    var store = {
      getState: function getState() {}
    };
    var middleware = (0, _post_message["default"])(store);

    var nextHandler = function nextHandler() {};

    var actionHandler = middleware(nextHandler);
    expect(_post_message["default"].length).toBe(1);
    expect(_typeof(middleware)).toBe('function');
    expect(middleware.length).toBe(1);
    expect(_typeof(actionHandler)).toBe('function');
    expect(actionHandler.length).toBe(1);
  });
  it('calls prepareInstance', function () {
    var action = {
      type: 'TEST',
      postMessage: true
    };
    var middleware = (0, _post_message["default"])(_helper["default"].makeStore());

    var nextHandler = function nextHandler() {};

    var actionHandler = middleware(nextHandler);
    spyOn(_post_message.HandlerSingleton, 'prepareInstance');
    actionHandler(action);
    expect(_post_message.HandlerSingleton.prepareInstance).toHaveBeenCalled();
  });
  it('calls comm when it recieves an action', function () {
    var action = {
      type: 'POST_MESSAGE',
      postMessage: true
    };
    var middleware = (0, _post_message["default"])(_helper["default"].makeStore());

    var nextHandler = function nextHandler() {};

    var actionHandler = middleware(nextHandler);

    _post_message.HandlerSingleton.prepareInstance(function () {});

    spyOn(_post_message.HandlerSingleton.communicator, 'comm');
    actionHandler(action);
    expect(_post_message.HandlerSingleton.communicator.comm).toHaveBeenCalled();
  });
  it('HandlerSingleton.handleComm calls the dispatch', function () {
    var spy = jest.fn();

    _post_message.HandlerSingleton.prepareInstance(spy);

    _post_message.HandlerSingleton.instance.handleComm({
      data: '{}'
    });

    expect(spy).toHaveBeenCalled();
  });
  it('HandlerSingleton.handleComm handles invalid json calls the dispatch', function () {
    var spy = jest.fn();

    _post_message.HandlerSingleton.prepareInstance(spy);

    _post_message.HandlerSingleton.instance.handleComm({
      data: 'The server responded with something invalid'
    });

    expect(spy).toHaveBeenCalled();
  });
  it('HandlerSingleton.handleComm calls the dispatch when data is an object', function () {
    var spy = jest.fn();

    _post_message.HandlerSingleton.prepareInstance(spy);

    _post_message.HandlerSingleton.instance.handleComm({
      data: {}
    });

    expect(spy).toHaveBeenCalled();
  });
});