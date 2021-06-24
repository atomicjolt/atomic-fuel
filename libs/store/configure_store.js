"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _redux = require("redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _default(initialState, rootReducer, middleware) {
  var enhancers = [_redux.applyMiddleware.apply(void 0, _toConsumableArray(middleware))];

  var store = _redux.compose.apply(void 0, enhancers)(_redux.createStore)(rootReducer, initialState);

  return store;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9jb25maWd1cmVfc3RvcmUuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicm9vdFJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZW5oYW5jZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjb21wb3NlIiwiY3JlYXRlU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFZSxrQkFBU0EsWUFBVCxFQUF1QkMsV0FBdkIsRUFBb0NDLFVBQXBDLEVBQWdEO0FBRTdELE1BQU1DLFNBQVMsR0FBRyxDQUNoQkMsd0RBQW1CRixVQUFuQixFQURnQixDQUFsQjs7QUFJQSxNQUFNRyxLQUFLLEdBQUdDLDZCQUFXSCxTQUFYLEVBQXNCSSxrQkFBdEIsRUFBbUNOLFdBQW5DLEVBQWdERCxZQUFoRCxDQUFkOztBQUVBLFNBQU9LLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZSwgcm9vdFJlZHVjZXIsIG1pZGRsZXdhcmUpIHtcblxuICBjb25zdCBlbmhhbmNlcnMgPSBbXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIF07XG5cbiAgY29uc3Qgc3RvcmUgPSBjb21wb3NlKC4uLmVuaGFuY2VycykoY3JlYXRlU3RvcmUpKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cbiJdfQ==