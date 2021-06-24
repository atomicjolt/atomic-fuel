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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
    value: // Create a fake store for testing
    function mockStore(state) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGVjc19zdXBwb3J0L2hlbHBlci5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJzdGF0ZSIsInN1YnNjcmliZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJpbml0aWFsU2V0dGluZ3MiLCJhZGRpdGlvbmFsU3RhdGUiLCJhZGRpdGlvbmFsUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJfIiwibWVyZ2UiLCJzZXR0aW5ncyIsImNzcmYiLCJhcGlVcmwiLCJyb290UmVkdWNlciIsIm1pZGRsZXdhcmUiLCJBUEkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJuYW1lIiwiYmVmb3JlRWFjaCIsImphc21pbmUiLCJBamF4IiwiaW5zdGFsbCIsInN0dWJSZXF1ZXN0IiwiUmVnRXhwIiwiYW5kUmV0dXJuIiwic3RhdHVzIiwiY29udGVudFR5cGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwidGVzdFBheWxvYWQiLCJhZnRlckVhY2giLCJ1bmluc3RhbGwiLCJtZXRob2QiLCJ1cmwiLCJleHBlY3RlZEhlYWRlcnMiLCJpbnRlcmNlcHQiLCJyZXBseSIsInBlcnNpc3QiLCJnZXQiLCJwb3N0IiwicHV0Iiwibm9jayIsImNsZWFuQWxsIiwiY2xvY2siLCJjYWxsZWRXaXRoU3RhdGUiLCJkaXNwYXRjaGVkQWN0aW9ucyIsInN0b3JlIiwiamVzdCIsImZuIiwiYWN0aW9uIiwicHVzaCIsIm5leHQiLCJpbnZva2UiLCJnZXRDYWxsZWRXaXRoU3RhdGUiLCJhcnIiLCJhIiwiYiIsIm1hcCIsImkiLCJpbmRleE9mIiwiaW5kIiwiaW5kaWNpZXMiLCJzb21lIiwiaXNOaWwiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7O1dBRW5CO0FBQ0EsdUJBQWlCQyxLQUFqQixFQUF3QjtBQUN0QixhQUFPO0FBQ0xDLFFBQUFBLFNBQVMsRUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBub2NrIGZyb20gJ25vY2snO1xuXG5pbXBvcnQgQVBJIGZyb20gJy4uL21pZGRsZXdhcmUvYXBpJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9yZWR1Y2Vycy9zZXR0aW5ncyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlX3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcblxuICAvLyBDcmVhdGUgYSBmYWtlIHN0b3JlIGZvciB0ZXN0aW5nXG4gIHN0YXRpYyBtb2NrU3RvcmUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3Vic2NyaWJlOiAoKSA9PiB7fSxcbiAgICAgIGRpc3BhdGNoOiAoKSA9PiB7fSxcbiAgICAgIGdldFN0YXRlOiAoKSA9PiAoeyAuLi5zdGF0ZSB9KVxuICAgIH07XG4gIH1cblxuICAvLyBDcmVhdGUgYSByZWFsIHN0b3JlIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHRlc3RpbmdcbiAgLy8gRm9yIGFueSBhZGRpdGlvbmFsIHN0YXRlIHByb3ZpZGVkIHlvdSBtdXN0IGFsc28gcHJvdmlkZSB0aGUgY29ycmVzcG9uZGluZ1xuICAvLyByZWR1Y2Vycy5cbiAgc3RhdGljIG1ha2VTdG9yZShpbml0aWFsU2V0dGluZ3MsIGFkZGl0aW9uYWxTdGF0ZSwgYWRkaXRpb25hbFJlZHVjZXJzKSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gXy5tZXJnZSh7XG4gICAgICBzZXR0aW5nczogXy5tZXJnZSh7XG4gICAgICAgIGNzcmY6ICdjc3JmX3Rva2VuJyxcbiAgICAgICAgYXBpVXJsOiAnaHR0cDovL3d3dy5leGFtcGxlLmNvbSdcbiAgICAgIH0sIGluaXRpYWxTZXR0aW5ncylcbiAgICB9LCBhZGRpdGlvbmFsU3RhdGUpO1xuICAgIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHNldHRpbmdzLFxuICAgICAgLi4uYWRkaXRpb25hbFJlZHVjZXJzXG4gICAgfSk7XG4gICAgY29uc3QgbWlkZGxld2FyZSA9IFtBUEldO1xuICAgIHJldHVybiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIHJvb3RSZWR1Y2VyLCBtaWRkbGV3YXJlKTtcbiAgfVxuXG4gIHN0YXRpYyB0ZXN0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoW3tcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ1N0YXJ0ZXIgQXBwJ1xuICAgIH1dKTtcbiAgfVxuXG4gIHN0YXRpYyBzdHViQWpheCgpIHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGphc21pbmUuQWpheC5pbnN0YWxsKCk7XG5cbiAgICAgIGphc21pbmUuQWpheC5zdHViUmVxdWVzdChcbiAgICAgICAgUmVnRXhwKCcuKi9hcGkvdGVzdCcpXG4gICAgICApLmFuZFJldHVybih7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBzdGF0dXNUZXh0OiAnT0snLFxuICAgICAgICByZXNwb25zZVRleHQ6IEhlbHBlci50ZXN0UGF5bG9hZCgpXG4gICAgICB9KTtcblxuICAgICAgamFzbWluZS5BamF4LnN0dWJSZXF1ZXN0KFxuICAgICAgICBSZWdFeHAoJy4qL2FwaS90ZXN0Ly4rJylcbiAgICAgICkuYW5kUmV0dXJuKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgIHJlc3BvbnNlVGV4dDogSGVscGVyLnRlc3RQYXlsb2FkKClcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIGphc21pbmUuQWpheC51bmluc3RhbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtb2NrUmVxdWVzdChtZXRob2QsIGFwaVVybCwgdXJsLCBleHBlY3RlZEhlYWRlcnMpIHtcbiAgICByZXR1cm4gbm9jayhhcGlVcmwsIGV4cGVjdGVkSGVhZGVycylcbiAgICAgIC5pbnRlcmNlcHQodXJsLCBtZXRob2QpXG4gICAgICAucmVwbHkoXG4gICAgICAgIDIwMCxcbiAgICAgICAgSGVscGVyLnRlc3RQYXlsb2FkKCksXG4gICAgICAgIHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICApO1xuICB9XG5cbiAgc3RhdGljIG1vY2tBbGxBamF4KCkge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgbm9jaygnaHR0cDovL3d3dy5leGFtcGxlLmNvbScpXG4gICAgICAgIC5wZXJzaXN0KClcbiAgICAgICAgLmdldChSZWdFeHAoJy4qJykpXG4gICAgICAgIC5yZXBseSgyMDAsIEhlbHBlci50ZXN0UGF5bG9hZCgpLCB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICBub2NrKCdodHRwOi8vd3d3LmV4YW1wbGUuY29tJylcbiAgICAgICAgLnBlcnNpc3QoKVxuICAgICAgICAucG9zdChSZWdFeHAoJy4qJykpXG4gICAgICAgIC5yZXBseSgyMDAsIEhlbHBlci50ZXN0UGF5bG9hZCgpLCB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICBub2NrKCdodHRwOi8vd3d3LmV4YW1wbGUuY29tJylcbiAgICAgICAgLnBlcnNpc3QoKVxuICAgICAgICAucHV0KFJlZ0V4cCgnLionKSlcbiAgICAgICAgLnJlcGx5KDIwMCwgSGVscGVyLnRlc3RQYXlsb2FkKCksIHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgIG5vY2soJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20nKVxuICAgICAgICAucGVyc2lzdCgpXG4gICAgICAgIC5kZWxldGUoUmVnRXhwKCcuKicpKVxuICAgICAgICAucmVwbHkoMjAwLCBIZWxwZXIudGVzdFBheWxvYWQoKSwgeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIG5vY2suY2xlYW5BbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtb2NrQ2xvY2soKSB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBqYXNtaW5lLmNsb2NrKCkuaW5zdGFsbCgpOyAvLyBNb2NrIG91dCB0aGUgYnVpbHQgaW4gdGltZXJzXG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgamFzbWluZS5jbG9jaygpLnVuaW5zdGFsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHdyYXBNaWRkbGV3YXJlKG1pZGRsZXdhcmUsIHN0YXRlID0ge30pIHtcbiAgICBjb25zdCBjYWxsZWRXaXRoU3RhdGUgPSB7XG4gICAgICBkaXNwYXRjaGVkQWN0aW9uczogW10sXG4gICAgfTtcbiAgICBjb25zdCBzdG9yZSA9IHtcbiAgICAgIGdldFN0YXRlOiBqZXN0LmZuKCgpID0+IChzdGF0ZSkpLFxuICAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKGFjdGlvbikgPT4gY2FsbGVkV2l0aFN0YXRlLmRpc3BhdGNoZWRBY3Rpb25zLnB1c2goYWN0aW9uKSksXG4gICAgfTtcbiAgICBjb25zdCBuZXh0ID0gamVzdC5mbigpO1xuICAgIGNvbnN0IGludm9rZSA9IChhY3Rpb24pID0+IG1pZGRsZXdhcmUoc3RvcmUpKG5leHQpKGFjdGlvbik7XG4gICAgY29uc3QgZ2V0Q2FsbGVkV2l0aFN0YXRlID0gKCkgPT4gY2FsbGVkV2l0aFN0YXRlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLCBuZXh0LCBpbnZva2UsIGdldENhbGxlZFdpdGhTdGF0ZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgaW5kaWNpZXMoYXJyLCBhLCBiKSB7IHJldHVybiBfLm1hcChbYSwgYl0sIChpKSA9PiBfLmluZGV4T2YoYXJyLCBpKSk7IH1cblxuICBzdGF0aWMgaXNCZWZvcmUoLi4uYXJncykge1xuICAgIGNvbnN0IGluZCA9IEhlbHBlci5pbmRpY2llcyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBpZiAoXy5zb21lKGluZCwgKGkpID0+IF8uaXNOaWwoaSkpKSB7IHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGluIGFycicpOyB9XG4gICAgcmV0dXJuIGluZFswXSA8IGluZFsxXTtcbiAgfVxuXG59XG4iXX0=