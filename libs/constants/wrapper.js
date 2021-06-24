"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.DONE = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DONE = '_DONE';
exports.DONE = DONE;

function _default(actionTypes, asyncActionTypes) {
  var types = _lodash["default"].reduce(actionTypes, function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, key));
  }, {});

  types = _lodash["default"].reduce(asyncActionTypes, function (result, key) {
    var _objectSpread3;

    return _objectSpread(_objectSpread({}, result), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, key, key), _defineProperty(_objectSpread3, "".concat(key).concat(DONE), "".concat(key).concat(DONE)), _objectSpread3));
  }, types);
  types.DONE = DONE;
  return types;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvd3JhcHBlci5qcyJdLCJuYW1lcyI6WyJET05FIiwiYWN0aW9uVHlwZXMiLCJhc3luY0FjdGlvblR5cGVzIiwidHlwZXMiLCJfIiwicmVkdWNlIiwicmVzdWx0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsSUFBSSxHQUFHLE9BQWI7OztBQUVRLGtCQUFTQyxXQUFULEVBQXNCQyxnQkFBdEIsRUFBd0M7QUFFckQsTUFBSUMsS0FBSyxHQUFHQyxtQkFBRUMsTUFBRixDQUFTSixXQUFULEVBQXNCLFVBQUNLLE1BQUQsRUFBU0MsR0FBVDtBQUFBLDJDQUM3QkQsTUFENkIsMkJBRS9CQyxHQUYrQixFQUV6QkEsR0FGeUI7QUFBQSxHQUF0QixFQUdSLEVBSFEsQ0FBWjs7QUFLQUosRUFBQUEsS0FBSyxHQUFHQyxtQkFBRUMsTUFBRixDQUFTSCxnQkFBVCxFQUEyQixVQUFDSSxNQUFELEVBQVNDLEdBQVQ7QUFBQTs7QUFBQSwyQ0FDOUJELE1BRDhCLDZEQUVoQ0MsR0FGZ0MsRUFFMUJBLEdBRjBCLDZDQUc3QkEsR0FINkIsU0FHdkJQLElBSHVCLGFBR1hPLEdBSFcsU0FHTFAsSUFISztBQUFBLEdBQTNCLEVBSUpHLEtBSkksQ0FBUjtBQU1BQSxFQUFBQSxLQUFLLENBQUNILElBQU4sR0FBYUEsSUFBYjtBQUVBLFNBQU9HLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBET05FID0gJ19ET05FJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYWN0aW9uVHlwZXMsIGFzeW5jQWN0aW9uVHlwZXMpIHtcblxuICBsZXQgdHlwZXMgPSBfLnJlZHVjZShhY3Rpb25UeXBlcywgKHJlc3VsdCwga2V5KSA9PiAoe1xuICAgIC4uLnJlc3VsdCxcbiAgICBba2V5XToga2V5XG4gIH0pLCB7fSk7XG5cbiAgdHlwZXMgPSBfLnJlZHVjZShhc3luY0FjdGlvblR5cGVzLCAocmVzdWx0LCBrZXkpID0+ICh7XG4gICAgLi4ucmVzdWx0LFxuICAgIFtrZXldOiBrZXksXG4gICAgW2Ake2tleX0ke0RPTkV9YF06IGAke2tleX0ke0RPTkV9YFxuICB9KSwgdHlwZXMpO1xuXG4gIHR5cGVzLkRPTkUgPSBET05FO1xuXG4gIHJldHVybiB0eXBlcztcbn1cbiJdfQ==