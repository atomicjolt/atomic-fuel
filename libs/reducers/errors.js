'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _errors = require('../actions/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case _errors.Constants.CLEAR_ERRORS:
      return [];

    case _errors.Constants.ADD_ERROR:
      return [].concat((0, _toConsumableArray3.default)(state), [action.payload]);

    default:
      if (action.error) {
        return [].concat((0, _toConsumableArray3.default)(state), [{
          error: action.error,
          message: action.error.message,
          context: action
        }]);
      }
      return state;
  }
};