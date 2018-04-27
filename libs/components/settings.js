'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsContext = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.withSettings = withSettings;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsContext = exports.SettingsContext = _react2.default.createContext(window.DEFAULT_SETTINGS);

function withSettings(Component) {
  return function SettingsComponent(props) {
    return _react2.default.createElement(
      SettingsContext.Consumer,
      null,
      function (settings) {
        return _react2.default.createElement(Component, (0, _extends3.default)({}, props, { settings: settings }));
      }
    );
  };
}