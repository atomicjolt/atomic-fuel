'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = function (initialState, rootReducer, middleware) {

  var enhancers = [_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(middleware))];

  // In production, we want to use just the middleware.
  // In development, we want to use some store enhancers from redux-devtools.
  // UglifyJS will eliminate the dead code depending on the build environment.
  if (__DEV__) {
    enhancers = [].concat((0, _toConsumableArray3.default)(enhancers), [_dev_tools2.default.instrument(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
  }

  var store = _redux.compose.apply(undefined, (0, _toConsumableArray3.default)(enhancers))(_redux.createStore)(rootReducer, initialState);

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