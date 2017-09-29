'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.apiRequest = apiRequest;

var _api = require('../api/api');

var _api2 = _interopRequireDefault(_api);

var _wrapper = require('../constants/wrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apiRequest(store, action) {
  var state = store.getState();
  var promise = _api2.default.execRequest(action.method, action.url, state.settings.apiUrl, state.jwt, state.settings.csrfToken, action.params, action.body, action.headers, action.timeout);

  if (promise) {
    promise.then(function (response) {
      store.dispatch({
        type: action.type + _wrapper.DONE,
        payload: response.body,
        original: action,
        response: response
      }); // Dispatch the new data
    }, function (error) {
      store.dispatch({
        type: action.type + _wrapper.DONE,
        payload: {},
        original: action,
        error: error
      }); // Dispatch the new error
    });
  }

  return promise;
}

var API = function API(store) {
  return function (next) {
    return function (action) {

      if (action.method) {
        apiRequest(store, action);
      }

      // call the next middleWare
      next(action);
    };
  };
};

exports.default = API;