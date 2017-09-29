'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (initialState, rootReducer, middleware) {

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware))];

  // In production, we want to use just the middleware.
  // In development, we want to use some store enhancers from redux-devtools.
  // UglifyJS will eliminate the dead code depending on the build environment.
  if (__DEV__) {
    enhancers = [].concat(_toConsumableArray(enhancers), [_dev_tools2.default.instrument(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
  }

  var store = _redux.compose.apply(undefined, _toConsumableArray(enhancers))(_redux.createStore)(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    module.hot.accept(rootReducer, function () {
      return store.replaceReducer(rootReducer);
    });
  }

  return store;
};

var _redux = require('redux');

var _reduxDevtools = require('redux-devtools');

var _dev_tools = require('../dev/dev_tools');

var _dev_tools2 = _interopRequireDefault(_dev_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }