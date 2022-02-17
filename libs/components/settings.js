"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsContext = void 0;
exports.withSettings = withSettings;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateGlobalSetting = function updateGlobalSetting() {};

var SettingsContext = /*#__PURE__*/_react["default"].createContext(_objectSpread(_objectSpread({}, window.DEFAULT_SETTINGS), {}, {
  updateGlobalSetting: updateGlobalSetting
}));

exports.SettingsContext = SettingsContext;

function withSettings(Component) {
  return function SettingsComponent(props) {
    return /*#__PURE__*/_react["default"].createElement(SettingsContext.Consumer, null, function (settings) {
      return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
        settings: settings
      }));
    });
  };
}