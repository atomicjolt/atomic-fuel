"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errors = require("../actions/errors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [];

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _errors.Constants.CLEAR_ERRORS:
      return [];

    case _errors.Constants.ADD_ERROR:
      return [].concat(_toConsumableArray(state), [action.payload]);

    default:
      if (action.error) {
        var message = action.error.message;

        if (action.error.response && action.error.response.text) {
          try {
            var json = JSON.parse(action.error.response.text);

            if (json) {
              message = json.message;
            }
          } catch (ex) {// We can't parse the data as JSON just let the original error message stand
          }
        }

        return [].concat(_toConsumableArray(state), [{
          error: action.error,
          message: message,
          context: action
        }]);
      }

      return state;
  }
};

exports["default"] = _default;