"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialSettings = getInitialSettings;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Just return state. Don't let settings from the server mutate.
var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return state;
};

exports["default"] = _default;

function getInitialSettings() {
  // Add default settings that can be overridden by values in serverSettings
  var settings = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  _lodash["default"].forEach(args, function (arg) {
    return settings = _objectSpread(_objectSpread({}, settings), arg);
  });

  return settings;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImdldEluaXRpYWxTZXR0aW5ncyIsInNldHRpbmdzIiwiYXJncyIsIl8iLCJmb3JFYWNoIiwiYXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRUE7ZUFDZTtBQUFBLE1BQUNBLEtBQUQsdUVBQVMsRUFBVDtBQUFBLFNBQWdCQSxLQUFoQjtBQUFBLEM7Ozs7QUFFUixTQUFTQyxrQkFBVCxHQUFxQztBQUMxQztBQUNBLE1BQUlDLFFBQVEsR0FBRyxFQUFmOztBQUYwQyxvQ0FBTkMsSUFBTTtBQUFOQSxJQUFBQSxJQUFNO0FBQUE7O0FBRzFDQyxxQkFBRUMsT0FBRixDQUFVRixJQUFWLEVBQWdCLFVBQUNHLEdBQUQ7QUFBQSxXQUFVSixRQUFRLG1DQUFRQSxRQUFSLEdBQXFCSSxHQUFyQixDQUFsQjtBQUFBLEdBQWhCOztBQUNBLFNBQU9KLFFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIEp1c3QgcmV0dXJuIHN0YXRlLiBEb24ndCBsZXQgc2V0dGluZ3MgZnJvbSB0aGUgc2VydmVyIG11dGF0ZS5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9KSA9PiBzdGF0ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxTZXR0aW5ncyguLi5hcmdzKSB7XG4gIC8vIEFkZCBkZWZhdWx0IHNldHRpbmdzIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgdmFsdWVzIGluIHNlcnZlclNldHRpbmdzXG4gIGxldCBzZXR0aW5ncyA9IHt9O1xuICBfLmZvckVhY2goYXJncywgKGFyZykgPT4gKHNldHRpbmdzID0geyAuLi5zZXR0aW5ncywgLi4uYXJnIH0pKTtcbiAgcmV0dXJuIHNldHRpbmdzO1xufVxuIl19