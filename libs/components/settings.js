"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSettings = withSettings;
exports.SettingsContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SettingsContext = _react["default"].createContext(window.DEFAULT_SETTINGS);

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